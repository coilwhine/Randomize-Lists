import { useEffect, useState } from "react";
import "./Footer.scss";
import FooterForm from "./FooterForm/FooterForm";

function Footer(): JSX.Element {

    const [timeOnLoad, setTimeOnLoad] = useState<Date>()
    useEffect(() => {
        const date = new Date();
        setTimeOnLoad(date)
    }, [])

    return (
        <div className="Footer">
            <FooterForm />
            <span className="copyright">Copyright ⓒ {timeOnLoad?.getFullYear()} Daniel.H WebDev. All rights reserved</span>
        </div>
    );
}

export default Footer;
