import React from "react";
import Mainpage from "./Component/Mainpage";
import Mealinfo from "./Component/Mealinfo";
import { Route ,  Routes} from "react-router-dom" 



const App = () => {
  return (
    <>
      
    <div className=" h-screen w-screen flex justify-center items-center">
     
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:mealid" element={<Mealinfo />} />
      </Routes>
    </div>
      
    </>
  );
};

export default App;
