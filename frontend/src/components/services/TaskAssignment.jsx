const TaskAssignment = () => {
  const items = [
    "A full description of what is required",
    "The payment amount for that specific task",
    "The deliverable format and quality standard expected",
    "The deadline for submission",
  ];

  return (
    <section className="w-full px-6 lg:px-[78px] py-14">

      {/* Top */}
      <div>
        <h2 className="text-[42px] sm:text-[50px] lg:text-[58px] leading-[1.1] font-[500] tracking-[-2px] text-black">
          Task Assignment
        </h2>

        <p className="mt-4 text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.5] text-gray-400 font-normal">
          Every task is clear. Every payment is protected.
        </p>

        <p className="mt-6 text-[16px] sm:text-[17px] lg:text-[20px] leading-[1.8] font-[300] text-gray-700">
          Once a freelancer is part of the SMM Hiring community, the process of
          receiving work and getting paid follows a structured, transparent
          cycle. There are no surprises, no chasing invoices, and no ambiguity
          around what is owed and when.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-12"></div>

      {/* How Tasks Are Assigned */}
      <div>
        <h3 className="text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] font-[500] tracking-[-1.5px] text-black">
          How Tasks Are Assigned
        </h3>

        <p className="mt-6 text-[16px] sm:text-[17px] lg:text-[20px] leading-[1.8] font-[300] text-gray-700">
          Tasks are not distributed randomly. Every project that enters the
          platform is reviewed internally and then matched to the freelancer
          whose skills, category, and past performance make them the strongest
          fit for that specific brief. The freelancer receives a clear task
          brief that includes:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-sky-300 px-5 py-4"
              style={{ backgroundColor: "#f9fdff" }}
            >
              <div className="w-3.5 h-3.5 rounded-full bg-sky-400 flex-shrink-0"></div>
              <p className="text-[16px] sm:text-[17px] font-[300] lg:text-[22px] leading-[1.5] text-gray-900">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 font-[300] text-[16px] sm:text-[17px] lg:text-[20px] leading-[1.9] text-gray-700">
          The freelancer reviews the brief and confirms acceptance before work
          begins. Nothing starts without clarity on both sides.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-12"></div>

      {/* How Work Is Submitted */}
      <div>
        <h3 className="text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] font-[500] tracking-[-1.5px] text-black mb-8">
          How Work Is Submitted
        </h3>

        <div
          className="w-full rounded-2xl border border-sky-300 px-7 sm:px-10 py-8 sm:py-10"
          style={{ backgroundColor: "#f9fdff" }}
        >
          <p className="
              text-[#555555]

              font-[250]

              text-[20px]
              sm:text-[28px]
              lg:text-[28px]

              leading-[2]

              tracking-[0.03em]
            ">
            Once the task is complete, the deliverable is submitted through the
            platform for internal review. This review stage checks that the work
            meets the brief requirements and the platform's quality standard
            before it is passed to the client. If minor adjustments are needed,
            the freelancer is notified with clear, specific feedback so the work
            can be refined and resubmitted promptly.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-12"></div>
    </section>
  );
};

export default TaskAssignment;