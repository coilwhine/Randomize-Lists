import "./FooterForm.scss";
import { useForm } from 'react-hook-form';

function FooterForm(): JSX.Element {

    const { register, handleSubmit, reset } = useForm();

    function onSubmit(data: any) {
        console.log(data);
        reset()
        alert('Email Sent!')
    }

    return (
        <div className="FooterForm">
            <form id="footer-email-form" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" id="footer-email-form-input" placeholder="Enter your email..." {...register('email')}></input>
                <button id="footer-email-form-btn">Contact Me</button>
            </form>
        </div>
    );
}

export default FooterForm;
