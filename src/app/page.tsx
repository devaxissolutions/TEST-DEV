import Faq from "./faq";
import Founders from "./founders";
import Hero from "./hero";
import { Projects } from "./projects";
import Statistics from "./stats";

import Trusted from "./trusted";

const Home = () => {
  return ( <div>
 <Hero />
 <Trusted />
 <Projects />
 <Founders />
 <Statistics />
 <Faq />
  </div> );
}
 
export default Home;