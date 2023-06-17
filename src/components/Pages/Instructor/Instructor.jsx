import {useEffect, useState } from "react";


const Instructor = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://music-pulse-server-sanzidahmed.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])
    const instructor = users.filter((person) => person.role === 'instructor');
    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-10">Our Popular Instructor</h1>
            <div className="grid grid-cols-3 gap-10">
                {
                    instructor.map(person => <div key={person._id} className="card w-96 bg-base-100 shadow-xl h-full">
                    <figure className="px-10 pt-10">
                      <img src={person.photo}  alt="Shoes" className="rounded-xl h-60 w-full" />
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

export default Instructor;