import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const faqs = [
  {
    question: "Too Many Applications, Not Enough Real Candidates?",
    answer: (
      <>
        You never have to sort through the entire pile. Profiles that reach you
        have already been reviewed against the requirements of your role, so you
        can spend your time talking to people who might actually fit.
      </>
    ),
  },
  {
    question: "Paying Agency Rates for One Person's Output?",
    answer: (
      <>
        You're hiring that person directly. No strategist or account manager
        sitting between you and the work, whether you need{" "}
        <span className="font-[600] text-gray-800">
          social media management services
        </span>{" "}
        for one channel or broader{" "}
        <span className="font-[600] text-gray-800">
          social media marketing services
        </span>{" "}
        across several.
      </>
    ),
  },
  {
    question: "Channels Going Quiet During a Hiring Gap?",
    answer: (
      <>
        Your shortlist usually arrives within 48 hours of posting, which shortens
        the gap between "we need someone" and "someone's actually managing it."
      </>
    ),
  },
  {
    question: "Brand Voice Resetting Every Time Someone Leaves?",
    answer: (
      <>
        Set clear expectations in your role from the beginning, so whoever you
        hire understands your brand, responsibilities, platforms, and process
        from day one.
      </>
    ),
  },
  {
    question: "Hiring Eating a Month of Your Time?",
    answer: (
      <>
        The initial review happens before you're even involved. You're picking
        from a shortlist, not sorting through dozens of applications yourself.
      </>
    ),
  },
  {
    question: "Looking Beyond Social Media?",
    answer: (
      <>
        <Link
          to="/business-services/hire-content-writer-copywriter/"
          className="font-[600] underline underline-offset-2 hover:opacity-80"
          style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
        >
          Hire professional content writers or copywriters
        </Link>
        , designers, video editors, paid ads specialists, analytics experts, web
        developers, and more through SMM Hiring.
      </>
    ),
  },
];

const CommonQuestions = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f9ff] via-white to-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      {/* soft ambient accent */}
      <span className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#d6edfc] blur-3xl opacity-50" />

      <div className="relative max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 2xl:gap-24">

          {/* ===== Left: sticky heading ===== */}
          <div className="lg:sticky lg:top-28 lg:self-start">
           

            <h2 className="mt-3 text-[26px] sm:text-[40px] lg:text-[48px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.14] sm:tracking-[-1.5px]">
              Skip the Application Pile.{" "}
              <span style={{ color: ACCENT }}>Start With a Shortlist.</span>
            </h2>

            <p className="mt-5 max-w-md text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[16.5px] sm:leading-[1.75] 2xl:text-[18px]">
              Straight answers to what business owners actually ask before they
              hire.
            </p>

            {/* accent underline flourish */}
            <span
              className="mt-8 hidden h-[3px] w-16 rounded-full lg:block"
              style={{ backgroundColor: ACCENT }}
            />
          </div>

          {/* ===== Right: divided Q&A list ===== */}
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className="group relative border-t border-[#e5edf5] py-6 pl-0 transition-all duration-200 first:border-t-0 first:pt-0 sm:py-8 lg:pl-6"
              >
                {/* accent bar that grows on hover (lg only) */}
                <span
                  className="pointer-events-none absolute left-0 top-1/2 hidden h-0 w-[3px] -translate-y-1/2 rounded-full transition-all duration-300 group-hover:h-[70%] lg:block"
                  style={{ backgroundColor: ACCENT }}
                />

                <div className="flex items-start gap-4 sm:gap-5">
                  {/* index chip */}
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e9f4fd] text-[13px] font-[600] tabular-nums sm:h-10 sm:w-10 sm:text-[14px]"
                    style={{ color: ACCENT }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-[16px] font-[600] leading-[1.4] text-gray-900 transition-colors duration-200 group-hover:text-[#0b6fa6] sm:text-[18px] 2xl:text-[19px]">
                      {faq.question}
                    </h3>
                    <p className="mt-2.5 text-[14px] font-[350] leading-[1.7] text-gray-500 sm:text-[15px] sm:leading-[1.75] 2xl:text-[16px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;