"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

// types for form values
type RegisterFormValues = {
  fullName: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  // runs when form is valid
  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
  };

  // shared input style
  const inputStyle =
    "w-full rounded-[12px] border border-[#E5E6E8] bg-[#FFFFFF] p-4 md:p-3 xl:p-4 text-[#82868E] text-[14px] xl:text-[18px] outline-none focus:border-[#0537F5] mt-2";

  const inputLabelStyle = "label_s text-[#242528]";

  return (
    <div className=" w-full rounded-[24px] bg-white p-8 xl:p-14">
      <div>
        {/* heading */}
        <p className="body_l text-accent">Create an Account</p>
        <h1 className="heading_m text-[#242528] mb-6 xl:mb-10 ">
          Welcome to <br /> ByteSpace
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-2 xl:space-y-4">
          {/* full name */}
          <div>
            <label className={` ${inputLabelStyle}`}>Full Name</label>
            <input
              type="text"
              placeholder="Jamie Davis"
              className={inputStyle}
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* email */}
          <div>
            <label className={` ${inputLabelStyle}`}>Email</label>
            <input
              type="email"
              placeholder="designer@example.com"
              className={inputStyle}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password */}
          <div>
            <label className={` ${inputLabelStyle}`}>Password</label>
            <input
              type="password"
              placeholder="********"
              className={inputStyle}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* submit button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className=" w-[123px] h-[44px] rounded-[24px] bg-primary text-dark flex justify-center items-center hover:opacity-90"
            >
              Continue
            </button>
          </div>
        </form>
      </div>

      {/* login link */}
      <p className="mt-8 body_m text-[#4B4C53 text-center">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-accent">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
