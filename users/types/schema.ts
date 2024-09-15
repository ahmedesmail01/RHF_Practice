import { patterns } from "@/constants";
import { z } from "zod";

export const schema = z.object({
  name: z.string().min(2, { message: "required" }),
  email: z
    .string()
    .min(5, { message: "email is required" })
    .refine((text) => patterns.email.test(text), {
      message: "email is not valid",
    }),
  states: z.array(z.string()).min(1).max(2),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  name: "",
  email: "",
  states: [],
};
