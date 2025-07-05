import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";

type LoginForm = {
    email: string;
    password: string;
};

export function Login() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>();

    const onSubmit = (data: LoginForm) => {
        console.log("Login submitted:", data);
        alert(`Welcome back, ${data.email}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-cyan-600 underline mb-6 text-center">
                    Sign In
                </h2>
                <div className="mt-1 mb-4">
                    <button onClick={() => navigate("/")} className="text-sm text-green-600 hover:text-green-900 underline">Go back</button>

                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-cyan-500 text-white text-sm font-medium rounded-md hover:bg-cyan-600 transition duration-300"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
