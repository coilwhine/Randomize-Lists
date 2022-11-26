import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../app/authSlice";
import { NewUserModel } from "../../../Models/NewUserModel";
import aouthService from "../../../Services/AuthService";
import "./Register.scss";

function Register(): JSX.Element {

    const { register, handleSubmit } = useForm<NewUserModel>();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    async function registernewUser({ firstName, lastName, username, password }: NewUserModel) {
        try {

            const token = await aouthService.register(firstName, lastName, username, password);
            dispatch(login(token));
            navigate('/');

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="Register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit(registernewUser)}>
                <input type="text" placeholder="First Name" minLength={2} {...register("firstName")} />
                <input type="text" placeholder="Last Name" minLength={2}{...register("lastName")} />
                <input type="text" placeholder="User Name" minLength={5}{...register("username")} />
                <input type="password" placeholder="Password" minLength={5}{...register("password")} />
                <button className="flout-btn">Register</button>
            </form>
        </div>
    );
}

export default Register;
