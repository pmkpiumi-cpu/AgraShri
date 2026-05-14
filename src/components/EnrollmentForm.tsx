"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { submitEnrollment } from "@/app/actions/enroll";

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
  const [serverError, setServerError] = useState<{ message: string; rateLimited?: boolean } | null>(null);

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
    setServerError(null);
    try {
      const result = await submitEnrollment(data);
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        setServerError({ message: result.error, rateLimited: result.rateLimited });
      }
    } catch {
      setServerError({ message: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center p-12 bg-green-50 rounded-3xl border border-green-200">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold mb-4 text-[#14532D]">Registration Sent!</h3>
        <p className="text-gray-500 mb-8">
          Thank you for enrolling with AgraShri. We have received your details and will get back to you soon.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-bold transition-all hover:shadow-[0_4px_20px_rgba(22,163,74,0.4)]"
        >
          Send Another
        </button>
      </div>
    );
  }

  const inputClass = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all";
  const labelClass = "block text-sm font-semibold text-gray-600 mb-2";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Server error / rate limit banner */}
      {serverError && (
        <div className={`flex items-start gap-3 p-4 rounded-2xl border ${
          serverError.rateLimited
            ? "bg-amber-50 border-amber-200 text-amber-800"
            : "bg-red-50 border-red-200 text-red-700"
        }`}>
          {serverError.rateLimited
            ? <Clock className="w-5 h-5 shrink-0 mt-0.5" />
            : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          }
          <p className="text-sm font-medium">{serverError.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Full Name</label>
          <input
            {...register("fullName")}
            className={inputClass}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email Address</label>
          <input
            {...register("email")}
            className={inputClass}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            {...register("phone")}
            className={inputClass}
            placeholder="07X XXX XXXX"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Program Interest</label>
          <select
            {...register("program")}
            className={inputClass}
          >
            <option value="" className="bg-white text-gray-400">Select a program</option>
            <option value="school" className="bg-white">School Students (Grade 1-A/L)</option>
            <option value="university" className="bg-white">University Students</option>
            <option value="adults" className="bg-white">Adult Learners / Professional</option>
          </select>
          {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Additional Message (Optional)</label>
        <textarea
          {...register("message")}
          rows={4}
          className={inputClass}
          placeholder="Tell us about your learning goals..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !!serverError?.rateLimited}
        className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_8px_30px_rgba(22,163,74,0.35)] active:scale-[0.98]"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" /> Processing...
          </>
        ) : serverError?.rateLimited ? (
          <>
            <Clock className="w-5 h-5" /> Limit Reached
          </>
        ) : (
          "Submit Enrollment →"
        )}
      </button>
    </form>
  );
}
