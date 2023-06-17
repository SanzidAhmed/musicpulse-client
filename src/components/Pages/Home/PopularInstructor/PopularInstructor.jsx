import { useEffect, useState } from "react";


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
        <div>
            <h1 className="text-3xl uppercase text-center mt-20 ">MusicPulse popular instructor</h1>
            <div className=" mx-auto w-1/2 mb-20 border-solid border mt-2 border-[#F45050]"></div>
            <div className="md:grid md:grid-cols-3 gap-10 ">
                {
                    popularInstructor.map(person => <div key={person._id} className="card hover:shadow-lg mt-10 w-96 bg-base-100 h-full">
                    <figure className="px-10 pt-10">
                      <img src={person.photo} alt="Shoes" className="rounded-xl h-60 w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{person.name}</h2>
                      <p>Email: {person.email}</p>
                      <div className="card-actions">
                        <button className="btn btn-primary bg-[#F45050] text-black border-[#F45050]">View Details</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;