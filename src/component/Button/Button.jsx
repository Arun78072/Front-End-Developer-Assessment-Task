import React from "react";

export default function Button({ title, handleChange, active,position ,custom_class}) {
  return (
    <button
      onClick={() => handleChange()}
      className={
        active
          ? `py-2 px-4 bg-white rounded-md text-blue-500 border-solid border-2 border-sky-500 block ${position == 'right' ? 'ml-auto' :'mr-auto'} ${custom_class}`
          : `py-2 px-4 bg-blue-500 rounded-md text-white border-solid border-2 border-sky-500 block ${position == 'right' ? 'ml-auto' :'mr-auto'} ${custom_class}`
      }
    >
      {title}
    </button>
  );
}
