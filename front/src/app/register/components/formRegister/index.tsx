"use client";

import React, { useCallback } from "react";

import Button from "@/components/Button";
import InputBase from "@/components/input/InputBase";

import { useForm } from "react-hook-form";
import { FormRegisterValues } from "./type";
import NavigationLoginRegister from "@/components/NavigationLoginRegister";

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
      <InputBase
        {...register("name")}
        title="Nome"
        placeholder="Digite seu nome"
      />
      <InputBase
        {...register("email")}
        title="Email"
        placeholder="Digite seu email"
      />
      <InputBase
        {...register("password")}
        title="Senha"
        placeholder="Digite sua senha"
      />
      <InputBase
        {...register("confirmPassword")}
        title="Confirme sua Senha"
        placeholder="Confirme sua senha"
      />
      <NavigationLoginRegister path="./login" title="Já sou registrado" />
      <Button variant="secondary" type="submit">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
