import React from "react";

export default function RadioField({
  title,
  placeholder,
  value,
  handleChange,
  required,
  options
}) {
  
  return (
    <div className="flex flex-col items-start my-3 w-full">
      <label
        className={`font-medium text-base ${
          title ? "opacity-100" : "opacity-0"
        }`}
      >
        {title || "blank"}
        <span className="text-red-500">{required && "*"}</span>
      </label>
     <div className="flex mt-1">
     {options.map((i,ix)=>{
       return(
        <label className="flex items-center mr-4 text-gray-500" key={ix}> 
        <input
            type="radio"
            value={i}
            name={title}
            className="mr-1 text-gray-500"
            // checked={selectedOption === 'option2'}
            onChange={(e)=>{handleChange(e.target.value)}}
          />
          {i}
        </label>
       )
      })}
     </div>
    </div>
  );
}
