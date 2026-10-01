"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const facebook_icon = "/image/auth/facebook_icon.svg"
const google_icon = "/image/auth/google_icon.svg"
// types for form values
type LoginFormValues = {
  fullName: string;
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  // runs when form is valid
  const onSubmit = (data: LoginFormValues) => {
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
        <p className="body_l text-accent">Sign In</p>
        <h1 className="heading_m text-[#242528] mb-6 xl:mb-10 ">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-2 xl:space-y-4">

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
              
              Sign In
            </button>
          </div>
        </form>

    

        {/* social login section */}
        <div className="">
          {/* divider */}
          <div className="flex items-center gap-4 my-10 xl:my-14">
            <span className="h-px flex-1 bg-[#D1D1D1]" />
            <span className="text-[14px] text-[#888888]">or</span>
            <span className="h-px flex-1 bg-[#D1D1D1]" />
          </div>

          {/* social buttons */}
          <div className=" flex justify-center gap-4">
            <button
              type="button"
              aria-label="Continue with Facebook"
              className="flex h-[72px] w-[72px] items-center justify-center rounded-[12px] border border-[#D1D1D1] bg-white hover:bg-gray-50"
            >
              <img src={facebook_icon} alt="Facebook" className="h-10 w-10" />
            </button>

            <button
              type="button"
              aria-label="Continue with Google"
              className="flex h-[72px] w-[72px] items-center justify-center rounded-[12px] border border-[#D1D1D1] bg-white hover:bg-gray-50"
            >
              <img src={google_icon} alt="Google" className="h-10 w-10" />
            </button>
          </div>
        </div>
      </div>




      {/* login link */}
      <p className="mt-8 body_m text-[#888888] text-center">
        New User?{" "}
        <Link href="/auth/register" className="text-accent">
          Create an account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
