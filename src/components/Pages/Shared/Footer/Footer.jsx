

const Footer = () => {
    return (
        <footer className="bg-slate-200">
            <div className="footer p-10  text-base-content md:flex md:justify-between justify-center mx-auto md:container ">
                <div>
                    <img className="h-20 w-20" src="https://i.ibb.co/BnRMS9g/Red-Elegant-Abstract-Podcast-Free-Logo-1-removebg-preview.png" alt="" />
                    <p>MusicPulse Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-slate-200 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by MusicPulse Ltd.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;