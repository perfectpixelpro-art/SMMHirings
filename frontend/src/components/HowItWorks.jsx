import { Link } from "react-router-dom";
import workF1 from "../assets/workF1.png";
import workF2 from "../assets/workF2.png";
import workF3 from "../assets/workF3.png";
import workB1 from "../assets/step1B.png";
import workB2 from "../assets/step2B.png";
import workB3 from "../assets/step3B.png";

const CONTENT = {
  freelancer: {
    headingLine1: " Five Steps From SMM Application to",
    headingLine2Start: "Your ",
    headingLine2Highlight: "First Freelance Social Media Manager Job",
    subtitle:
      "Every freelancer clears the same five stages. Two of them can end the process. That's what keeps the shortlists sharp on the business side, and it's why the freelancers who make it through actually get matched to real work.",

    steps: [{ image: workF1 }, { image: workF2 }, { image: workF3 }],
  },

business: {
    headingLine1: "Six Steps From Signup to ",
    headingLine2Start: "Hiring ",
    headingLine2Highlight: "Through SMM Hiring",
    subtitle: (
      <>
        Every business clears the same six stages. One of them can end the
        process. That's how the{" "}
        <Link
          to="/remote-marketing-freelance-jobs"
          className="text-inherit underline hover:text-[#1cb9f5]"
        >
          freelancer side
        </Link>{" "}
        stays serious about who they're hiring for, and it's why the businesses
        that clear the process actually get matched to real talent.
      </>
    ),

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
    <section className="bg-white py-10 sm:py-20  lg:py-20 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
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
            mx-auto
            max-w-[900px]
            text-center
            text-[16px] sm:text-[18px]
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