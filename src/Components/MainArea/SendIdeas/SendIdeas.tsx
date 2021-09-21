import "./SendIdeas.css";
import emailjs from "emailjs-com";
import { useHistory } from "react-router";
import notify from "../../../Services/Notification";
import { useForm } from "react-hook-form";

function SendIdeas(): JSX.Element {

    const {register, handleSubmit, formState: { errors }} = useForm();

    const history = useHistory();

    function sendEmail(e:any) {

            emailjs.sendForm('service_6h66g8s', 'my-template'
            , e.target, 'user_2yCwRHQGK7r7v89rC1FRK')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                e.target.reset();
                notify.success("your ideas were sent successfully , thanks!");
                history.push("/home");
    }

    return (
        <div className="SendIdeas">
            <h1 id="niceTitle">Send me an Email</h1>
			 <div className="customCont ">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">

                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" 
                            {...register("name",{
                                required: true, 
                                minLength:2})}/>
                                 <br />
                            {errors.name?.type==='required' && <span id="errors">missing name</span>}
                            {errors.name?.type==='minLength' && <span id="errors">name is too short</span>}
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"
                            {...register("email",{
                                required: true, 
                                minLength:2})}/>
                                 <br />
                            {errors.email?.type==='required' && <span id="errors">missing email</span>}
                            {errors.email?.type==='minLength' && <span id="errors">email is too short</span>}
                        </div>

                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"{...register("subject",{
                                required: true, 
                                minLength:2})}/>
                                 <br />
                            {errors.subject?.type==='required' && <span id="errors">missing subject</span>}
                            {errors.subject?.type==='minLength' && <span id="errors">subject is too short</span>}
                        </div>

                        <div id="blackk" className="col-8 form-group pt-2 mx-auto ">
                            <textarea className="form-control" id="" cols={30} rows={8} placeholder="Your message" name="message"{...register("message",{
                                required: true, 
                                minLength:10})}/>
                                <br />
                            {errors.subject?.type==='required' && <span id="errors">missing message</span>}
                            {errors.subject?.type==='minLength' && <span id="errors">message is too short</span>}
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <button type="submit" className="btn btn" >Send Message</button>
                        </div>
                    </div>
                  </form>
                <button id="btnnn" onClick={()=> history.push("/home")}>↩</button>
            </div>
        </div>
    );
}

export default SendIdeas;
