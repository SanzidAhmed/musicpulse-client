import Banner from "../Banner/Banner";
import Groups from "../Groups/Groups";
import Instrument from "../Instrument/Instrument";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Sponsors from "../Sponsors/Sponsors";
import Testimonial from "../Testimonial/Testimonial";
import Statistic from "../WebStatistic/Statistic";

const Home = () => {
    
    return (
        <div>
            <div className="">
                <Banner></Banner>
                <PopularClass></PopularClass>
                <PopularInstructor></PopularInstructor>
                <Statistic></Statistic>
                <Groups></Groups>
                <Sponsors></Sponsors>
                <Testimonial></Testimonial>
                <Instrument></Instrument>
            </div>
        </div>
    );
};

export default Home;