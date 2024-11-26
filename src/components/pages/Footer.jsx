import Link from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="https://github.com/ZadeHart">
                <img src="assets/8bit_github_icon.png" alt="" />
            </Link>
            <Link to="https://www.linkedin.com/in/zachary-de-hart-29a1a481/">
            <img src="assets/8bit_linkedin_icon.png" alt="" />
            </Link>
            <Link to="https://app.slack.com/client/T07AQPA57QT/C07AAAZGXGF">
            <img src="assets/8bit_slack_icon.png" alt="" />
            </Link>
        </footer>
    );
}

export default Footer;