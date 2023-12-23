import React, { useState } from "react";
import TextField from "../Inputs/TextField";
import Button from "../Button/Button";
import RadioField from "../Inputs/RadioField";
import axios from "axios";
import { addNewCard } from "../../services/ApiRequest";

export default function JobForm({ formWidth ,handleClose}) {
  const [formStep, setFormStep] = useState(1);
  const [jobForm, setJobForm] = useState({
    id: 1,
    jobTitle: "",
    companyName:'',
    industry:'',
    location:'',
    remoteType:'',
    experience:{min:'',max:''},
    salary:{min:'',max:''},
    totalEmployee:'',
    applyType:'',
  });
  const [errorMessage , setErrorMessage] = useState({
    jobTitle: "",
    companyName:'',
    industry:'',
  })
  const handleEditForm = (type, value ,subType) => {
    console.log('type ===>',type)
    if(type == 'experience' || type == 'salary'){
      const newData = {...jobForm ,[type]:{...jobForm[type] , [subType]:value}}
      setJobForm(newData)
    }else{
      const newData = {...jobForm ,[type]:value}
      setJobForm(newData)
    }
  };
  const handleNextForm = ()=>{
    console.log('working handleNextForm ')
    setErrorMessage({
      jobTitle: "",
      companyName:'',
      industry:'',
    })
    if(jobForm.jobTitle.length < 2){
      setErrorMessage({...errorMessage,jobTitle:'Job Title Required'})
    }else if(jobForm.companyName.length < 2){
      setErrorMessage({...errorMessage,companyName:'Company Name Required'})
    }else if(jobForm.industry.length < 2){
      setErrorMessage({...errorMessage,industry:'Industry Name Required'})
    }else{
      setFormStep(2)
    }
  }

  const addJobForm = async ()=>{
    try{
      const res = await addNewCard(jobForm)
      console.log('resp ===>',res.status)
      if(res.status == 201){
        handleClose()
      }
      // setJobCard(res.data)
    }
    catch(e){
      console.log('error ===>',e)
    }
  }
console.log('jobForm',jobForm)
  return (
    <div className={`p-8 bg-white rounded-lg ${formWidth}`}>
      <div className="flex justify-between w-full">
        <h2>Create a job</h2>
        <h2>Step {formStep}</h2>
      </div>
      {formStep == 1 ? 
        <div>
     <TextField
        title={"Job title"}
        placeholder={"ex. UX UI Designer"}
        value={jobForm.jobTitle}
        handleChange={(value) => {
          handleEditForm("jobTitle", value);
        }}
        required={true}
        error={errorMessage.jobTitle}
      />
      <TextField
        title={"Company name"}
        placeholder={"ex. Google"}
        value={jobForm.companyName}
        handleChange={(value) => {
          handleEditForm("companyName", value);
        }}
        required={true}
        error={errorMessage.companyName}
      />
      <TextField
        title={"Industry"}
        placeholder={"ex. Information Technology "}
        value={jobForm.industry}
        handleChange={(value) => {
          handleEditForm("industry", value);
        }}
        required={true}
        error={errorMessage.industry}
      />
      <div className="flex gap-6">
      <TextField
        title={"Location"}
        placeholder={"ex. Chennai"}
        value={jobForm.location}
        handleChange={(value) => {
          handleEditForm("location", value);
        }}
        required={false}
      />
      <TextField
        title={"Remote type"}
        placeholder={"ex. In-office"}
        value={jobForm.remoteType}
        handleChange={(value) => {
          handleEditForm("remoteType", value);
        }}
        required={false}
      />
      </div>
      <Button title={'Next'} position={'right'} handleChange={()=>{handleNextForm()}} custom_class={'mt-24'}/>
     </div>
     :
     <div>
      <div className="flex gap-6">
      <TextField
        title={"Experience"}
        placeholder={"Minimum"}
        value={jobForm.experience.min}
        handleChange={(value) => {
          handleEditForm("experience", value ,'min');
        }}
        required={false}
      />
      <TextField
        title={""}
        placeholder={"Maximum"}
        value={jobForm.experience.max}
        handleChange={(value) => {
          handleEditForm("experience", value,'max');
        }}
        required={false}
      />
      </div>
      <div className="flex gap-6">
      <TextField
        title={"Salary"}
        placeholder={"Minimum"}
        value={jobForm.salary.min}
        handleChange={(value) => {
          handleEditForm("salary", value,'min');
        }}
        required={false}
      />
      <TextField
        title={""}
        placeholder={"Maximum"}
        value={jobForm.salary.max}
        handleChange={(value) => {
          handleEditForm("salary", value,'max');
        }}
        required={false}
      />
      </div>
      <TextField
        title={"Total employee"}
        placeholder={"ex. 100"}
        value={jobForm.totalEmployee}
        handleChange={(value) => {
          handleEditForm("totalEmployee", value);
        }}
        required={false}
      />
      <RadioField
        title={"Apply type"}
        placeholder={"ex. 100"}
        value={jobForm.applyType}
        options={['Quick apply' , 'External apply']}
        handleChange={(value) => {
          console.log('value',value)
          handleEditForm("applyType", value);
        }}
        required={false}
      />
      <Button title={'Save'} position={'right'} custom_class={'mt-24'}  handleChange={()=>{addJobForm()}}/>
     </div>
     }
     
    </div>
  );
}
