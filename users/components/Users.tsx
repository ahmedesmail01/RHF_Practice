"use client";
import { Stack, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { Schema } from "../types/schema";
import RHFAutocomplete from "@/components/RHFAutocomplete";
//import { DevTool } from "@hookform/devtools"; // Import DevTools
import { useStates } from "../services/queries";

export function Users() {
  const statesQuery = useStates();
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();
  return (
    <Stack sx={{ gap: 2 }}>
      <Typography variant="h2" component="h2" gutterBottom>
        React Hook Form Training
      </Typography>
      <TextField
        {...register("name")}
        label="Name"
        name="name"
        placeholder="Enter your name here"
        error={!!errors?.name?.message}
        helperText={errors?.name?.message}
      />
      <TextField
        {...register("email")}
        name="email"
        label="Email"
        placeholder="Enter your name here"
        error={!!errors?.email?.message}
        helperText={errors?.email?.message}
      />
      <RHFAutocomplete<Schema>
        name="states"
        label="States"
        options={statesQuery.data}
      />
    </Stack>
  );
}

/* 
      <DevTool control={control} />
<Input
            {...register("email", {
              required: { value: true, message: "the email is required" },
              maxLength: { value: 10, message: "too many characters" },
            })}
            name="email"
            placeholder="enter your email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </form>
 */
