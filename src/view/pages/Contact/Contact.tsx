// import './Contact.css';
// import {useForm} from "react-hook-form";
//
// type FormData = {
//     email: string;
//     subject: string;
//     message: string;
// };
//
// export function Contact() {
//     const {
//         register,
//         handleSubmit,
//         formState: {errors}
//     } = useForm<FormData>();
//
//     const onSubmit = (data: FormData) => {
//         console.log("Form submitted:", data);
//         alert(`Submitted your message: ${data.subject}`);
//     };
//
//     return (
//         <div className="form-container">
//             <h2>Contact Us</h2>
//             <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
//                 <div className="form-group">
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         placeholder="Enter your email address"
//                         {...register("email", {
//                             required: "Email is required",
//                             pattern: {
//                                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                                 message: "Invalid email address"
//                             }
//                         })}
//                     />
//                     {errors.email ? <span className="error">{errors.email.message}</span> : ''}
//                 </div>
//
//                 <div className="form-group">
//                     <label>Subject:</label>
//                     <input
//                         type="text"
//                         placeholder="Enter the subject"
//                         {...register("subject", {
//                             required: "Subject is required",
//                             pattern: {
//                                 value: /^[a-zA-Z0-9\s]+$/,
//                                 message: "Subject can only contain letters and numbers"
//                             }
//                         })}
//                     />
//                     {errors.subject ? <span className="error">{errors.subject.message}</span> : ''}
//                 </div>
//
//                 <div className="form-group">
//                     <label>Message:</label>
//                     <textarea
//                         placeholder="Type your message here..."
//                         {...register("message", {required: "Message is required"})}
//                     ></textarea>
//                     {errors.message ? <span className="error">Message is Required</span> : ''}
//                 </div>
//
//                 <button type="submit" className="submit-btn">Submit</button>
//             </form>
//         </div>
//     );
// }

import { useForm } from "react-hook-form";

type FormData = {
    email: string;
    subject: string;
    message: string;
};

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", data);
        alert(`Submitted your message: ${data.subject}`);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-gray-900 text-white rounded-lg shadow-lg">
            <h2 className="text-center text-2xl font-semibold text-cyan-400 mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <div>
                    <label className="block mb-2 font-medium">Email:</label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 font-medium">Subject:</label>
                    <input
                        type="text"
                        placeholder="Enter the subject"
                        className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        {...register("subject", {
                            required: "Subject is required",
                            pattern: {
                                value: /^[a-zA-Z0-9\s]+$/,
                                message: "Subject can only contain letters and numbers",
                            },
                        })}
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                    <label className="block mb-2 font-medium">Message:</label>
                    <textarea
                        placeholder="Type your message here..."
                        className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        {...register("message", {
                            required: "Message is required",
                        })}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-cyan-400 text-white py-3 px-6 rounded-md font-semibold hover:bg-cyan-500 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
