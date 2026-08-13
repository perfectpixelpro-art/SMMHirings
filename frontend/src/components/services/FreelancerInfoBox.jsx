import { Link } from "react-router-dom";

const qa = [
  {
    q: "What is the catch?",
    a: "The screening. Not every digital marketing freelancer who applies gets through. The ones who do stop competing on price for freelance digital marketing projects and start getting matched to work that actually fits.",
  },
  {
    q: "What if I do not want a match?",
    a: "Pass on it. Declining a brief does not affect what comes next.",
  },
  {
    q: "What if things go wrong with a client?",
    a: "SMM Hiring steps in. You are not sorting it out alone.",
  },
  {
    q: "I already have clients. Any issues?",
    a: "None. No exclusivity clause. Plenty of freelancers here pick up remote marketing jobs alongside work they already have.",
  },
];

const FreelancerInfoBox = () => {
  return (
    <section className="bg-white py-10 sm:py-20 lg:py-10 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
        <div className="relative overflow-hidden rounded-[26px] border border-[#cfeefb] bg-gradient-to-b from-[#f7fdff] to-[#ecf8ff] px-6 py-9 shadow-[0_30px_70px_-30px_rgba(18,179,239,0.28)] sm:px-12 sm:py-12 lg:px-14 lg:py-14">
          {/* Decorative quote glyph (fully inside the card) */}
          <span className="pointer-events-none absolute right-8 top-8 select-none font-serif text-[96px] leading-none text-[#d3edfb] sm:text-[120px] lg:text-[140px]">
            &rdquo;
          </span>

          {/* Eyebrow + heading */}
          <div className="relative">
            
            <h2 className="mt-3 font-semibold tracking-[-0.02em] text-[#111111] text-[26px] sm:text-[34px] lg:text-[40px]">
              Questions Before Applying
            </h2>
          </div>

          {/* Q&A list */}
          <div className="relative mt-9 space-y-7 lg:mt-11 lg:space-y-12">
            {qa.map((item, i) => (
              <div key={i} className="flex gap-4 sm:gap-5">
                <span className="w-[3px] flex-shrink-0 rounded-full bg-gradient-to-b from-[#19BAF8] to-[#0f97dc]" />
                <div className="max-w-[880px]">
                  <p className="text-[17px] font-bold leading-[2.4] tracking-[-0.01em] text-[#12131a] sm:text-[19px] lg:text-[20px]">
                    &ldquo;{item.q}&rdquo;
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.7] text-[#5b6068] sm:text-[16px] lg:text-[17px]">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="relative mt-10 border-t border-[#d9eefb] pt-7 lg:mt-12 lg:pt-8">
            <p className="text-[15px] leading-[1.65] text-[#5b6068] sm:text-[16px] lg:text-[17px]">
              <span className="font-semibold text-[#111111]">
                Need someone on the other side of the brief?
              </span>{" "}
              Head over to the Business side to{" "}
              <Link
                to="/business-services/hire-social-media-manager/"
                className="font-semibold text-[#12b3ef] underline decoration-[#9fdcf7] decoration-2 underline-offset-4 transition hover:decoration-[#12b3ef]"
              >
                Hire a Marketing Consultant
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreelancerInfoBox;