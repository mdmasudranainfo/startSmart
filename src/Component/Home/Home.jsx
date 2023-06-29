import Banner from "../Banner/Banner";
import TopCourse from "../TopCourse/TopCourse";
import TopRatingInstructors from "../TopRatingInstructors/TopRatingInstructors";
import TopViewCourse from "../TopViewCourse/TopViewCourse";
import UpComingEvents from "../UpComingEvents/UpComingEvents";

const Home = () => {
    return (
        <div>
            {/* <Banner /> */}
            <TopCourse />
            <TopViewCourse />
            <UpComingEvents />
            <TopRatingInstructors />
        </div>
    );
};

export default Home;