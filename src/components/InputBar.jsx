import React from "react";

const placeHolderText = ["Do my homework", "Make my bed"];

const getPlaceHolderText = () =>
  "Try typing '" +
  placeHolderText[Math.floor(Math.random() * placeHolderText.length)] +
  "'";

const InputBar = () => {
  return (
    <form className='flex flex-wrap justify-center w-10/12 max-w-md '>
      <input
        type='text'
        placeholder={getPlaceHolderText()}
        className='grow bg-idle rounded-lg p-2 m-2 pl-4
        focus:outline-none caret-accent text-sm '
      />
      <button
        type='submit'
        className='grow-0 bg-accent_glow text-accent
        p-2 rounded-lg m-2 ml-0 hover:bg-accent_glow_hover hover:text-accent_hover
        text-sm font-jetbrains '
      >
        + Add Task
      </button>
    </form>
  );
};

export default InputBar;
