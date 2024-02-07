import React from "react";
import InputBar from "./components/InputBar";

const App = () => {
  return (
    <>
      <div>
        <h1 className='text-4xl text-center font-bold py-4'>To Do List</h1>
      </div>
      <div className="flex justify-center">
        <InputBar />
      </div>
    </>
  );
};

export default App;
