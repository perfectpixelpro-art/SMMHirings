const stages = [
  {
    stage: "Stage 1",
    title: "Task Completion",
    description:
      "The freelancer submits the completed work within the agreed deadline.",
  },
  {
    stage: "Stage 2",
    title: "Review & Approval",
    description:
      "The submitted work is reviewed against the brief. Once the deliverable meets the required standard and receives approval, the payment is marked as cleared and ready for processing. No approval means no release: this protects both the client and the integrity of the platform.",
  },
  {
    stage: "Stage 3",
    title: "Payment Processing",
    description:
      "Approved payments are processed within the platform's standard payment cycle. Freelancers are notified at every stage: when the work is under review, when it is approved, and when payment has been initiated. There is full visibility at every step.",
  },
];

const HowPaymentIsReleased = () => {
  return (
    <section className="w-full px-6 lg:px-[78px] py-14">

      {/* Heading */}
      <h3 className="text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] font-[500] tracking-[-1.5px] text-black">
        How Payment Is Released
      </h3>

      {/* Tagline */}
      <p className="mt-3 text-[16px] sm:text-[17px] lg:text-[23px] leading-[1.6] text-gray-400 font-[350]">
        Payment follows a straightforward three-stage process:
      </p>

      {/* Stage Cards */}
      <div className="flex flex-col gap-6 mt-8">
        {stages.map((s) => (
          <div
            key={s.stage}
            className="w-full rounded-2xl border border-sky-300 overflow-hidden"
          >
            {/* Blue header */}
            <div className="bg-sky-400 px-7 py-5">
              <p className="text-[22px] sm:text-[24px] lg:text-[28px] font-[500] text-white ">
                {s.stage}
              </p>
            </div>

            {/* Content */}
            <div
              className="px-7 py-6"
              style={{ backgroundColor: "#f9fdff" }}
            >
              <p className="text-[18px] sm:text-[19px] lg:text-[24px] font-[600] text-gray-900 mb-2 leading-tight">
                {s.title}
              </p>
              <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-[300] text-gray-700 leading-[1.8]">
                {s.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 mt-12"></div>
    </section>
  );
};

export default HowPaymentIsReleased;