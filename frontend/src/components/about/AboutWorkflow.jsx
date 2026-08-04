const AboutWorkflow = () => {
  const items = [
    "Strategy, structure, and content planning are resolved before the work enters the system.",
    "The system separates planning from delivery to reduce variation across output.",
    "The role is not to redefine the work. The role is to deliver it to the required standard.",
  ];

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">

        <div className="grid grid-cols-1 lg:grid-cols-[44%_56%] items-start gap-0">

          {/* LEFT */}

          <div className="max-w-[540px]">

            <h2
              className="
                text-[#111111]
                font-[500]
                tracking-[-0.02em]
                leading-[1.08]

                text-[28px]
                sm:text-[46px]
                md:text-[52px]
                lg:text-[50px]
              "
            >
              Work is defined before it
              <br />
              reaches execution.
            </h2>

            <p
              className="
                mt-7
                max-w-[500px]

                text-[#70798A]
                font-light
                tracking-[0.01em]
                leading-[1.75]

                text-[16px]
                sm:text-[17px]
                md:text-[18px]
              "
            >
              All projects are structured, planned, and finalised before
              entering the system. By the time work reaches SMM Hiring,
              decisions around direction, content, and structure have already
              been made.
            </p>

          </div>

          {/* RIGHT */}

          <div className="max-w-[560px] ml-auto">

            <div className="space-y-5">

              {items.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-5

                    rounded-[18px]

                    border
                    border-[#E5E5E5]

                    bg-white

                    px-6
                    py-5
                  "
                >

                  {/* ICON */}

                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-[#20B8F6]

                      flex
                      items-center
                      justify-center

                      flex-shrink-0
                    "
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12.5L10 16.5L18 8"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* TEXT */}

                  <p
                    className="
                      text-[#111111]
                      font-[500]
                      leading-[1.4]
                      tracking-[-0.01em]

                      text-[17px]
                      lg:text-[18px]
                    "
                  >
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutWorkflow;