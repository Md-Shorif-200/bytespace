"use client";

import AuthFormField from "@/components/common/AuthFormField";
import CustomAuthButton from "@/components/common/CustomAuthButton";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RegisterFormValues } from "../../types";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit = () => {
    toast.success("Registration successful!");
  };

  return (
    <div className="w-full rounded-[24px] bg-white p-8 xl:p-14">
      <div>
        <p className="body_l text-accent">Create an Account</p>
        <h1 className="heading_m mb-6 text-[#242528] xl:mb-10">
          Welcome to <br /> ByteSpace
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-2 xl:space-y-4"
        >
          <AuthFormField<RegisterFormValues>
            label="Full Name"
            name="fullName"
            placeholder="Jamie Davis"
            register={register}
            error={errors.fullName}
            rules={{ required: "Full name is required" }}
          />

          <AuthFormField<RegisterFormValues>
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

          <AuthFormField<RegisterFormValues>
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
            <CustomAuthButton type="submit" text="Continue" />
          </div>
        </form>
      </div>

      <p className="mt-8 text-center body_m text-[#4B4C53]">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-accent">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
