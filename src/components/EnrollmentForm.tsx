"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Loader2, CheckCircle } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  program: z.string().min(1, "Please select a program"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function EnrollmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Note: User needs to replace these with their actual EmailJS credentials
      // await emailjs.send(
      //   "YOUR_SERVICE_ID",
      //   "YOUR_TEMPLATE_ID",
      //   data,
      //   "YOUR_PUBLIC_KEY"
      // );
      
      // Simulating a successful send for now
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center p-12 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h3 className="text-3xl font-bold mb-4">Registration Sent!</h3>
        <p className="text-gray-400 mb-8">
          Thank you for enrolling with AgraShri. We have received your details and will get back to you soon.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
          <input
            {...register("fullName")}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="John Doe"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
          <input
            {...register("email")}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
          <input
            {...register("phone")}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="07X XXX XXXX"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Program Interest</label>
          <select
            {...register("program")}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors appearance-none"
          >
            <option value="" className="bg-black">Select a program</option>
            <option value="school" className="bg-black">School Students (Grade 1-A/L)</option>
            <option value="university" className="bg-black">University Students</option>
            <option value="adults" className="bg-black">Adult Learners / Professional</option>
          </select>
          {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-2">Additional Message (Optional)</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="Tell us about your learning goals..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" /> Processing...
          </>
        ) : (
          "Submit Enrollment"
        )}
      </button>
    </form>
  );
}
