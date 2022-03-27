import { ethers } from "ethers"

declare global {
    interface Window {
        ethereum: any;
    }
}

const requestAccount = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts[0])
}

const init = async (state: any) => {
    await requestAccount()
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    state.setProvider(provider)
    state.setSigner(signer)
    state.setAddress(address)
    state.setIsConnected(true)
}

export default init

