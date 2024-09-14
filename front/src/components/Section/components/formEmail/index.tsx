"use client"
import React, { useCallback } from "react";

import { useForm } from "react-hook-form";

import Button from "@/components/Button";
import IconInput from "@/components/input/IconInput";

import { FormEmailValues } from "./type";

const FormEmail = () => {
  const { register, handleSubmit } = useForm<FormEmailValues>();
  const handleSubmitRegister = useCallback((values: FormEmailValues) => {
    console.log(values);
  }, []);
  return (
    <form
      onSubmit={handleSubmit(handleSubmitRegister)}
      className="flex items-center gap-8"
    >
      <IconInput {...register("email")} placeholder="Digite seu email" />
      <Button color="secondary">Iniciar</Button>
    </form>
  );
};

export default FormEmail;
