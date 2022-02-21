import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Why use React Hook Form
// Less code (v)
// Better validation (v)
// Better Errors (set, clear, display)
// Have control over inputs
// Dont deal with events (v)
// Easier Inputs (v)

interface ILoginForm {
  username: string;
  email: string;
  password: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    setValue,
    reset,
    resetField,
  } = useForm<ILoginForm>({
    mode: "onBlur",
  });
  const onValid = (data: ILoginForm) => {
    console.log("im valid");
    setError("errors", { message: "Backend is offline sorry" });
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <input
        className="border border-gray-500 p-2 "
        type="submit"
        value="Create Account"
      />
      {errors.errors?.message}
    </form>
  );
}
