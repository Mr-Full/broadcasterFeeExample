import {
  WakuBroadcasterClient,
  BroadcasterConnectionStatusCallback,
  BroadcasterDebugger,
  BroadcasterOptions,
} from '@railgun-community/waku-broadcaster-client-web';
import {
  Chain,
  BroadcasterConnectionStatus,
} from '@railgun-community/shared-models';
import { broadcasterChain } from './config';

  const statusCallback: BroadcasterConnectionStatusCallback = ( chain: Chain, status: BroadcasterConnectionStatus ) => {
    console.log("status:", status)
  };
  
  const broadcasterDebugger: BroadcasterDebugger = {
    log: (msg: string) => {
      console.log(msg);
    },
    error: (err: Error) => {
      console.log(err);
    },
  };
  
  export const startBroadcasterClient = async () => {
    const pubSubTopic = "/waku/2/railgun-broadcaster";
    const additionalDirectPeers : any = []; 
    const peerDiscoveryTimeout = 60000;
  
    const broadcasterOptions: BroadcasterOptions = {
      pubSubTopic,
      additionalDirectPeers,
      peerDiscoveryTimeout,
    };
    
    try {
      await WakuBroadcasterClient.start(
        broadcasterChain,
        broadcasterOptions,
        statusCallback,
        broadcasterDebugger,
      );
    } catch (error) {
      console.error(error)
    }

  };