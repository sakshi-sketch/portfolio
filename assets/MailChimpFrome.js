
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {NewsLetter} from "./NewsLetter";
 
 export const MailChimpFrome = () => {

    const posturl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    
    return (
        <>
        <MailchimpSubscribe
            url = {posturl}
            render={({subscribe,status,message}) => (
                <NewsLetter 
                    status = {status}
                    message = {message}
                    onValidate = {FormData => subscribe(FormData)}
                />
             )}
            />
        </>
    );
};



export default MailChimpFrome;