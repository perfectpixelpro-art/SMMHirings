import boyAbout from "../../assets/boyAbout.png";

const AboutConsistency = () => {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[56%_44%]

            items-center
            gap-10
            lg:gap-12
          "
        >

          {/* LEFT */}

          <div
            className="
              w-full
              max-w-[760px]

              text-center
              lg:text-left
            "
          >

            <h2
              className="
                text-[#111111]
                font-[500]
                tracking-[-0.025em]
                leading-[1.12]

                text-[28px]
                sm:text-[46px]
                md:text-[52px]
                lg:text-[50px]
              "
            >
              Consistency Is The Standard.
              <br />
              Not An Occasional Quality.
            </h2>

            <p
              className="
                mt-5
                max-w-[720px]

                text-[#6F7888]
                font-light
                tracking-[0.01em]
                leading-[1.75]

                text-[16px]
                sm:text-[17px]
                md:text-[18px]
              "
            >
              The goal is not to produce one strong piece and reset. It is to
              deliver the same level of clarity and structure across every
              piece of work. That requires discipline more than
              experimentation.
            </p>

            <p
              className="
                mt-3
                max-w-[720px]

                text-[#6F7888]
                font-light
                tracking-[0.01em]
                leading-[1.75]

                text-[16px]
                sm:text-[17px]
                md:text-[18px]
              "
            >
              It requires understanding the brief, following it without
              deviation, and maintaining the same quality over time. The
              system supports this by keeping expectations clear. The outcome
              depends on how consistently those expectations are met.
            </p>

          </div>

          {/* RIGHT */}

          <div
            className="
              w-full
              flex
              justify-center
              lg:justify-end
            "
          >
            <img
              src={boyAbout}
              alt="Consistency"
              className="
                w-full
                max-w-[560px]

                h-auto

                object-contain
                select-none
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutConsistency;