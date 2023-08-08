

const Groups = () => {
    return (
        <div className="container mx-auto my-10">
            <h1 className='text-3xl uppercase text-center'>Music Groups</h1>
            <div className=" mx-auto w-1/2  border-solid border mt-2 border-[#F45050] mb-10"></div>
            <div className="grid grid-cols-4 mx-auto gap-10">
                <div className="">
                    <img src="https://images.unsplash.com/photo-1595712874516-b2739ab4f924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" className="rounded-full h-48 w-48 mx-auto mb-8" alt="" />
                    <h1 className="text-2xl text-center">Kids</h1>
                    <p className="text-center mt-2">Our school is a solution for families who would like to expose their children to the world of music.</p>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1679572934325-9adf7c74809e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" className="rounded-full h-48 w-48 mx-auto mb-8" alt="" />
                    <h1 className="text-2xl text-center">Teens</h1>
                    <p className="text-center mt-2">Our classes help to develop the skills necessary for music learning and a lifelong enjoyment of music.</p>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1610070835606-664f3eae47bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="rounded-full h-48 w-48 mx-auto mb-8" alt="" />
                    <h1 className="text-2xl text-center">Adults</h1>
                    <p className="text-center mt-2">We have programs for everyone. In addition to teaching music to children, we instruct adults and seniors.</p>
                </div>
                <div className="">
                    <img src="https://images.unsplash.com/photo-1582739475946-bc72d971488f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" className="rounded-full h-48 w-48 mx-auto mb-8" alt="" />
                    <h1 className="text-2xl text-center">Private lessons</h1>
                    <p className="text-center mt-2">Private music lessons provide one-on-one attention, so teachers can focus on an individual student’s needs.</p>
                </div>
            </div>
        </div>
    );
};

export default Groups;