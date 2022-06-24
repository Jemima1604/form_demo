import React from "react";
import { useForm } from "react-hook-form";

const Step2= () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Address</label>
      <input {...register("address", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.address && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}

export default Step2;