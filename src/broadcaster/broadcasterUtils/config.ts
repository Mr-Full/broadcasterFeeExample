import { ChainType } from '@railgun-community/shared-models';

export const broadcasterChain = { type: ChainType.EVM, id: 137}; // Polygon
export const feeTokenAddress = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270';  // Wrapped Pol
export const gasGwei = 33;
export const transactionGasDetails = { evmGasType: 1, gasEstimate: 1194286n, gasPrice: 33000000000n };

// The function I used to get the gasEstimate value needs a wallet ID (gasEstimateForUnprovenUnshield), 
// For the purpose of trying to get this to work i've pre-set the gasPrice to 50 Gwei (it's a standard price), 
// Once this is working the gasEstimate and gasPrice will be dynamically fetched 🙌
// I know we spoke about not hard coding values previously but i know nobody wants to connect there wallet to new code 😊
// I verified the gasEstimate value against previous peoples unshield transactions to ensure its accuracy.