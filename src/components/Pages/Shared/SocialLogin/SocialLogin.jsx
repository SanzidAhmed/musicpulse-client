import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const { signInGoogle } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        signInGoogle()
            .then((result) => {
                const loggedUser = result.user;
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:3500/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            navigate(from, { replace: true })
                        }
                    })
                    navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div className="divider">Using Social Media</div>
            <div className="text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;