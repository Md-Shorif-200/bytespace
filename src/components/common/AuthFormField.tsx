import type {
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type AuthFormFieldProps<T extends Record<string, unknown>> = {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  rules?: RegisterOptions<T, Path<T>>;
};

const inputStyle =
  "mt-2 w-full rounded-[12px] border border-[#E5E6E8] bg-[#FFFFFF] p-4 text-[14px] text-[#82868E] outline-none focus:border-[#0537F5] md:p-3 xl:p-4 xl:text-[18px]";

const inputLabelStyle = "label_s text-[#242528]";

const AuthFormField = <T extends Record<string, unknown>>({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  rules,
}: AuthFormFieldProps<T>) => {
  return (
    <div>
      <label className={inputLabelStyle}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={inputStyle}
        {...register(name, rules)}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default AuthFormField;
