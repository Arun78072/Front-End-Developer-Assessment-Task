import React from "react";
import Button from "../Button/Button";
import { deleteCard } from "../../services/ApiRequest";

export default function JobCard({ fontSizeH2, fontSizeH3,title,industry,companyName,experience,salary,totalEmployee,remoteType,location ,formId,handleDelete,buttonType}) {

  const deleteCardByid = async()=>{
    try{
      const res = await deleteCard(formId)
      if(res.status == 200){
        handleDelete(formId)
      }
    }
    catch(e){
      console.log('error ===>',e)
    }
  }
  return (
    <div className="flex items-start gap-2 py-4 px-6 bg-white rounded-md relative">
    <button className="absolute top-2.5 right-2.5 bg-red-500 p-1 rounded-md text-white" onClick={()=>{deleteCardByid()}}>Delete</button>
      <img src="/images/card_icon.png" />
      <div className="text-left">
        <div>
          <h2 className={`${fontSizeH2}`}>{title}</h2>
          <h3 className={`${fontSizeH3}`}>{companyName} - {industry}</h3>
          <h3 className="text-[#646464]">{location} ({remoteType})</h3>
        </div>
        <div className="py-5">
          <h3 className="py-1">Part-Time (9.00 am - 5.00 pm IST)</h3>
          <h3 className="py-1">Experience ({experience.min} -{experience.max} years)</h3>
          <h3 className="py-1">INR (₹) {salary.min} - {salary.max} / Month</h3>
          <h3 className="py-1">{totalEmployee} employees</h3>
        </div>
        {buttonType == 'External apply' ? <Button title={'External Apply'} active = {true}/> :  <Button title={'Apply Now'}/>}
      </div>
    </div>
  );
}
