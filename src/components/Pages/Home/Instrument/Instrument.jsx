import { GiDrumKit, GiGrandPiano, GiGuitar, GiMicrophone, GiViolin, GiTrumpet, GiXylophone, GiFrenchHorn} from "react-icons/gi";


const Instrument = () => {
    return (
        <div className="container mx-auto my-10">
            <h1 className=" uppercase text-3xl  text-center">Musical Instruments</h1>
            <div className=" mx-auto w-1/2  border-solid border mt-2 border-[#F45050] mb-10"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-10 ">
                <div>
                    <p className="text-8xl text-[#F45050]"><GiGuitar className="text-center items-center justify-center mx-auto"></GiGuitar></p>
                    <h1 className=" text-2xl font-semibold">Guitar</h1>
                    <p className="text-center items-center justify-center mx-auto">The guitar is classified as a string instrument.</p>
                </div>
                <div>
                    <p className="text-8xl text-[#F45050] mx-auto"><GiGrandPiano  className="text-center items-center justify-center mx-auto"></GiGrandPiano></p>
                    <h1 className=" text-2xl font-semibold ml-2">Piano</h1>
                    <p className="text-center items-center justify-center mx-auto">It is a musical instrument played using a keyboard.</p>
                </div>
                <div>
                    <p className="text-8xl text-[#F45050] mx-auto"><GiMicrophone className="text-center items-center justify-center mx-auto"></GiMicrophone></p>
                    <h1 className=" text-2xl font-semibold ml-2">Voice</h1>
                    <p className="text-center items-center justify-center mx-auto">It is a type of music performed by one or more singers.</p>
                </div>
                <div>
                    <p className="text-8xl text-[#F45050] mx-auto"><GiDrumKit className="text-center items-center justify-center mx-auto" ></GiDrumKit></p>
                    <h1 className=" text-2xl font-semibold">Drums</h1>
                    <p className="text-center items-center justify-center mx-auto">Can play by striking with the hand or two sticks.</p>
                </div>
                <div>
                    <p className="text-8xl text-[#F45050] mx-auto"><GiViolin className="text-center items-center justify-center mx-auto" ></GiViolin></p>
                    <h1 className=" text-2xl font-semibold">Violin</h1>
                    <p className="text-center items-center justify-center mx-auto">The violin has four strings tuned in perfect fifths.</p>
                </div>
                <div>
                    <p className="text-8xl text-[#F45050] mx-auto"><GiTrumpet className="text-center items-center justify-center mx-auto" ></GiTrumpet></p>
                    <h1 className=" text-2xl font-semibold">Trumpet</h1>
                    <p className="text-center items-center justify-center mx-auto">The guitar is classified as a string instrument.</p>
                </div>
                <div>
                    <p className="text-8xl text-[#F45050] mx-auto"><GiXylophone className="text-center items-center justify-center mx-auto" ></GiXylophone></p>
                    <h1 className=" text-2xl font-semibold">Xylophone</h1>
                    <p className="text-center items-center justify-center mx-auto">The guitar is classified as a string instrument.</p>
                </div>
                <div>
                    <p className="text-8xl text-[#F45050] mx-auto"><GiFrenchHorn className="text-center items-center justify-center mx-auto" ></GiFrenchHorn></p>
                    <h1 className=" text-2xl font-semibold">French Horn</h1>
                    <p className="text-center items-center justify-center mx-auto">The guitar is classified as a string instrument.</p>
                </div>
            </div>
        </div>
    );
};

export default Instrument;