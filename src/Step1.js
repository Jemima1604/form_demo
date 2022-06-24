import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";

const Step1=(props) => {
    const {handleSubmit}= useForm();
    const onSubmit = () => {props.history.push("./step2")};


   return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="submit"  value="Start now!"/>
    </form>
  );
}

export default withRouter(Step1);