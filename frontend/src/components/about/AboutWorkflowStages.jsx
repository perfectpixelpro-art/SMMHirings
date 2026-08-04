import bgLines from "../../assets/bg_img.jpg";


const stages = [
  {
    stage: "STAGE 01",
    icon: "📋",
    title: "Structured Entry",
    description:
      "Work enters the system with the brief, direction, references, and expectations already aligned. The scope is defined before execution begins.",
  },
  {
    stage: "STAGE 02",
    icon: "🎯",
    title: "Assignment Based on Proof",
    description:
      "Tasks are assigned according to demonstrated execution quality and consistency across previous output. Fit is determined by proven delivery, not availability.",
  },
  {
    stage: "STAGE 03",
    icon: "✅",
    title: "Reviewed Before Delivery",
    description:
      "Every piece is checked before it moves forward. Output is reviewed against the same standard to maintain consistency across the system.",
  },
];

const AboutWorkflowStages = () => {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-20"
       style={{
              backgroundImage: `url(${bgLines})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "100% 100%",
              backgroundColor: "#ffffff",
            }}
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">

        {/* Heading */}

        <div className="max-w-[760px]">

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
            How Work Moves
            <br />
            Through The System
          </h2>

          <p
            className="
              mt-5

              max-w-[670px]

              text-[#6F7888]
              font-light

              tracking-[0.01em]
              leading-[1.75]

              text-[16px]
              sm:text-[17px]
              md:text-[18px]
            "
          >
            Each stage follows a defined sequence before the next begins.
            Direction, assignment, execution, and review operate within the
            same controlled workflow.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {stages.map((item) => (

            <div
              key={item.stage}
              className="
                rounded-[22px]
                border
                border-[#D9D9D9]

                bg-white

                p-8

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              {/* Stage */}

              <p
                className="
                  text-[#1DBAF8]
                  font-semibold
                  tracking-[0.12em]

                  text-[13px]
                "
              >
                {item.stage}
              </p>

              {/* Icon */}

              <div
                className="
                  mt-5

                  flex
                  items-center
                  justify-center

                  w-16
                  h-16

                  rounded-2xl

                  bg-[#EAF8FF]

                  text-[34px]
                "
              >
                {item.icon}
              </div>

              {/* Title */}

              <h3
                className="
                  mt-6

                  text-[#111111]

                  font-[500]
                  leading-[1.25]

                  text-[22px]
                "
              >
                {item.title}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-2

                  text-[#70798A]

                  font-light
                  tracking-[0.01em]
                  leading-[1.8]

                  text-[15px]
                  sm:text-[15px]
                "
              >
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutWorkflowStages;