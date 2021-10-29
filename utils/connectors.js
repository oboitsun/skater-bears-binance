import { InjectedConnector } from '@web3-react/injected-connector';
const supportedChainIds = [
    56, // BSC
]

export const injected = new InjectedConnector({
    supportedChainIds
})

export const ConnectorNames = {
    Injected: 'MetaMask',
}

export const connectorsByName = {
    [ConnectorNames.Injected]: injected,
}