import type { NextPage } from "next";
import { BroadcasterFeeButton } from "~~/src/broadcaster/BroadcasterFeeButton"

const Home: NextPage = () => {

  return (
    <div className="w-full">    
     <BroadcasterFeeButton />
     <p className="mt-4 text-sm text-white flex justify-center">
        '~~/src/broadcaster/BroadcasterFeeButton'
     </p>
     <p className="mt-12 text-white flex justify-center">
        The first time you click green the button it will initilize the broadcaster.
        <br/> 
        any clicks after that should retrieve the fee and console.log it 🙌
     </p>
    </div>
  );
};

export default Home;
