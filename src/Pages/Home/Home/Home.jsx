import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import BestWorker from "../BestWorker/BestWorker";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import HowItWorks from "../HowItWorks/HowItWorks";
import FeaturedTasks from "../FeaturedTaks/FeaturedTasks";
import SalesPromotion from "../../SalesPromotion/SalesPromotion";
import Newsletter from "../newsletter/Newsletter";
import UniqueCTA from "./UniqueCTA/UniqueCTA";


 
const Home = () => {
    return (
        <div>
         <Helmet>
            <title>Micro Platform | Home</title>
         </Helmet>
         <Banner></Banner>
         <div className="w-11/12 mx-auto">
         <BestWorker></BestWorker>
         <FeaturedTasks></FeaturedTasks>
         <HowItWorks></HowItWorks>
         <SalesPromotion></SalesPromotion>
         <Newsletter></Newsletter>
         <UniqueCTA></UniqueCTA>
         <TestimonialSection></TestimonialSection>
         </div>
        </div>
    );
};

export default Home;