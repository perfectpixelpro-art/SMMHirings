import workF1 from "../assets/workF1.png";
import workF2 from "../assets/workF2.png";
import workF3 from "../assets/workF3.png";
import workB1 from "../assets/step1B.png";
import workB2 from "../assets/step2B.png";
import workB3 from "../assets/step3B.png";

const CONTENT = {
  freelancer: {
    headingLine1: "How Do You Go From SMM Application to",
    headingLine2Start: "Your ",
    headingLine2Highlight: "First Freelance Social Media Job",
    subtitle: "Three steps. No sales calls, no competing on rate.",

    steps: [{ image: workF1 }, { image: workF2 }, { image: workF3 }],
  },

  business: {
    headingLine1: "How Do You Go From Job Post to",
    headingLine2Start: "Your ",
    headingLine2Highlight: "First Reliable Social Media Hire",
    subtitle: "Three steps. No sales calls, no competing on rate.",

    steps: [{ image: workB1 }, { image: workB2 }, { image: workB3 }],
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

export default function HowItWorks({ landingType = "freelancer" }) {
  const data = landingType === "business" ? CONTENT.business : CONTENT.freelancer;

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        {/* Heading */}
        <h2
          className="
            text-center
            font-semibold
            text-black
            leading-8
            lg:leading-[1.28]
            text-[32px] sm:text-[40px] lg:text-[48px]
          "
        >
          <span className="block">{data.headingLine1}</span>
          <span className="block">
            {data.headingLine2Start}
            <span className="text-sky-500">{data.headingLine2Highlight}</span>
            <span className="text-black">?</span>
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className="
            mt-4
            text-center
            text-[16px] sm:text-[22px]
            text-[#555]
          "
        >
          {data.subtitle}
        </p>

        {/* Steps */}
        <div
          className="
            mt-10
            lg:mt-12

            grid
            grid-cols-1
            md:grid-cols-3

            gap-5
            lg:gap-8

            items-start
          "
        >
          {data.steps.map((step, index) => (
            <StepCard key={index} image={step.image} />
          ))}
        </div>
      </div>
    </section>
  );
}