import { useForm } from "react-hook-form";
import { useState } from "react";
import { loginUser } from "../api/auth";

type LoginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>();

  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await loginUser(data);
      setMessage(res.data.message || "Login successful");
      setIsError(false);
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Login failed");
      setIsError(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-900 p-6 rounded-xl shadow-md max-w-md mx-auto mt-6"
    >
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">Login</h2>

      {/* Email */}
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Invalid email format"
          }
        })}
        placeholder="Email"
        className="w-full px-4 py-2 border rounded mb-2"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}

      {/* Password */}
      <input
        {...register("password", { required: "Password is required" })}
        placeholder="Password"
        type="password"
        className="w-full px-4 py-2 border rounded mb-2"
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password.message}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200 w-full"
      >
        Login
      </button>

      {/* Message */}
      {message && (
        <p
          className={`mt-4 text-center text-sm font-medium ${
            isError ? "text-red-600" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
