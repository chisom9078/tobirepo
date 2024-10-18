import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo,testimonialOne } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
         <a href="https://www.figma.com/proto/5Je1JVGTjuKQPMfurT1VfT/Tour?page-id=0%3A1&type=design&node-id=1-2&viewport=-71%2C388%2C0.02&t=NS3IGvhaJze45NQr-1&scaling=contain&mode=design"><ProjectsCard
            title="SOCIAL MEDIA DESIGN"
            des=" Utilizing Figma, I've designed what, in my perspective, a next-generation social media website targeting a distinct demographic should resemble."
            src={projectOne}
          /></a>
          
          <a href="https://www.figma.com/proto/4QQDCkZwJaIK0vfnruZEac/Untitled?page-id=0%3A1&type=design&node-id=0-1&viewport=509%2C436%2C0.7&t=RRhnkPPFo7SQZRCj-1&scaling=scale-down&mode=design"> <ProjectsCard
            title="E-commerce Website"
            des=" using figma i developed the front page of an eCommerce app"
            src={projectTwo}
          /></a>
         
           <a href="https://www.figma.com/proto/XjN20MkaBnZFtECgK0gBAp/WinAmp?page-id=0%3A1&type=design&node-id=58-512&viewport=620%2C396%2C0.29&t=GSekbS75vggFlIH1-1&scaling=min-zoom&mode=design"><ProjectsCard
            title="Wimamp Redesign"
            des="Using Figma, I redesigned the familiar yet outdated Winamp application by incorporating new features and creating a more streamlined and uncluttered visual appearance.!"
            src={projectThree}
          /></a>
          <a href="https://kingkeyz.vercel.app/">
          <ProjectsCard
            title="Phone store"
            des=" An online retail platform where customers can purchase both brand-new and refurbished smartphones."
            src={projectThree}
          /></a>
         <a href="wintercoin.org">
          <ProjectsCard
            title="Wallet Connect"
            des=" The wallet app is a secure and user-friendly mobile application designed for seamless financial management."
            src={projectOne}
          /></a>
          <a href="https://piggy-vest-cloned.vercel.app/">
          <ProjectsCard
            title="Piggy vest"
            des=" (fintech) platform that offers savings and investment services.An online retail platform where customers can purchase both brand-new and refurbished smartphones."
            src={projectTwo}
          />
          </a>
          <a href="https://movieapp-livid-tau.vercel.app/">
          <ProjectsCard
            title="Nety"
            des="Movie App"
            src={testimonialOne}
          />
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
