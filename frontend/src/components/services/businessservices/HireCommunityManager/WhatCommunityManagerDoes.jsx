import {
  MessagesSquare,
  CalendarClock,
  Lightbulb,
  ShieldCheck,
  Heart,
  UserRoundCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const reasons = [
  {
    icon: MessagesSquare,
    title: "Comments & DMs Start Piling Up",
    body: (
      <>
        A few unanswered comments quickly become a pattern. Questions go
        unanswered, potential customers move on, and regular followers stop
        expecting a response. A community manager keeps those conversations
        active while they're still happening.
      </>
    ),
  },
  {
    icon: CalendarClock,
    title: "Engagement Gets Pushed Aside",
    body: (
      <>
        Your marketing team has content to create, campaigns to launch, and
        deadlines to hit. Someone still needs to be there when your audience
        starts talking.{" "}
        <span className="font-[600] text-gray-800">
          Social Media Community Management
        </span>{" "}
        gives those conversations a clear owner. If you also need help managing
        your wider social presence, you can{" "}
        <Link
          to="/business-services/hire-social-media-manager/"
          className="font-[600] underline underline-offset-2 hover:opacity-80"
          style={{ color: ACCENT, textDecorationColor: "#8ed3f6" }}
        >
          Hire Social Media Manager
        </Link>{" "}
        support.
      </>
    ),
  },
  {
    icon: Lightbulb,
    title: "Your Audience Is Giving You Feedback",
    body: (
      <>
        The most useful customer research doesn't always arrive in a survey. It
        shows up in comments, DMs, questions, complaints, and repeated requests.{" "}
        <span className="font-[600] text-gray-800">
          Customer Community Management
        </span>{" "}
        turns those everyday conversations into insights your business can
        actually use.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Someone Needs to Keep the Community Healthy",
    body: (
      <>
        Not every interaction deserves a reply. Spam, inappropriate comments,
        arguments, and difficult conversations need someone who knows when to
        respond, when to moderate, and when to step in.{" "}
        <span className="font-[600] text-gray-800">
          Community Moderation Services
        </span>{" "}
        help keep your community worth coming back to.
      </>
    ),
  },
  {
    icon: Heart,
    title: "Your Brand Should Feel Human",
    body: (
      <>
        People don't build relationships with logos. They build them through
        interactions. A thoughtful response, a remembered question, or simply
        being heard can make your brand feel like there are real people behind
        it. That's the foundation of{" "}
        <span className="font-[600] text-gray-800">Brand Community Management</span>.
      </>
    ),
  },
];

const WhatCommunityManagerDoes = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-16 2xl:py-24 sm:px-0 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        {/* Eyebrow */}
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[13px]">
          What They Do
        </p>

        {/* Heading */}
        <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[52px] 2xl:text-[54px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          What Does a <span style={{ color: ACCENT }}>Community Manager</span> Do?
        </h2>

        {/* Intro */}
        <div className="mt-5 max-w-3xl space-y-4">
          <p className="text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
            A community manager runs the relationship between your brand and the
            people talking to it. That means answering comments and DMs, catching
            a frustrated customer before it turns into a bigger problem, spotting
            the same question coming up again and again, and knowing when to jump
            into a conversation and when to leave it alone.
          </p>
          <p className="text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] sm:leading-[1.75] 2xl:text-[18px]">
            This is what{" "}
            <span className="font-[600] text-gray-800">
              Social Media Community Management
            </span>{" "}
            and{" "}
            <span className="font-[600] text-gray-800">
              Community Engagement Services
            </span>{" "}
            actually cover, day to day work with real judgment behind it, not just
            clearing notifications.
          </p>
        </div>

        {/* Unified panel: statement header + reason rows */}
        <div className="mt-10 overflow-hidden rounded-[26px] border border-[#e6eef6] bg-white shadow-[0_24px_60px_-34px_rgba(11,165,236,0.55)] sm:mt-14 sm:rounded-[32px]">

          {/* accent header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0BA5EC] via-[#0a86c4] to-[#0b6fa6] px-6 py-8 sm:px-10 sm:py-10 2xl:px-12 2xl:py-12">
            <span className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
            <span className="pointer-events-none absolute -bottom-20 -left-12 h-52 w-52 rounded-full bg-black/10 blur-3xl" />
            <div className="relative">
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-[13px]">
                Why Does Your Business Need One?
              </p>
              <p className="mt-3 max-w-3xl text-[22px] font-[500] leading-[1.25] tracking-[-0.5px] text-white sm:text-[30px] 2xl:text-[34px]">
                Because posting gets attention.{" "}
                <span style={{ color: "#bfe6fb" }}>Conversation builds loyalty.</span>
              </p>
            </div>
          </div>

          {/* reason rows */}
          <div className="flex flex-col">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className={`group grid grid-cols-[auto_1fr] items-start gap-4 px-6 py-6 transition-colors duration-200 hover:bg-[#f7fbff] sm:gap-6 sm:px-10 sm:py-8 2xl:px-12 ${
                    i > 0 ? "border-t border-[#eef2f7]" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="hidden text-[15px] font-[600] tabular-nums sm:block" style={{ color: "rgba(11,165,236,0.4)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e9f4fd] transition-colors duration-200 group-hover:bg-[#dceffc] 2xl:h-[52px] 2xl:w-[52px]">
                      <Icon className="h-[22px] w-[22px]" style={{ color: ACCENT }} strokeWidth={2} />
                    </span>
                  </div>

                  <div className="min-w-0 pt-1">
                    <h3 className="text-[16.5px] font-[600] leading-snug text-gray-900 sm:text-[18.5px] 2xl:text-[19.5px]">
                      {reason.title}
                    </h3>
                    <p className="mt-2 max-w-3xl text-[13.5px] font-[350] leading-[1.75] text-gray-500 sm:text-[15px] 2xl:text-[15.5px]">
                      {reason.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing callout */}
        <div className="mt-10 flex items-start gap-4 rounded-[20px] border border-[#cfe9fb] bg-[#f2f9ff] p-6 sm:mt-12 sm:p-8">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
            <UserRoundCheck className="h-[20px] w-[20px]" style={{ color: ACCENT }} strokeWidth={2} />
          </span>
          <p className="text-[14px] font-[350] leading-[1.75] text-gray-600 sm:text-[16px] 2xl:text-[16.5px]">
            If your audience is active but your team doesn't have the time to stay
            on top of every conversation, a{" "}
            <span className="font-[600] text-gray-900">Dedicated Community Manager</span>{" "}
            can take ownership of the day-to-day interaction. For a growing
            company, having a{" "}
            <span className="font-[600] text-gray-900">Community Manager for Business</span>{" "}
            can also give audience communication the attention it needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatCommunityManagerDoes;