"use client";

import React, { useCallback } from "react";

import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import InputBase from "@/components/input/InputBase";
import NavigationLoginRegister from "@/components/NavigationLoginRegister";

import { FormLoginValues } from "./type";

const FormLogin = () => {
  const { register, handleSubmit } = useForm<FormLoginValues>();
  const handleSubmitRegister = useCallback((values: FormLoginValues) => {
    console.log(values);
  }, []);
  return (
    <form
      onSubmit={handleSubmit(handleSubmitRegister)}
      className="grid grid-cols-1 gap-6 w-3/5"
    >
      <InputBase {...register("email")} title="Email" placeholder="" />
      <InputBase {...register("password")} title="Password" placeholder="" />
      <NavigationLoginRegister path="./register" title="Não tenho registro" />
      <Button variant="secondary" type="submit">
        Register
      </Button>
    </form>
  );
};

export default FormLogin;
