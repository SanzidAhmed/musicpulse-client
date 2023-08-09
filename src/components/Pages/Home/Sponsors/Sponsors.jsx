import Marquee from "react-fast-marquee";
const Sponsors = () => {
    return (
        <div className="bg-slate-300 py-10 mt-5">
            <div className=" container mx-auto ">
                <h1 className="text-3xl uppercase text-center mb-5">Our Sponsors</h1>
                <Marquee className="" direction="right">
                    <div className="flex justify-center items-center gap-4 mr-10">
                        <img className="h-20 w-20" src="https://upload.wikimedia.org/wikipedia/commons/e/ec/UMG_Philippines_logo.svg" alt="" />
                        <h1 className="font-bold">Universal Music Group</h1>
                    </div>
                    <div className="flex justify-center items-center gap-4 mr-10">
                        <img className="h-20 w-20" src="https://upload.wikimedia.org/wikipedia/en/4/40/Sony-Music-Logo.svg" alt="" />
                        <h1 className="font-bold">Sony Music Entertainment</h1>
                    </div>
                    <div className="flex justify-center items-center gap-4 mr-10">
                        <img className="h-20 w-20" src="https://upload.wikimedia.org/wikipedia/commons/8/80/BMG_Rectange_Logo_Red_RGB.svg" alt="" />
                        <h1 className="font-bold"> BMG Rights Management</h1>
                    </div>
                    <div className="flex justify-center items-center gap-4 mr-10">
                        <img className="h-20 w-20" src="https://upload.wikimedia.org/wikipedia/en/5/54/Saregama_logo.png" alt="" />
                        <h1 className="font-bold">Saregama Inc </h1>
                    </div>
                    <div className="flex justify-center items-center gap-4 mr-10">
                        <img className="h-20 w-20" src="https://upload.wikimedia.org/wikipedia/commons/7/7d/T-series-logo.svg" alt="" />
                        <h1 className="font-bold">T-Series</h1>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Sponsors;