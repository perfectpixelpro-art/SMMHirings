import { Target, ShieldCheck, UserCheck, Repeat2 } from "lucide-react";

const points = [
  {
    icon: Target,
    text: "You get matched because you fit the brief, not because you quoted lowest.",
  },
  {
    icon: ShieldCheck,
    text: "Every client on this marketing freelancer platform gets reviewed before their job goes live.",
  },
  {
    icon: UserCheck,
    text: "Your profile does the work instead of a fresh pitch each time.",
  },
  {
    icon: Repeat2,
    text: "When a project goes well, the client can request you directly for the next one.",
  },
];

const FreelancerNoPitching = () => {
  return (
    <section className="bg-white py-10 sm:py-20 lg:py-10 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">
       

        {/* Heading */}
        <h3 className="mt-3 max-w-3xl text-[30px] sm:text-[42px] lg:text-[48px] font-[500] leading-[1.14] tracking-[-1.5px] text-black">
          No Pitching. No Bidding.{" "}
          <span className="text-sky-400">No Chasing Payment.</span>
        </h3>

        {/* Points */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-2xl border border-sky-100 bg-[#f9fdff] p-6 transition-all duration-200 hover:border-sky-300 hover:shadow-[0_4px_24px_rgba(56,189,248,0.12)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-400">
                  <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                </div>
                <p className="text-[15px] font-[450] leading-[1.65] text-gray-800 sm:text-[16px]">
                  {p.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 border-t border-gray-100 sm:mt-16" />
      </div>
    </section>
  );
};

export default FreelancerNoPitching;