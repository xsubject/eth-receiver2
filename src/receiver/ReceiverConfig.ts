import { ethers } from "ethers";

type ReceiverConfig = {
    provider: ethers.providers.Provider | `http://${string}` | `https://${string}` | `ws://${string}` | `wss://${string}`
};
export default ReceiverConfig;
