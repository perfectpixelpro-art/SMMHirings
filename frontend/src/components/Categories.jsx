import { useNavigate } from "react-router-dom";
import categoryF1 from "../assets/category1.png";
import categoryF2 from "../assets/category2.png";
import categoryF3 from "../assets/category3.png";
import categoryF4 from "../assets/category4.png";
import categoryF5 from "../assets/category5.png";
import categoryB1 from "../assets/categoryB1.png";
import categoryB2 from "../assets/categoryB2.png";
import categoryB3 from "../assets/categoryB3.png";
import categoryB4 from "../assets/categoryB4.png";
import categoryB5 from "../assets/categoryB5.png";


const CONTENT = {
  freelancer: {
    heading: "Opportunities Across Every Category",
    subtitle: "Whatever you do, there's demand for it here.",
    button: "Apply as a Freelancer",
    categories: [
      { title: "Vetted Projects", icon: categoryF1 },
      { title: "Skill Showcase", icon: categoryF2 },
      { title: "Secure Payments", icon: categoryF3 },
      { title: "Pro Community", icon: categoryF4 },
      { title: "Brand Exposure", icon: categoryF5 },
    ],
  },
  business: {
    heading: "Unlock Access to Elite Digital Talent",
    subtitle: "Vetted experts, managed projects and guaranteed results.",
    button: "Hire a Freelancer",
    categories: [
      { title: "Social media marketing", icon: categoryB1 },
      { title: "Software development", icon: categoryB2 },
      { title: "Video editing", icon: categoryB5 },
      { title: "Graphic design", icon: categoryB4 },
      { title: "Website design", icon: categoryB3 },
    ],
  },
};

function CategoryItem({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={icon}
        alt={title}
        className="
          w-[36px] h-[36px]
          md:w-[42px] md:h-[42px]
          lg:w-[46px] lg:h-[46px]
          object-contain flex-shrink-0
        "
      />
      <span className="text-[#111] font-normal text-[18px] md:text-[20px] lg:text-[22px]">
        {title}
      </span>
    </div>
  );
}

export default function Categories({ landingType = "freelancer" }) {
  const data = landingType === "business" ? CONTENT.business : CONTENT.freelancer;
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate(landingType === "freelancer" ? "/login/freelancer" : "/login/business");
  };

  return (
    <section className="bg-white py-0">
      <div className="max-w-[1700px] mx-auto px-5 sm:px-8 lg:px-[78px]">
        <div
          className="
            rounded-[34px] border border-[#82D6FF] bg-[#F8FDFF]
            px-7 py-9 md:px-10 md:py-10 lg:px-10 lg:py-12
            grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]
            gap-10 lg:gap-8 items-center
          "
        >
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2
              className="
                font-[500] text-[#111] leading-[1.08]
                text-[30px] sm:text-[36px] lg:text-[48px]
              "
            >
              {data.heading}
            </h2>
            <p className="mt-5 text-[#555] text-[18px] md:text-[20px] lg:text-[22px]">
              {data.subtitle}
            </p>
            <button
              onClick={handleCTA}
              className="
                mt-8 h-[54px] lg:h-[58px] px-8 lg:px-9
                rounded-full bg-[#18B9F6] text-white
                text-[16px] lg:text-[18px] font-medium
                hover:bg-[#0FAAE7] transition-all duration-300
              "
            >
              {data.button}
            </button>
          </div>

          {/* RIGHT */}
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2
              gap-y-6 lg:gap-y-7 gap-x-8 lg:gap-x-10 items-center
            "
          >
            {data.categories.map((item) => (
              <CategoryItem key={item.title} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
