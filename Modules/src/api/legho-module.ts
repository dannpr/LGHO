import { createSmartAccountClient } from "permissionless";
import { privateKeyToSafeSmartAccount } from "permissionless/accounts";
import {
    createPimlicoPaymasterClient,
    createPimlicoBundlerClient,
} from "permissionless/clients/pimlico";
import { UserOperation } from "permissionless/types";
import { Address, createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";


// Legho module
export async function CreateAccount() {

    // AA client
    const publicClient = createPublicClient({
        transport: http("https://CHAIN.infura.io/v3/API_KEY"),
    });

    // AA paymaster
    const paymasterClient = createPimlicoPaymasterClient({
        transport: http("https://api.pimlico.io/v2/CHAIN/rpc?apikey=API_KEY"),
    });

    // AA account creation + module
    const safeAccount = await privateKeyToSafeSmartAccount(publicClient, {
        privateKey: "0xPRIVATE_KEY",
        safeVersion: "1.4.1",
        entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", // global entrypoint
        saltNonce: 0n, // optional
        addModuleLibAddress: "0x191EFDC03615B575922289DC339F4c70aC5C30Af",
        safe4337ModuleAddress: "0x39E54Bb2b3Aa444b4B39DEe15De3b7809c36Fc38",
        safeProxyFactoryAddress: "0x4e1DCf7AD4e460CfD30791CCC4F9c8a4f820ec67",
        safeSingletonAddress: "0x41675C099F32341bf84BFc5382aF534df5C7461a",
        multiSendAddress: "0x38869bf66a61cF6bDB996A6aE40D5853Fd43B526",
        multiSendCallOnlyAddress: "0x9641d764fc13c8B624c04430C7356C1C7C8102e2",
        safeModules: ["0xEXTRA_SAFE_MODULES"],
        setupTransactions: [
            {
                to: "0x...",
                data: "0x...",
                value: 0n,
            },
        ],
    });

    // AA client
    const smartAccountClient = createSmartAccountClient({
        account: safeAccount,
        chain: sepolia,
        transport: http("https://api.pimlico.io/v1/CHAIN/rpc?apikey=API_KEY"),
        sponsorUserOperation: paymasterClient.sponsorUserOperation, // optional
    });

}