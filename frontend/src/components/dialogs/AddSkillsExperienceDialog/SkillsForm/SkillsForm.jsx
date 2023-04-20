import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./SkillsForm.scss";
const SkillsForm = ({handleFormSubmit}) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const onSubmit = (data) => {
    setData(data);
    console.log(data);
    handleFormSubmit();
  };

  return (
    <div className="skills-form">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <input
                id="skill-name"
                className="form-control custom-input"
                type="text"
                placeholder="Skill Name"
                {...register("skill-name", { required: true })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input
                id="skill-icon"
                className="form-control custom-input"
                placeholder="Skill Icon URL"
                {...register("skill-icon", { required: true })}
              />
            </div>
          </div>
        </div>

        
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn customize-btn">
            Add Skill
          </button>
        </div>

      </form>
    </div>
  );
}

export default SkillsForm