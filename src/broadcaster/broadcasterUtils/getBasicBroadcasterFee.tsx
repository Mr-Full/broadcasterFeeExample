import { TransactionGasDetails, FeeTokenDetails, SelectedBroadcaster } from '@railgun-community/shared-models';
import { calculateBroadcasterFeeERC20Amount } from '@railgun-community/wallet';
import { formatUnits } from "ethers"
import { feeTokenAddress } from "./config"

export const getBasicBroadcasterFee = async (transactionGasDetails: TransactionGasDetails, chosenBroadcaster: SelectedBroadcaster) => {
  console.log("⚪️ getFinalisedRelayerFee function called");
  try {
 
    const feeTokenDetails: FeeTokenDetails = {
      tokenAddress: feeTokenAddress,
      feePerUnitGas: BigInt(chosenBroadcaster.tokenFee.feePerUnitGas),
    }

      const unformattedFee = await calculateBroadcasterFeeERC20Amount(feeTokenDetails, transactionGasDetails);
      
      console.log("🟢 unformattedFee", unformattedFee)

      const formattedFee = parseFloat(
        formatUnits(unformattedFee.amount, 18),
      );

      console.log("🟢 formattedRelayerFee", formattedFee)

    return formattedFee;
  } catch (error) {
    throw(error);
  }
};
