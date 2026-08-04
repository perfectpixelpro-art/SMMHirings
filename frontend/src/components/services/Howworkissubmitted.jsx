const HowWorkIsSubmitted = () => {
  return (
    <section className="w-full px-6 lg:px-[78px] py-14">

      <h3 className="text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.1] font-bold tracking-[-1.5px] text-black mb-8">
        How Work Is Submitted
      </h3>

      <div
        className="w-full rounded-2xl border border-sky-300 px-7 sm:px-10 py-8 sm:py-10"
        style={{ backgroundColor: "#f9fdff" }}
      >
        <p className="text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.9] text-gray-700 font-normal">
          Once the task is complete, the deliverable is submitted through the
          platform for internal review. This review stage checks that the work
          meets the brief requirements and the platform's quality standard
          before it is passed to the client. If minor adjustments are needed,
          the freelancer is notified with clear, specific feedback so the work
          can be refined and resubmitted promptly.
        </p>
      </div>

    </section>
  );
};

export default HowWorkIsSubmitted;