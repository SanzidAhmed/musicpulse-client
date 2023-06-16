import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const classInfo = useLoaderData();
    console.log(classInfo);
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={classInfo.price} classInfo = {classInfo}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;