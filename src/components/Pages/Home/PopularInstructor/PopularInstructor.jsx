import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PopularInstructor = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://music-pulse-server-sanzidahmed.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])
    const popularInstructor = users.filter((person) => person.role === 'instructor');
    return (
        <div  className="container mx-auto mt-10">
            <h1 className="text-3xl uppercase text-center mt-10">MusicPulse popular instructor</h1>
            <div className=" mx-auto w-1/2 mb-2 border-solid border mt-2 border-[#F45050]"></div>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-4  gap-4 mx-10">
                {
                    popularInstructor.map(person => <div key={person._id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg mt-10">
                    <figure className="">
                      <img src={person.photo} alt="Shoes" className="h-80 w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" />
                    </figure>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                      <h2 className="text-xl text-white font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-90">{person.name}</h2>
                      <h2 className="text-white">Email: {person.email}</h2>
                      <div className="card-actions md:bottom-10 md:absolute ">
                        <Link className="btn btn-primary bg-[#F45050] text-black border-[#F45050]">View Details</Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;