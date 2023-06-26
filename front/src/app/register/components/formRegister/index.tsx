"use client"

import React, { useCallback } from "react";

import Button from "@/components/Button";
import InputBase from "@/components/input/InputBase";

import { useForm } from "react-hook-form";
import { FormRegisterValues } from "./type";

const FormRegister = () => {
  const { register, handleSubmit } = useForm<FormRegisterValues>();
  const handleSubmitRegister = useCallback((values: FormRegisterValues) => {
    console.log(values);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(handleSubmitRegister)}
      className="grid grid-cols-1 gap-6 w-3/5"
    >
      <InputBase {...register("name")} title="Name" placeholder="" />
      <InputBase {...register("email")} title="Email" placeholder="" />
      <InputBase {...register("password")} title="Password" placeholder="" />
      <InputBase
        {...register("confirmPassword")}
        title="Confirm Password"
        placeholder=""
      />
      <Button variant="secondary" type="submit">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
