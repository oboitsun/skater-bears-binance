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

  return (
    <ChakraProvider>
      <div className="connect-wallet">
        {!userAddress ? (
          <Popover>
            <PopoverTrigger>
              <Button className="cnct-wallet">
                {" "}
                <CWalletButton text="Connect wallet" type="outlined" />
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent className="pop-over">
                <PopoverBody>
                  <Button className="wallet-connect-button" onClick={connectWallet}>
                    <img className="icon-logo" src="/imgs/plug-logo.jpg" /> Connect with
                    Plug
                  </Button>
                  <div className="spacer" />
                  <Button className="wallet-connect-button" onClick={connectStoic}>
                    <img className="icon-logo" src="/imgs/stoic-logo.png" /> Connect with
                    Stoic
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
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
