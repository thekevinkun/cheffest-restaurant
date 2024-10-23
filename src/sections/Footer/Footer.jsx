import { data } from "../../constants";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <section id="footer" className="section__padding footer">
      <ul className="footer__links">
        {data.footer.slice(0, 3).map((item) => (
          <li key={item.title} className="footer__links-list">
            <h4>{item.title}</h4>

            <ul className="footer__links-list_item">
              {item.lists.map((link) => (
                <li key={link} className="link">
                  <a href="#footer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}

        <li className="footer__links-list">
          <h4>{data.footer[3].title}</h4>

          <ul className="footer__links-list_item-bank">
            {data.footer[3].lists.map((link, index) => (
              <li key={link} className={`link image-${index + 1}`}>
                  <img src={link} alt="Bank Company Logo"/>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <div className="footer__contacts">
        <ul className="social-media">
          <li className="social-media_item">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li className="social-media_item">
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li className="social-media_item">
            <a href="https://www.reddit.com/" target="_blank" rel="noreferrer">
              <FaReddit />
            </a>
          </li>
          <li className="social-media_item">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>

        <div className="copyright">
          © 2024 Nayef All rights reserver
        </div>
      </div>
    </section>
  )
}

export default Footer;