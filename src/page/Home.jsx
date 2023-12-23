import React, { useEffect, useState } from "react";
import JobCard from "../component/Form/JobCard";
import { getAllCard } from "../services/ApiRequest";

export default function Home() {
  const [jobCard,setJobCard] = useState([])

  const getCardData = async()=>{
    try{
      const res = await getAllCard()
      setJobCard(res.data)
    }
    catch(e){
      console.log('error ===>',e)
    }
  }
  const updateCard = (id)=>{
    const newData = jobCard.filter((i)=> i.id != id)
    setJobCard(newData)
  }
  useEffect(()=>{
    getCardData()
  },[])
  return (
    <div>
    <div className="grid grid-cols-2 gap-5 p-2">
    {jobCard.map((i ,ix)=>{
      return(
        <JobCard
        fontSizeH2={"text-[24px] font-normal"}
        fontSizeH3={"text-[16px] font-normal"}
        title={i.jobTitle}
        industry={i.industry}
        companyName={i.companyName}
        experience={i.experience}
        salary={i.salary}
        totalEmployee={i.totalEmployee}
        remoteType={i.remoteType}
        formId={i.id}
        location={i.location}
        buttonType={i.applyType}
        handleDelete={(id)=>{updateCard(id)}}
      />
      )
    })}
    </div>
     
    </div>
  );
}
