import { useMemo } from 'react'
import useWeb3 from "./useWeb3";
import nftAbi from '../utils/abi.json'

const getContract = (abi, address, web3) => {
    const _web3 = web3 ?? web3NoAccount
    return new _web3.eth.Contract(abi, address)
}

const getNFTContract = (web3) => {
    return getContract(nftAbi, "0x1cC59A3339066D521746cFB706E168D88173A01D", web3)
}

export const useNFTContract = () => {
    const web3 = useWeb3();
    return useMemo(() => getNFTContract(web3), [web3]);
};
