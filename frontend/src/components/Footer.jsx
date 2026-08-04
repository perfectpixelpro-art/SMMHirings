import { Link } from "react-router-dom";
import footer_logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-25 lg:mt-30">
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-[78px] py-6 lg:py-6">
        <div className="flex flex-col lg:flex-row justify-between gap-20 lg:gap-120">
          {/* Left */}
          <div className="lg:w-[32%]">
            <img
              src={footer_logo}
              alt="SMM Hiring"
              className="h-[58px] w-auto object-contain"
            />

            <p
              className="
                font-[200]
                mt-6
                text-[18px]
                leading-8
                text-[#6B7280]
                max-w-[340px]
              "
            >
              The Social execution network.
              <br />
              Structured, reliable, consistent.
            </p>
          </div>

          {/* Right */}
          <div
            className="
              lg:w-[68%]
              grid
              grid-cols-2
              sm:grid-cols-3
              gap-y-10
              gap-x-12
              lg:justify-items-end
            "
          >
            {/* Platform */}
            <div>
              <h4
                className="
                  text-black
                  text-[16px]
                  font-[500]
                  mb-5
                  uppercase
                  tracking-[0.07em]
                "
              >
                Platform
              </h4>

              <div className="flex flex-col gap-1.5">
                <Link
                  to="/about/"
                  className="font-[200] text-[16px] text-[#6B7280] hover:text-[#19B8F5] transition"
                >
                  About Us
                </Link>

                <Link
                  to="/contact/"
                  className="font-[200] text-[16px] text-[#6B7280] hover:text-[#19B8F5] transition"
                >
                  Contact Us
                </Link>

                <Link
                  to="/business-services/hire-social-media-manager/"
                  className="font-[200] text-[16px] text-[#6B7280] hover:text-[#19B8F5] transition"
                >
                  Services
                </Link>

             
              </div>
            </div>

            {/* Work */}
            <div>
              <h4
                className="
                  text-black
                  text-[16px]
                  font-[500]
                  mb-5
                  tracking-[0.07em]
                  uppercase
                "
              >
                Work
              </h4>

              <div className="flex flex-col gap-1.5">
                <Link
                  to="/business-services/hire-social-media-manager/"
                  className="font-[200] text-[16px] text-[#6B7280] hover:text-[#19B8F5] transition"
                >
                  Social Media
                </Link>

                <Link
                  to="/business-services/hire-short-form-video-editor/"
                  className="font-[200] text-[16px] text-[#6B7280] hover:text-[#19B8F5] transition"
                >
                  Short-Form Video
                </Link>

                <Link
                  to="/business-services/hire-graphic-designer/"
                  className="font-[200] text-[16px] text-[#6B7280] hover:text-[#19B8F5] transition"
                >
                  Visual Branding
                </Link>

              
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="
                  text-black
                  text-[16px]
                  font-[500]
                  tracking-[0.07em]
                  uppercase
                  mb-5
                "
              >
                Contact
              </h4>

              <div className="flex flex-col gap-1.5">
                <Link
                  to="/contact/"
                  className="font-[200] text-[16px] text-[#6B7280] hover:text-[#19B8F5] transition"
                >
                  Get in Touch
                </Link>

           
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-300 mt-10 pt-8">
          <p className="text-center text-[15px] text-gray-500">
            © {new Date().getFullYear()} SMM Hiring. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}