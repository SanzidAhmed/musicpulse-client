import { useState } from "react";
import { Link } from "react-router-dom";


const PopularClass = () => {
    const [popularClasses, setPopularClasses] = useState([])
    fetch('https://music-pulse-server-sanzidahmed.vercel.app/classes')
        .then(res => res.json())
        .then(data => setPopularClasses(data))
    return (
        <div>
            <h1 className="text-3xl uppercase text-center mt-10 ">MusicPulse popular class</h1>
            <div className=" mx-auto w-1/2 mb-20 border-solid border mt-2 border-[#F45050]"></div>
            <div className="md:grid md:grid-cols-3 m-10">
                {
                    popularClasses.map(popularClass => <div key={popularClass._id} className="mt-10 hover:shadow-lg space-y-4 card w-96 bg-base-100 ">
                    <figure><img className="h-48 w-full" src={popularClass.photo} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{popularClass.courseName}</h2>
                      <h2><span className="font-medium">Instructor:</span> {popularClass.displayName}</h2>
                      <h2><span className="font-medium">Available Seats:</span> {popularClass.seats}</h2>
                      <h2><span className="font-medium">Price:</span> $ {popularClass.coursePrice}</h2>
                      <div className="card-actions justify-end">
                        <Link to="/allclasses" className="bg-[#F45050] btn btn-sm">Get course</Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default PopularClass;