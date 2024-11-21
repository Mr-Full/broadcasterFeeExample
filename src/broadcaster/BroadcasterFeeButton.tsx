import React from 'react';
import { getBasicBroadcasterFee } from "./broadcasterUtils/getBasicBroadcasterFee";
import { findABroadcaster } from "~~/src/broadcaster/broadcasterUtils/findABroadcaster";
import { transactionGasDetails } from "./broadcasterUtils/config";

export const BroadcasterFeeButton: React.FC = () => {

  const getUnshieldFeeBaseToken = async () => {
    console.log("~~~~~~~~~~~");
    console.info('%c EstimateBroadcasterFeeButton CLicked', 'color: yellow; font-weight: bold;');
    
    try {
      const chosenBroadcaster = await findABroadcaster();  // here
      const broadcasterFee = await getBasicBroadcasterFee(transactionGasDetails, chosenBroadcaster); // here
      
      console.info('%c broadcasterFee:', 'color: yellow; font-weight: bold;', broadcasterFee); // here

    } catch (error) {
      console.error(error);
    } finally {
      console.log("~~~~~~~~~~~");
    }
  };

  return (
    <>
      <div className="mt-12 flex justify-center">
        <div
          onClick={ () => getUnshieldFeeBaseToken() }
          className="cursor-pointer border border-2 text-[white] rounded bg-[green]"
        >
          <p className="p-4">Get your broadcaster fee for WPOL</p>
        </div>
      </div>
    </>
  );
};
