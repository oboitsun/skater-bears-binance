import React, { useState } from "react";
import { StoicIdentity } from "ic-stoic-identity";
import CWalletButton from "./Button";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal,
  ChakraProvider,
} from "@chakra-ui/react";

function ConnectWallet() {
  const [userAddress, setUserAddress] = useState("");
  const connectWallet = async () => {
    if (window) {
      // Canister Ids
      const nnsCanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";

      // Whitelist
      const whitelist = [nnsCanisterId];

      // Make the request
      const isConnected =
        window &&
        (await window.ic.plug.requestConnect({
          whitelist,
        }));

      // Get the user principal id
      const principalId = window && (await window.ic.plug.agent.getPrincipal());

      setUserAddress(principalId.toText());

      console.log(`Plug's user principal Id is ${principalId}`);
    }
  };

  const connectStoic = async () => {
    if (window) {
      await StoicIdentity.load();
      let identity = await StoicIdentity.connect();
      setUserAddress(identity.getPrincipal().toText());
      console.log(identity.getPrincipal().toText());
    }
  };
  const [pop, setShowPop] = useState(false);
  return (
    <ChakraProvider>
      <div className="connect-wallet z-40">
        {!userAddress ? (
          <div className="relative">
            <div
              onClick={() => {
                setShowPop(!pop);
              }}
              className="relative "
            >
              <CWalletButton text="Connect wallet" type="outlined" />
            </div>

            <div
              className={`${
                pop ? "pointer-events-auto opacity-100 " : "pointer-events-none opacity-0"
              } transition-all duration-300 p-4 bg-lghtGray absolute top-full mt-1 rounded-xl lg:left-1/2 transform lg:-translate-x-1/2 w-auto`}
            >
              <Button className="wallet-connect-button" onClick={connectWallet}>
                <img className="icon-logo" src="/imgs/plug-logo.jpg" /> Connect with Plug
              </Button>
              <div className="spacer" />
              <Button className="wallet-connect-button" onClick={connectStoic}>
                <img className="icon-logo" src="/imgs/stoic-logo.png" /> Connect with
                Stoic
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <Button className="connect-modal">{`${userAddress.slice(
              0,
              8
            )}...${userAddress.slice(-6)}`}</Button>
            <div className="spacer" />
            <Button className="connect-modal">Mint NFT</Button>
          </div>
        )}
      </div>
    </ChakraProvider>
  );
}

export default ConnectWallet;
