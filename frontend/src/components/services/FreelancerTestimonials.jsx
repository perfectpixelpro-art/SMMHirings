import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I was sending around 15 proposals a week across two different marketing freelancer platforms, and some weeks nothing came back at all. Other weeks a client would agree to a project and just vanish partway through. My first match on SMM Hiring came within 48 hours. I haven't written a proposal since.",
    role: "Short-Form Video Editor",
    initials: "SV",
  },
  {
    quote:
      "Two years into this work, I knew the craft, the clients were the actual problem. Expectations that shifted after I'd already agreed to something, scope that crept, rates that barely covered the hours. Every client on SMM Hiring works with the rate sitting in the brief before I even see it.",
    role: "Freelance Social Media Manager",
    initials: "SM",
  },
  {
    quote:
      "I kept losing jobs to people quoting half my rate, even with stronger samples and clients who kept coming back. Once I moved to SMM Hiring, matching runs on fit, and a few of those first jobs turned into ongoing work.",
    role: "Digital Marketing Freelancer",
    initials: "DM",
  },
];

const FreelancerTestimonials = () => {
  return (
    <section className="bg-white py-10 sm:py-20 lg:py-10 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
       

        {/* Heading */}
        <h3 className="mt-3 max-w-2xl text-[32px] sm:text-[44px] lg:text-[52px] font-[500] leading-[1.12] tracking-[-1.5px] text-black">
          What Happens After You{" "}
          <span className="text-sky-400">Stop Chasing Clients</span>
        </h3>

        <p className="mt-4 max-w-xl text-[16px] sm:text-[18px] lg:text-[19px] font-[350] leading-[1.6] text-gray-400">
          Real freelancers, before and after their first match.
        </p>

        {/* Testimonial grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.role}
              className="flex flex-col rounded-2xl border border-sky-100 bg-[#f9fdff] p-6 transition-all duration-200 hover:border-sky-300 hover:shadow-[0_4px_24px_rgba(56,189,248,0.12)] sm:p-7"
            >
              <Quote
                className="h-7 w-7 shrink-0 text-sky-300"
                strokeWidth={2}
                fill="currentColor"
              />

              <p className="mt-4 flex-1 text-[15px] font-[350] leading-[1.75] text-gray-700 sm:text-[16px]">
                {t.quote}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-sky-100 pt-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400 text-[13px] font-semibold text-white">
                  {t.initials}
                </div>
                <p className="text-[14px] font-[600] text-gray-900 sm:text-[15px]">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-100 sm:mt-16" />
      </div>
    </section>
  );
};

export default FreelancerTestimonials;