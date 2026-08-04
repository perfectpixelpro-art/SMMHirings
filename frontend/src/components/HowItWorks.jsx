import stepF1 from "../assets/step1F.png";
import stepF2 from "../assets/step2F.png";
import stepF3 from "../assets/step3F.png";
import stepF4 from "../assets/step4F.png";
import stepB1 from "../assets/step1B.png";
import stepB2 from "../assets/step2B.png";
import stepB3 from "../assets/step3B.png";
import stepB4 from "../assets/step4B.png";


import homeIcon from "../assets/homeicon.png";

const CONTENT = {
  freelancer: {
    badge: "THE PROCESS",
    heading: "How It Works for Freelancers",
    subtitle: "From application to community, refined at every step.",

    steps: [
      { image: stepF1 },
      { image: stepF2 },
      { image: stepF3 },
      { image: stepF4 },
    ],
  },

  business: {
    badge: "THE PROCESS",
    heading: "How It Works for Businesses",
    subtitle: "From first ask to final delivery, handled.",

    steps: [
      { image: stepB1 },
      { image: stepB2 },
      { image: stepB3 },
      { image: stepB4 },
    ],
  },
};

function StepCard({ image }) {
  return (
    <div className="w-full">
      <img
        src={image}
        alt=""
        draggable={false}
        className="
          w-full
          h-auto
          object-contain
          select-none
          transition-transform
          duration-300
          hover:scale-[1.02]
        "
      />
    </div>
  );
}

export default function HowItWorks({
  landingType = "freelancer",
}) {
  const data =
    landingType === "business"
      ? CONTENT.business
      : CONTENT.freelancer;

  return (
    <section className="bg-white py-20 lg:py-28">

      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        {/* Badge */}

        <div className="flex justify-center">

          <div
            className="
              flex
              items-center
              gap-3

              rounded-full

              border
              border-[#19B8F5]

              px-5
              py-2
            "
          >
            <div className="w-3 h-3 rounded-full bg-[#19B8F5]" />

            <span
              className="
                text-[14px]
                md:text-[15px]

                tracking-wide

                font-medium

                text-[#111]
              "
            >
              {data.badge}
            </span>

          </div>

        </div>

        {/* Heading */}

        <h2
          className="
            mt-7

            text-center

            font-[500]

            text-black
            leading-8

            lg:leading-[1.08]

            text-[32px] sm:text-[40px] lg:text-[52px]
          "
        >
          {data.heading}
        </h2>

        {/* Subtitle */}


       <p
  className="
    mt-5

    flex
    flex-wrap
    items-center
    justify-center
    gap-1
    leading-[1]
    lg:leading-[0.8]
            text-[18px] sm:text-[20px]

    text-center

    text-[#555]
  "
>
  {landingType === "freelancer" ? (
    <>
      <span>From</span>

      <img
        src={homeIcon}
        alt="home"
        className="
          w-4
          h-4

          md:w-4
          md:h-4

          lg:w-5
          lg:h-5

          object-contain
        "
      />

      <span>application to community, refined at every step.</span>
    </>
  ) : (
    <>
      <span>From</span>

      <img
        src={homeIcon}
        alt="home"
        className="
          w-4
          h-4

          md:w-4
          md:h-4

          lg:w-5
          lg:h-5

          object-contain
        "
      />

      <span>project request to managed delivery.</span>
    </>
  )}
</p>
                {/* Steps */}

        <div
          className="
            mt-10
            lg:mt-12

            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4

            gap-5
            lg:gap-8

            items-start
          "
        >
          {data.steps.map((step, index) => (
            <StepCard
              key={index}
              image={step.image}
            />
          ))}
        </div>

      </div>

    </section>
  );
}