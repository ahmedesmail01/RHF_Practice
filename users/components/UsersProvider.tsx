"use client";
import { FormProvider, useForm } from "react-hook-form";
import { Users } from "./Users";
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, schema, defaultValues } from "../types/schema";

const UsersProvider = () => {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <Users />
    </FormProvider>
  );
};

export default UsersProvider;
