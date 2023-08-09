import contactImage from '../../../../assets/JESc5vNFCs.json'
import Lottie from "lottie-react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_449816l', 'template_94jm4c7', form.current, '-33hcSf0KZD3bZeaE')
            .then((result) => {
                console.log(result.text);
                form.reset()
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="my-10 container mx-auto text-center">
            <h1 className="text-3xl uppercase text-center">Contact Us</h1>
            <div className=" mx-auto w-1/2  border-solid border mt-2 border-[#F45050]"></div>
            <div className='md:flex mt-10'>
                <div className='md:w-1/2 '>
                    <Lottie className='w-96 '
                        animationData={contactImage}
                    />
                </div>
                <form className='md:w-1/2 shadow-xl space-y-6 p-6 rounded-md' ref={form} onSubmit={sendEmail}>
                    <div className="form-control">
                        <input type="text" name="user_name" placeholder="name" className="input border-b-4 border-[#F45050]" />
                    </div>
                    <div className="form-control">
                        <input type="email" name="user_email" placeholder="email" required className="input border-b-4 border-[#F45050]" />
                    </div>
                    <div className="form-control">
                        <textarea type="text" name="message" placeholder="message" className="textarea h-48  border-b-4 border-[#F45050] textarea-sm w-full" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn w-1/3 mx-auto bg-[#F45050] border-[#F45050] text-white hover:bg-[#F45050]">send</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;