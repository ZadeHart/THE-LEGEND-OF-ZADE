// import { Link } from 'react-router-dom';

import github from '../../public/images/github.png';
import linkedin from '../../public/images/linkedin.png';
import slack from '../..//public/images/slack.png'

export default function Footer () {
    return (
        <footer className="footer">
            <a href="https://github.com/ZadeHart">
            <img src={github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/zachary-de-hart-29a1a481/">
            <img src={linkedin} alt="" />
            </a>
            <a href="https://app.slack.com/client/T07AQPA57QT/C07AAAZGXGF">
            <img src={slack} alt="" />
            </a>
        </footer>
    );
}
