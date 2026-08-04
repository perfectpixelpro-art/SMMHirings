const steps = [
  {
    number: "01",
    title: "Build Your Profile",
    description:
      "Create a robust profile highlighting your skills, experience, portfolio pieces, and the categories you specialise in.",
  },
  {
    number: "02",
    title: "Receive Matched Opportunities",
    description:
      "Our intelligent system matches you with vetted project opportunities that align with your expertise, experience level, and work preferences.",
  },
  {
    number: "03",
    title: "Review and Engage",
    description:
      "Receive project invitations, review client briefs, ask questions, discuss details, and agree on project terms, all within the platform.",
  },
  {
    number: "04",
    title: "Create and Collaborate",
    description:
      "Once hired, use our integrated tools to communicate with clients, share your work, and receive feedback throughout the project.",
  },
  {
    number: "05",
    title: "Get Paid Seamlessly",
    description:
      "Upon project completion and client approval, receive your payment securely through the platform, without the hassle of invoicing or chasing payments.",
  },
  {
    number: "06",
    title: "Grow Your Business",
    description:
      "Build your reputation by delivering great work, earning positive client ratings and reviews. Cultivate repeat business and expand your professional network through the connections you make on the platform.",
  },
];

const FreelancerProcess = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">

        {/* Heading */}
        <h2
          className="
            text-[#111111]
            font-medium
            tracking-[-0.03em]
            leading-[1.08]

            text-[36px]
            sm:text-[48px]
            lg:text-[58px]

            mb-10
            sm:mb-14
            lg:mb-16
          "
        >
          How It Works for Freelancers
        </h2>

        {/* Process Steps */}
        <div>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`
                flex
                flex-col
                sm:flex-row

                gap-6
                sm:gap-10
                lg:gap-14
                xl:gap-16

                py-8
                sm:py-9
                lg:py-10

                ${
                  index !== steps.length - 1
                    ? "border-b border-[#D9D9D9]"
                    : ""
                }
              `}
            >
              {/* Step Number */}
              <div
                className="
                  flex-shrink-0

                  w-[74px]
                  sm:w-[92px]
                  lg:w-[100px]

                  text-[#D4D4D4]

                  font-normal

                  leading-none

                  text-[48px]
                  sm:text-[58px]
                  lg:text-[60px]
                "
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 w-full">

                <h3
                  className="
                    text-[#111111]

                    font-medium

                    tracking-[-0.025em]
                    leading-[1.08]

                    text-[28px]
                    sm:text-[36px]
                    lg:text-[44px]
                  "
                >
                  {step.title}:
                </h3>

                <p
                  className="
                    mt-3

                    w-full

                    text-[#5B5B5B]

                    font-light

                    text-[18px]
                    sm:text-[19px]
                    lg:text-[20px]

                    leading-[1.72]

                    tracking-[0.01em]

                    pr-0
                    lg:pr-8
                  "
                >
                  {step.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FreelancerProcess;