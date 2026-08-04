const services = [
  {
    title: "Social Media Management",
    description:
      "Utilise your expertise to manage accounts, develop content strategies, create and post engaging content, and report on performance for brands.",
  },
  {
    title: "Content Writing & Copywriting",
    description:
      "Apply your writing skills to create compelling blog posts, website copy, email newsletters, and brand content that resonates with target audiences.",
  },
  {
    title: "Video Production & Editing",
    description:
      "Showcase your video editing prowess with long-form video projects, promotional clips, and everything in between.",
  },
  {
    title: "Short-Form Video",
    description:
      "Put your creativity to work producing scroll-stopping Reels, TikToks, and Shorts that engage and convert.",
  },
  {
    title: "Podcast Production",
    description:
      "Offer your audio expertise for podcast editing, mixing, mastering, show note creation, transcription, and distribution.",
  },
  {
    title: "Graphic Design",
    description:
      "Help brands stand out with your graphic design skills, creating logos, brand kits, social graphics, presentations, and more.",
  },
  {
    title: "Website Design & Development",
    description:
      "Build your portfolio by taking on landing page projects, full website builds, and everything in between.",
  },
  {
    title: "App Design & Development",
    description:
      "Apply your design and development skills to create engaging, functional mobile apps for clients across industries.",
  },
  {
    title: "Voice Over & Audio Production",
    description:
      "Lend your voice to client projects, including videos, podcasts, ads, and more, and provide audio editing and post-production services.",
  },
  {
    title: "Paid Social & Ad Management",
    description:
      "Demonstrate your social media advertising chops by developing and executing campaigns on Meta, TikTok, LinkedIn, and other key platforms.",
  },
  {
    title: "Community Management",
    description:
      "Flex your interpersonal skills by managing comments and DMs, fostering active, loyal communities for brands.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Put your analytical mind to work by transforming raw data into clear, actionable insights for clients.",
  },
];

const FreelancerServicesGrid = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[78px]">

        {/* Heading */}
        <h2
          className="
            text-[#111111]
            font-medium
            tracking-[-0.03em]
            leading-[1.08]

            text-[36px]
            sm:text-[48px]
            lg:text-[58px]

            mb-10
            sm:mb-14
            lg:mb-16
          "
        >
          What You Can Be Hired For
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border border-[#D6D6D6]">

          {services.map((service, index) => {
            const row = Math.floor(index / 3);

            return (
              <div
                key={index}
                className={`
                  flex

                  min-h-[280px]
                  sm:min-h-[320px]
                  lg:min-h-[360px]
                  xl:min-h-[390px]

                  px-7
                  py-8
                  sm:px-8
                  sm:py-9
                  lg:px-8
                  lg:py-10

                  border-r
                  border-b
                  border-[#D6D6D6]

                  transition-all
                  duration-300
                  hover:bg-[#F5FDFF]

                  ${
                    index % 2 === 0
                      ? "bg-[#F5FDFF] md:bg-transparent"
                      : "bg-white md:bg-transparent"
                  }

                  ${
                    row % 2 === 0
                      ? "md:bg-[#F5FDFF]"
                      : "md:bg-white"
                  }
                `}
              >
                <div className="mt-auto">

                  <h3
                    className="
                      text-[#111111]
                      font-medium
                      tracking-[-0.02em]
                      leading-[1.08]

                      text-[24px]
                      sm:text-[30px]
                      lg:text-[36px]
                      xl:text-[44px]
                    "
                  >
                    {service.title}:
                  </h3>

                  <p
                    className="
                      mt-4

                      text-[#666666]

                      text-[15px]
                      sm:text-[16px]
                      lg:text-[17px]

                      leading-[1.8]
                      font-normal

                      max-w-[330px]
                    "
                  >
                    {service.description}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FreelancerServicesGrid;