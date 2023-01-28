import React from "react";
import "./Signin.css";
import image from "../Image/image.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => console.log(data);

  return (
    <div className="main-div">
      <div className="first-div">
        <img src={image} alt="" />
      </div>
      <div className="second-div">
      <div className="flex justify-center my-10">
      <form className="form-div mt-10 rounded-md" onSubmit={handleSubmit(handleLogin)}>
        
        <div className="header flex justify-between py-3">
          <p className="text-orange text-xs font-semibold ml-4">ALREADY MEMBERS</p>
          <p className="text-gray text-xs font-semibold mr-4">Need help?</p>
        </div>
        <div className="form-control w-full max-w-xs px-6 mt-4">
          <input
            {...register("email", { required: "Enter your email" })}
            type="text"
            placeholder="Email"
            className="user-input rounded-md w-full max-w-xs my-2"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
          <input
            {...register("password", { required: "Wrong password" })}
            type="password"
            placeholder="password"
            className="user-input rounded-md w-full max-w-xs mt-2"
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <input
          type="submit"
          value="SIGN IN"
          className="signin-btn rounded text-white text-xs font-semibold py-2.5 px-28 m-6"
        />      
        
      </form>
    </div>
    <div className="create-account">
    <p className="text-white text-xs font-semibold">Do you have an account yet?</p>
      <p className="text-green text-xs font-semibold">Create an account</p>
    </div>
      </div>
    </div>
  );
};

export default Signin;
