import {useForm} from "react-hook-form";

type FormData = {
    email: string;
    subject: string;
    message: string;
};

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch("http://localhost:3000/api/contacts/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                alert(`Error: ${result.error}`);
            } else {
                alert("✅ Your message has been submitted successfully!");
                reset(); // Clear form after successful submission
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            alert("❌ Failed to submit. Please try again later.");
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 p-8 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
                {/* Email Field */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Email:</label>
                    <input
                        type="email"
                        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4eaacf] ${
                            errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="text-red-600 text-sm mt-1">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                {/* Subject Field */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Subject:</label>
                    <input
                        type="text"
                        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4eaacf] ${
                            errors.subject ? "border-red-500" : "border-gray-300"
                        }`}
                        {...register("subject", {
                            required: "Subject is required",
                            pattern: {
                                value: /^.{10,30}$/,
                                message: "Subject must be between 10 to 30 characters",
                            },
                        })}
                    />
                    {errors.subject && (
                        <span className="text-red-600 text-sm mt-1">
                            {errors.subject.message}
                        </span>
                    )}
                </div>

                {/* Message Field */}
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Message:</label>
                    <textarea
                        rows={5}
                        className={`border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#4eaacf] ${
                            errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                        {...register("message", {
                            required: "Message is required",
                        })}
                    />
                    {errors.message && (
                        <span className="text-red-600 text-sm mt-1">
                            {errors.message.message}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-[#4eaacf] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#4296b3] transition-colors duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
