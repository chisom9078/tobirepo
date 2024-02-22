//import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Feature = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Features" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          {/*<Card
            title="Business Stratagy"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={null}
          />
          <Card
            title="App Development"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<AiFillAppstore />}
          />
          <Card
            title="SEO Optimisation"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
      hic consequuntur eum repellendus ad."
            icon={<SiProgress />}
  />*/}
          <Card
            title="Mobile Development"
            des="Utilize react-native to build cross-platform mobile applications."
            icon={<FaMobile />}
          />
          <Card
            title="UX Design"
            des="Utilizing Figma, I work concurrently on multiple projects, emphasizing user interface and experience. In addition to my proficiency in prototyping, I leverage design version control to enhance collaboration and project management."
            icon={<SiAntdesign />}
          />
          <Card
            title="Web Development"
            des="By employing React and .NET Core, I have the capability to craft cross-platform applications with streamlined front-end development, ensuring seamless user experiences via single-page application (SPA) development. This combination supports server-side rendering, enhancing performance and scalability, all underpinned by rich ecosystems and adherence to modern development practices."
            icon={<FaGlobe />}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Feature;
