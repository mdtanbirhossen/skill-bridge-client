"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { z } from "zod"
import { toast } from "sonner"
import { authClientService } from "@/services/auth.client.service"
import { useForm } from "@tanstack/react-form";
import { useAuth } from "@/context/AuthContext"
import { redirect, useSearchParams } from "next/navigation"
import { useEffect } from "react"

const formSchema = z.object({
  password: z.string().min(8, "Minimum length is 8"),
  email: z.email()
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { user: userInfo, setUser, logout, token, login } = useAuth();
  // const params = useSearchParams();
  // const redirectUrl = params.get("redirectUrl") || "/"


  // useEffect(() => {
  //   if (params.get("reason") === "auth") {
  //     toast.error("Please login to access the dashboard");
  //   }
  // }, [params]);

  const form = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Finding User...");
      const userLoginInfo = { ...value };

      const result = await authClientService.signIn(userLoginInfo);
      if (!result.ok) {
        toast.error(result.message || "Invalid credentials", { id: toastId });

        return {
          form: "Invalid email or password",
        };
      }
      // set user and token in context
      login(result.data.data.user, result.data.data.token)

      toast.success("User Login Successfully", { id: toastId });
      // redirect(redirectUrl)
    }


  });


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your email and password below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
          >
            <FieldGroup>
              {/* email */}
              <form.Field
                name="email"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        type="email"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
              {/* password */}
              <form.Field
                name="password"
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                      <Input
                        type="password"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
              <Field>
                <Button form="login-form" type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link href="/register">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
