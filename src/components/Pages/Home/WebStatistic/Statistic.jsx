import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const Statistic = () => {
    const [countup, setCountUp] = useState(false);
    return (
        <div className="bg-slate-300 mt-20">
            <h1 className="pt-6 uppercase text-3xl  text-center">MusicPulse is online music school</h1>
            <p className="text-xl text-center w-2/5 mt-6  mx-auto">We have talented and very experienced instructors who teach piano, violin, guitar, cello, and other instruments.</p>
            <ScrollTrigger onEnter={() => setCountUp(true)} onExit={() => setCountUp(false)}>
                <div className="flex justify-center items-center py-10 gap-36">
                    <div>
                        <div className=" border-2 border-[#F45050] rounded-full p-4">
                            {countup && <h1 className="text-4xl px-10 py-5 rounded-full    bg-[#F45050] font-bold">
                                <CountUp start={0} end={300} duration={3} delay={0}></CountUp>
                            </h1>}
                        </div>
                        <h1 className="text-3xl  text-center"> Students</h1>
                    </div>
                    <div>
                        <div className=" border-2 border-[#F45050] rounded-full p-4">
                            {countup && <h1 className="text-4xl px-10 py-5 rounded-full    bg-[#F45050] font-bold">
                                <CountUp start={0} end={25} duration={3} delay={0}></CountUp>
                            </h1>}
                        </div>
                        <h1 className="text-3xl  text-center">Teachers</h1>
                    </div>
                    <div>
                        <div className=" border-2 border-[#F45050] rounded-full p-4">
                            {countup && <h1 className="text-4xl px-10 py-5 rounded-full    bg-[#F45050] font-bold">
                                <CountUp start={0} end={50} duration={3} delay={0}></CountUp>
                            </h1>}
                        </div>
                        <h1 className="text-3xl  text-center">Programme</h1>
                    </div>
                    <div>
                        <div className=" border-2 border-[#F45050] rounded-full p-4">
                            {countup && <h1 className="text-4xl px-10 py-5 rounded-full    bg-[#F45050] font-bold">
                                <CountUp start={0} end={22} duration={3} delay={0}></CountUp>
                            </h1>}
                        </div>
                        <h1 className="text-3xl  text-center">Awards</h1>
                    </div>
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default Statistic;