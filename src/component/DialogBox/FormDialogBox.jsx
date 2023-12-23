import React, { useEffect, useState } from "react";

const FormDialogBox = ({ isOpen, onClose ,children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle closing the dialog
  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };
  useEffect(()=>{
    setIsVisible(isOpen)
  },[isOpen])

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
         <div className="z-50">
          {children}
         </div>
          {/* Background overlay */}
          <div className="fixed inset-0 z-4 bg-black opacity-50"  onClick={handleClose}></div>
        </div>
      )}
    </>
  );
};

export default FormDialogBox;
