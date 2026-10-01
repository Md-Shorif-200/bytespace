"use client";

import AuthFormField from "@/components/common/AuthFormField";
import CustomAuthButton from "@/components/common/CustomAuthButton";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoginFormValues } from "../types/auth.types";

const facebookIcon = "/image/auth/facebook_icon.svg";
const googleIcon = "/image/auth/google_icon.svg";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = () => {
    toast.success("Login successful!");
  };

  return (
    <div className="w-full rounded-[24px] bg-white p-8 xl:p-14">
      <div>
        <p className="body_l text-accent">Sign In</p>
        <h1 className="heading_m mb-6 text-[#242528] xl:mb-10">Welcome Back</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-2 xl:space-y-4"
        >
          <AuthFormField<LoginFormValues>
            label="Email"
            name="email"
            type="email"
            placeholder="designer@example.com"
            register={register}
            error={errors.email}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            }}
          />

          <AuthFormField<LoginFormValues>
            label="Password"
            name="password"
            type="password"
            placeholder="********"
            register={register}
            error={errors.password}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
          />

          <div className="flex justify-end pt-2">
            <CustomAuthButton type="submit" text="Sign In" />
          </div>
        </form>

        <div>
          <div className="my-10 flex items-center gap-4 xl:my-14">
            <span className="h-px flex-1 bg-[#D1D1D1]" />
            <span className="text-[14px] text-[#888888]">or</span>
            <span className="h-px flex-1 bg-[#D1D1D1]" />
          </div>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              aria-label="Continue with Facebook"
              className="flex h-[72px] w-[72px] items-center justify-center rounded-[12px] border border-[#D1D1D1] bg-white hover:bg-gray-50"
            >
              <Image src={facebookIcon} alt="Facebook" width={40} height={40} />
            </button>

            <button
              type="button"
              aria-label="Continue with Google"
              className="flex h-[72px] w-[72px] items-center justify-center rounded-[12px] border border-[#D1D1D1] bg-white hover:bg-gray-50"
            >
              <Image src={googleIcon} alt="Google" width={40} height={40} />
            </button>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center body_m text-[#888888]">
        New User?{" "}
        <Link href="/auth/register" className="text-accent">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
