import React, { useState } from 'react'
import FormDialogBox from '../DialogBox/FormDialogBox'
import JobForm from '../Form/JobForm'

export default function Header() {
  const [dialogBox , setDialogBox] = useState(false)
  return (
    <div>
    <button onClick={()=>{setDialogBox(true)}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mt-4 ml-4'>Create Job</button>
    <FormDialogBox isOpen={dialogBox} onClose={()=>{setDialogBox(false)}}> 
      <JobForm formWidth={'w-[577px]'} handleClose={()=>{setDialogBox(false);window.location.reload();}}/>
    </FormDialogBox>
    </div>
  )
}
