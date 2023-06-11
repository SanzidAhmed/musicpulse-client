import { useState } from "react";
import SingleClass from "./SingleClass";


const AllClass = () => {
    const [allClasses, setAllClasses] = useState([])
    fetch('http://localhost:3500/classes')
        .then(res => res.json())
        .then(data => setAllClasses(data))
    return (
        <div className="container mx-auto">
            <h1>All class is here {allClasses.length}</h1>
            <div className="md:grid md:grid-cols-3 gap-10 ">
                {
                    allClasses.map(classes => <SingleClass key={classes._id} classes={classes}></SingleClass>)
                }
            </div>

        </div>
    );
};

export default AllClass;