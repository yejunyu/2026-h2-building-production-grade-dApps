import { ethers } from "ethers"
import { getApi, getProvider } from "./utils";

const identity_precompile = "0x0000000000000000000000000000000000000004"
const hash_precompile = "0x0000000000000000000000000000000000000002"
const ripemd160_precompile = "0x0000000000000000000000000000000000000003"

export async function callWithoutSelector(provider: ethers.JsonRpcProvider, precompile: string, data: string) {
    const result = await provider.call({
        to: precompile,
        data: data
    });
    console.log("precompile address is ", precompile);
    console.log("data is ", data);
    console.log("Result:", result);
}
async function main() {
    const provider = getProvider(false);
    await callWithoutSelector(provider,ripemd160_precompile, "0x12345678");
}

main();