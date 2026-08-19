import {
  Users,
  CalendarClock,
  FolderKanban,
  Workflow,
  Check,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ACCENT = "#0BA5EC";

const features = [
  {
    icon: Users,
    title: "Active Talent Tracking",
    desc: "See the exact number of freelancers currently working on your account at a glance.",
  },
  {
    icon: CalendarClock,
    title: "Project Timelines",
    desc: "View milestones and delivery schedules so you are never guessing when a report will land.",
  },
  {
    icon: FolderKanban,
    title: "Revision & Asset Management",
    desc: "Access all current and past assets, and handle revision requests in one unified track system.",
  },
  {
    icon: Workflow,
    title: "Managed Workflow",
    desc: "We handle the admin and quality control, leaving you to focus on the high level strategy.",
  },
];

const selectionPoints = [
  "Manual profile reviews before anyone gets matched to your project.",
  "Specialists with real writing skills and industry experience, not generalists.",
  "No bidding process, so freelancers focus on the work instead of chasing gigs.",
];

const ManagedVisibility = () => {
  return (
    <section className="relative bg-white py-10 sm:py-20 lg:py-14 2xl:py-16 lg:px-[40px] xl:px-[30px] 2xl:px-[90px]">
      <div className="max-w-[1700px] mx-auto px-5 md:px-10 lg:px-[78px]">

        {/* ===== Section intro ===== */}
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[13px]">
          Full Visibility
        </p>
        <h2 className="mt-3 max-w-4xl text-[26px] sm:text-[40px] lg:text-[48px] 2xl:text-[52px] font-[500] leading-[1.18] tracking-[-1px] text-black sm:leading-[1.16] sm:tracking-[-1.5px]">
          The Managed Dashboard{" "}
          <span style={{ color: ACCENT }}>with Full Visibility</span>
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[16.5px] 2xl:text-[17px]">
          Our system gives you full visibility into every project while making
          sure you work with highly skilled talent.
        </p>

        {/* ===== Dashboard heading + features ===== */}
        <div className="mt-10 sm:mt-12">
          <h3 className="text-[22px] font-[600] leading-tight tracking-[-0.5px] text-black sm:text-[30px] 2xl:text-[34px]">
            Your Business Dashboard: Manage with Confidence
          </h3>
          <p className="mt-4 max-w-3xl text-[15px] font-[350] leading-[1.7] text-gray-500 sm:text-[17px] 2xl:text-[18px]">
            Instead of chasing updates through email, our managed system gives
            you a centralised dashboard to oversee every aspect of your content
            and reporting projects.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="border-t-2 border-[#eef2f7] pt-6">
                <span style={{ color: ACCENT }}>
                  <f.icon className="h-[30px] w-[30px]" strokeWidth={1.75} />
                </span>
                <h4 className="mt-4 text-[16.5px] font-[600] leading-snug text-gray-900 sm:text-[17.5px] 2xl:text-[19px]">
                  {f.title}
                </h4>
                <p className="mt-2 text-[14px] font-[350] leading-[1.6] text-gray-500 sm:text-[14.5px] 2xl:text-[15.5px]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Divider ===== */}
        <div className="mt-16 h-px w-full bg-[#eef2f7] sm:mt-20" />

        {/* ===== Right specialist ===== */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 2xl:gap-20">
          {/* narrative */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-[13px]">
              The Selection
            </p>
            <h3 className="mt-3 max-w-xl text-[22px] font-[500] leading-tight tracking-[-0.5px] text-black sm:text-[32px] 2xl:text-[36px]">
              Work With the Right Specialist{" "}
              <span style={{ color: ACCENT }}>From the Start</span>
            </h3>

            {/* inline stat */}
            <div className="mt-6 flex items-end gap-4">
              <span
                className="text-[52px] font-[700] leading-none tracking-[-2px] sm:text-[64px] 2xl:text-[70px]"
                style={{ color: ACCENT }}
              >
                90%
              </span>
              <span className="mb-2 text-[13px] font-[400] leading-[1.4] text-gray-500 sm:text-[14px]">
                minimum score required
                <br />
                to pass the skills interview
              </span>
            </div>

            <div className="mt-6 space-y-4 max-w-xl text-[14px] font-[350] leading-[1.75] text-gray-500 sm:text-[15.5px] 2xl:text-[16px]">
              <p>
                When you hire content writers and copywriters through SMM
                Hiring, each professional goes through a careful selection
                process, including manual profile reviews and a required 90%
                score in the skills interview.
              </p>
              <p>
                Instead of matching you with generalists, SMM Hiring connects
                you with specialists who have the writing skills and industry
                experience your project needs. Since there is no bidding
                process, freelancers can focus on the work and deliver reliable,
                high quality results.
              </p>
              <p>
                A central dashboard keeps everything in one place, so you can
                track timelines, files, and revisions without chasing updates.
                By the time you hire them, they have already shown they can
                create clear, effective content that fits your business needs.
              </p>
            </div>
          </div>

          {/* checklist panel */}
          <div className="lg:pl-14 lg:border-l lg:border-[#eef2f7]">
            <p className="text-[13px] font-[600] uppercase tracking-[0.1em] text-gray-400">
              What you get
            </p>

            <div className="mt-6 space-y-6">
              {selectionPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4 border-b border-[#eef2f7] pb-6 last:border-b-0"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  >
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <p className="text-[14px] font-[400] leading-[1.55] text-gray-700 sm:text-[15px] 2xl:text-[15.5px]">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/login/business"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-[600] text-white shadow-[0_16px_34px_-16px_rgba(11,165,236,0.95)] transition-all duration-200 hover:-translate-y-[1px] hover:opacity-95 sm:w-auto 2xl:text-[16px]"
              style={{ backgroundColor: ACCENT }}
            >
              Hire a Content Writer
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedVisibility;