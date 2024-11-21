import { WakuBroadcasterClient } from '@railgun-community/waku-broadcaster-client-web';
import { startBroadcasterClient } from './startBroadcasterClient';
import { SelectedBroadcaster } from '@railgun-community/shared-models';
import { feeTokenAddress, broadcasterChain } from './config';

export const findABroadcaster = async (): Promise<SelectedBroadcaster> => {
  console.log("⚪️ findBroadcaster called")
  try {

    if (WakuBroadcasterClient.isStarted() === false) {
      await startBroadcasterClient();
    }
  
    const broadcastersFound = await WakuBroadcasterClient.findBroadcastersForToken(broadcasterChain!, feeTokenAddress ,false);
    console.log("🟢 Total broadcasters found:", broadcastersFound.length);
  
    const selectedBroadcaster = broadcastersFound[0]; // tweak this number to pick a different broadcaster from the list, this proccess will be improved in the future

    console.log("🟢 selectedBroadcaster", selectedBroadcaster)
    return selectedBroadcaster;

  } catch (error) {
    throw 'No selectedBroadcaster found'
  }
};
