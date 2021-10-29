import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Timer from "./Timer";
import dynamic from "next/dynamic";
import CWalletButton from "./Button";
import { useWeb3React } from '@web3-react/core'
import BigNumber from "bignumber.js";
import useWeb3 from "../hooks/useWeb3";
import { useNFTContract } from "../hooks/useContract";

const DynamicComponent = dynamic(() => import("./ConnectWallet"), { ssr: false });
export default function WelcomeTo({
  setShowPopup,
  showPopup,
}) {
  const [totalSupply, setTotalSupply] = useState(0)
  const [saleActive, setSaleActive] = useState(0)
  const [balance, setBalance] = useState(new BigNumber(0))
  const [amount, setAmount] = useState(1)
  const { account } = useWeb3React()
  const web3 = useWeb3()
  const nftContract = useNFTContract()

  const getContractInfo = async () => {
    if (!web3 || !account) {
      return;
    }
    const walletBalance = await web3.eth.getBalance(account)
    setBalance(new BigNumber(walletBalance))
    const tSupply = await nftContract.methods.totalSupply().call()
    setTotalSupply(tSupply)
    const isActive = await nftContract.methods.saleIsActive().call()
    setSaleActive(isActive)
  }

  useEffect(() => {
    getContractInfo()
  }, [account, web3])

  const mint = async () => {
    if (!saleActive) {
      alert("Sale is not active yet.")
      return;
    }
    if (amount > 20) {
      alert("Buy limit exceeded")
      return;
    }
    if (amount < 1) {
      alert("Invalid quantity")
      return;
    }
    const payAmount = new BigNumber("100000000000000000").times(amount);
    if (payAmount.gt(balance)) {
      alert("Balance is not enough")
      return;
    }
    try {
      const res = await nftContract.methods.mintNFTs(amount).send({
        from: account,
        value: payAmount.toString(10),
      });
      const hash = res.transactionHash;
      console.log('hash :>> ', hash);
      getContractInfo();
      alert('Success');
    } catch (error) {
      console.log('e :>> ', error);
      alert('Rejected');
    }
  }

  const cont = {
    show: {
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { x: 0, transition: { duration: 1 } },
  };
  const item = {
    show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "-60vw", opacity: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
      variants={cont}
      initial="hidden"
      animate="show"
      className="text-[32px] lg:text-[40px] lg:leading-[48px] leading-9 xl:text-[64px] xl:leading-[77px] font-extrabold text-crmsn w-full lg:w-[40%] xl:w-[50%] flex-shrink-0"
    >
      <motion.p variants={item} key={1} className="text-white uppercase">
        Welcome to
      </motion.p>
      <motion.p variants={item} key={2} className="uppercase">
        THE skater
      </motion.p>
      <motion.p variants={item} key={3} className="uppercase">
        bears <span className="text-white">club</span>
      </motion.p>
      <motion.div variants={item} key={4}>
        <Timer />
      </motion.div>
      <motion.div variants={item} key={5} className="flex justify-start">
        <DynamicComponent
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      </motion.div>
      {account && (
        <motion.div variants={item} key={6} className="flex-column justify-center">
          <div className="font-medium text-xl">
            Wallet Balance: <span className="text-white">{balance.div(1e18).toFormat(2)} BNB</span>
          </div>
          <div className="font-medium text-xl">
            Total Minted: <span className="text-white">{totalSupply} / 10,000</span>
          </div>
          <input className="w-full text-black my-4" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} min={1} max={20} />
          <CWalletButton
            onClick={() => {
              mint()
            }}
            text="Mint NFT"
            spcng="px-9"
            icon={false}
            type="filled"
          />
        </motion.div>)
      }
    </motion.div>
  );
}
