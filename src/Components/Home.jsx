
import Hero from "./Hero";
import Banner from "./Banner";
import Heading from "./Heading";

import Gadgets from "./Gadgets";




const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <Heading title='Explore cutting-edge Gadget'/>
            <div className="flex justify-around">
            
            <Gadgets></Gadgets>
            

            </div>
            
                
            
            
           
            
        </div>
    );
};

export default Home;