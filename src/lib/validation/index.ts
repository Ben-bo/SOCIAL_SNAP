import * as z from "zod";

export const SignUpValidation = z.object({
  name: z.string().min(3),
  username: z.string().min(2, { message: "username to short." }).max(50),
  email: z.string().email(),
  password: z.string().min(8, { message: "password to short." }),
});
