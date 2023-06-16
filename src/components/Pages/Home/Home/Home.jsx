import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Sponsors from "../Sponsors/Sponsors";

const Home = () => {
    
    return (
        <div>
            <div className="">
                <Banner></Banner>
                <PopularClass></PopularClass>
                <PopularInstructor></PopularInstructor>
                <Sponsors></Sponsors>
            </div>
        </div>
    );
};

export default Home;