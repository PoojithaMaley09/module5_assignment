import { useForm } from "react-hook-form";
import { useState } from "react";
import { registerUser } from "../api/auth";

type FormData = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [message, setMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await registerUser(data);
      setMessage(res.data.message || "User registered successfully");
      setIsError(false);
    } catch (err: any) {
      setMessage(err.response?.data?.error || "Registration failed");
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-900 p-6 rounded-xl shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-white">Register</h2>

      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
        className="w-full bg-slate-100 px-4 py-2 border rounded mb-2"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Invalid email address"
          }
        })}
        placeholder="Email"
        className="w-full px-4 py-2 border rounded mb-2"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <input
        {...register("password", { required: "Password is required" })}
        placeholder="Password"
        type="password"
        className="w-full px-4 py-2 border rounded mb-2"
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200 w-full"
      >
        Register
      </button>

      {message && (
        <p className={`mt-4 text-center text-sm font-medium ${isError ? "text-red-600" : "text-green-600"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
