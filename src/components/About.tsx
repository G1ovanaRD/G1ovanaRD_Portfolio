function About() {
  return (
    <div id="about" className="bg-white text-center md:px-[4rem] px-[1rem]">
      <div className="py-[4rem]">
        <h1 className="text-[2rem] w-fit mx-auto borber border-b-4 border-[#F14273] md:text-[3rem] font-bold">
          ABOUT ME
        </h1>
        <p className="text-[1.2rem] px-5 mb-5 mt-7 md:px-[10rem]">
          Here you will find more information about me, my areas of
          specialization, and my skills.
        </p>
        <div className="grid md:grid-cols-2 md:text-start px-5">
          <div className="mb-4">
            <h1 className="text-3xl font-bold md:mb-[2rem] mb-[1rem]">
              Who am I?
            </h1>
            <p className="text-[1.2rem] md:pe-[3rem]">
              I'm a Frontend Developer passionate about crafting intuitive,
              visually appealing, and user-centered digital experiences. I build
              and maintain the Front-end of Websites and Web Applications with a
              strong focus on usability, accessibility, and clean design that
              enhances the overall product experience. You can explore some of
              my work in the Projects section. I also enjoy sharing insights
              about UX/UI design, frontend best practices, and the tools I've
              learned along my journey, hoping to help others in the Dev and
              Design Community.
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-bold md:mb-[2rem] mb-[1rem]">
              My Skills
            </h1>
            <div className="flex flex-wrap text-[1rem]  md:text-[1.2rem] font-bold items-center justify-center md:items-start md:justify-start">
              <p className="item-skill">HTML</p>
              <p className="item-skill">Tailwind</p>
              <p className="item-skill">React</p>
              <p className="item-skill">NextJS</p>
              <p className="item-skill">Figma</p>
              <p className="item-skill">Node js</p>
              <p className="item-skill">Flutter</p>
              <p className="item-skill">Angular</p>
              <p className="item-skill">TypeScript</p>
              <p className="item-skill">JavaScript</p>
              <p className="item-skill">Python</p>
              <p className="item-skill">Responsive Design</p>
              <p className="item-skill">UX/UI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
