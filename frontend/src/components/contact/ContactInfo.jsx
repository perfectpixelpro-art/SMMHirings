import iconEmail from "../../assets/icon_c1.png";
import iconLocation from "../../assets/icon_c2.png";
import iconPhone from "../../assets/icon_c3.png";


export default function ContactInfo() {
  return (
    <section className="bg-white pt-0 pb-[60px] md:pb-[80px] lg:pb-[100px]">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-0">

        {/* Divider line */}
        <div className="w-full h-[1px] bg-[#E8E8E8] mb-10 md:mb-12" />

        {/* Three items — stacked on mobile, row on md+ */}
        <div
          className="
            flex flex-col
            md:flex-row
            md:items-start
            gap-8
            md:gap-6
            lg:gap-10
          "
        >

          {/* Email */}
          <div className="flex items-start gap-4 flex-1">
            <img
              src={iconEmail}
              alt="Email"
              className="w-[20px] h-[20px] mt-[4px] flex-shrink-0"
            />
            <div>
              <p className="text-[#999] text-[11px] font-[400] uppercase tracking-[0.08em] mb-1">
                Email
              </p>
              <p className="font-[300] text-[#363636] text-[15px] md:text-[16px] lg:text-[17px] leading-[1.6]">
                support@smmhiring.com
              </p>
            </div>
          </div>

          {/* Vertical divider — desktop only */}
          <div className="hidden md:block w-[1px] bg-[#E8E8E8] self-stretch" />

          {/* Address */}
          <div className="flex items-start gap-4 flex-1">
            <img
              src={iconLocation}
              alt="Location"
              className="w-[20px] h-[20px] mt-[4px] flex-shrink-0"
            />
            <div>
              <p className="text-[#999] text-[11px] font-[400] uppercase tracking-[0.08em] mb-1">
                Address
              </p>
              <p className="font-[300] text-[#363636] text-[15px] md:text-[16px] lg:text-[17px] leading-[1.6]">
                SMM Hiring,
                <br />
                 Sector 75, Phase 8b, Mohali
              </p>
            </div>
          </div>

          {/* Vertical divider — desktop only */}
          <div className="hidden md:block w-[1px] bg-[#E8E8E8] self-stretch" />

          {/* Phone */}
          <div className="flex items-start gap-4 flex-1">
            <img
              src={iconPhone}
              alt="Phone"
              className="w-[20px] h-[20px] mt-[4px] flex-shrink-0"
            />
            <div>
              <p className="text-[#999] text-[11px] font-[400] uppercase tracking-[0.08em] mb-1">
                Phone
              </p>
              <p className="font-[300] text-[#363636] text-[15px] md:text-[16px] lg:text-[17px] leading-[1.6]">
                +91 9888666286
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}