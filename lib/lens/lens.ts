import { getSigner } from '../../utils/helper';
import { ethers } from "ethers";


// lens contract info can all be found on the deployed
// contract address on polygon.
// not defining here as it will bloat the code example
export const lensHub = new ethers.Contract(
    process.env.LENS_HUB_CONTRACT_ADDRESS!,
    process.env.LENS_HUB_ABI!,
    getSigner()
)