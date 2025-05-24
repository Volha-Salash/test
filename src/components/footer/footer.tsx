import "./footer.css";
import { BtnGitHub, BtnTelegram, BtnLinkdin } from "../../consts/consts";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
                <BtnLinkdin link="https://www.linkedin.com/in/volha-salash" />
            </li>
            <li className="social__item">
              <BtnTelegram link="https://t.me/Kursonechka" />
            </li>
            <li className="social__item">
              <BtnGitHub link="https://github.com/Volha-Salash" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

