import { ethers } from "ethers";
import ReceiverConfig from "./ReceiverConfig";

class Receiver {
    public readonly provider: ethers.providers.Provider;

    constructor(public readonly config: ReceiverConfig) {
        if(typeof config.provider == "string") {
            this.provider = new ethers.providers.JsonRpcProvider(config.provider);
        } else {
            this.provider = config.provider;
        }
    }

    
    
}

export default Receiver;
