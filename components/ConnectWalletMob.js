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
import { useWeb3React } from '@web3-react/core'
import { injected } from '../utils/connectors';

function ConnectWalletMob() {
  const { account, activate, deactivate } = useWeb3React()

  return (
    <ChakraProvider>
      <div className="connect-wallet">
        {!account ? (
          <>
            <Button className="wallet-connect-button" onClick={() => activate(injected)}>
              <img className="icon-logo" src="/imgs/plug-logo.jpg" /> Connect with Metamask
            </Button>
          </>
        ) : (
          <div>
            <Button className="connect-modal">{`${account.slice(
              0,
              8
            )}...${account.slice(-6)}`}</Button>
            <div className="spacer" />
            <Button className="connect-modal" onClick={() => {
              deactivate();
            }}>
              Disconnect
            </Button>
          </div>
        )}
      </div>
    </ChakraProvider>
  );
}

export default ConnectWalletMob;
