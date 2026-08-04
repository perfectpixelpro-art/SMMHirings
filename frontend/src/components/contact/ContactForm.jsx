import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear field error on type
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: null }));
    }
    // Hide success message when user starts filling form again
    if (submitted) {
      setSubmitted(false);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.website.trim()) {
      newErrors.website = "Website is required";
    } else if (!/^(https?:\/\/)?([\w-]+\.)+[\w]{2,}(\/\S*)?$/.test(formData.website.trim())) {
      newErrors.website = "Please enter a valid website URL";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate API call — replace with your real API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted(true);

    // Reset form
    setFormData({ name: "", email: "", website: "", message: "" });
    setErrors({});
  };

  return (
    <section className="bg-[#F7FBFD] min-h-screen pt-[120px] md:pt-[170px] lg:pt-[234px] pb-[60px] md:pb-[100px]">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-0">

        {/* Heading */}
        <h1
          className="
            text-black font-[500]
            tracking-[-1px] md:tracking-[-2px]
            leading-[1.05] md:leading-none
            text-[36px] md:text-[60px] lg:text-[72px]
          "
        >
          Contact Us
        </h1>

        {/* Description */}
        <p
          className="
            mt-4 md:mt-5 mb-8 md:mb-10
            text-[#666666] font-[300]
            text-[15px] md:text-[18px] lg:text-[20px]
            whitespace-normal md:whitespace-nowrap
            leading-relaxed md:leading-normal
          "
        >
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className={`
                peer w-full
                h-[52px] md:h-[58px]
                rounded-[10px] border bg-white
                px-5 md:px-7
                text-[16px] text-black caret-black
                outline-none transition-all
                ${errors.name ? "border-[#FF4D4F] focus:border-[#FF4D4F]" : "border-[#D9D9D9] focus:border-[#1DBAF8]"}
              `}
            />
            {!formData.name && (
              <span className="absolute left-5 md:left-7 top-1/2 -translate-y-1/2 text-[15px] md:text-[16px] text-[#555] font-[300] pointer-events-none peer-focus:hidden">
                Name<span className="text-[#FF4D4F]">*</span>
              </span>
            )}
            {errors.name && (
              <p className="mt-1 ml-1 text-[#FF4D4F] text-[12px]">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className={`
                peer w-full
                h-[52px] md:h-[58px]
                rounded-[10px] border bg-white
                px-5 md:px-7
                text-[16px] text-black caret-black
                outline-none transition-all
                ${errors.email ? "border-[#FF4D4F] focus:border-[#FF4D4F]" : "border-[#D9D9D9] focus:border-[#1DBAF8]"}
              `}
            />
            {!formData.email && (
              <span className="font-[300] absolute left-5 md:left-7 top-1/2 -translate-y-1/2 text-[15px] md:text-[16px] text-[#555] pointer-events-none peer-focus:hidden">
                Email<span className="text-[#FF4D4F]">*</span>
              </span>
            )}
            {errors.email && (
              <p className="mt-1 ml-1 text-[#FF4D4F] text-[12px]">{errors.email}</p>
            )}
          </div>

          {/* Website */}
          <div className="relative">
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder=" "
              className={`
                peer w-full
                h-[52px] md:h-[58px]
                rounded-[10px] border bg-white
                px-5 md:px-7
                text-[16px] text-black caret-black
                outline-none transition-all
                ${errors.website ? "border-[#FF4D4F] focus:border-[#FF4D4F]" : "border-[#D9D9D9] focus:border-[#1DBAF8]"}
              `}
            />
            {!formData.website && (
              <span className="font-[300] absolute left-5 md:left-7 top-1/2 -translate-y-1/2 text-[15px] md:text-[16px] text-[#555] pointer-events-none peer-focus:hidden">
                Website<span className="text-[#FF4D4F]">*</span>
              </span>
            )}
            {errors.website && (
              <p className="mt-1 ml-1 text-[#FF4D4F] text-[12px]">{errors.website}</p>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder=" "
              className="
                peer w-full
                h-[130px] md:h-[145px]
                resize-none rounded-[10px]
                border border-[#D9D9D9] bg-white
                px-5 md:px-7 pt-5 md:pt-6
                text-[16px] text-black caret-black
                outline-none focus:border-[#1DBAF8] transition-all
              "
            />
            {!formData.message && (
              <span className="font-[300] absolute left-5 md:left-7 top-5 md:top-6 text-[15px] md:text-[16px] text-[#555] pointer-events-none peer-focus:hidden">
                Message
              </span>
            )}
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="
              flex items-start gap-3
              rounded-[12px]
              border border-[#86EFAC]
              bg-[#F0FDF4]
              px-5 py-4
            ">
              <div className="flex-shrink-0 mt-0.5 w-[22px] h-[22px] rounded-full bg-[#22C55E] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[#15803D] font-medium text-[15px] md:text-[16px]">
                  Message sent successfully!
                </p>
                <p className="text-[#166534] font-[300] text-[13px] md:text-[14px] mt-0.5">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full h-[52px] md:h-[58px]
              rounded-[8px]
              bg-[#1DBAF8] hover:bg-[#17ADEA]
              disabled:opacity-70 disabled:cursor-not-allowed
              transition-all duration-300
              text-white text-[17px] md:text-[20px] font-medium
              flex items-center justify-center gap-2
            "
          >
            {loading ? (
              <>
                <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Sending...
              </>
            ) : (
              "Submit"
            )}
          </button>

        </form>

      </div>
    </section>
  );
}