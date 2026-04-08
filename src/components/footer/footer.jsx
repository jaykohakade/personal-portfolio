import React from 'react';
import './footer.css';

const socials = [
  { icon: 'fa-brands fa-linkedin',  href: 'https://www.linkedin.com/in/jayesh-kohakade-635110240/', label: 'LinkedIn'  },
  { icon: 'fa-brands fa-twitter',   href: 'https://twitter.com/yourhandle',                          label: 'Twitter'   },
  { icon: 'fa-brands fa-instagram', href: 'https://instagram.com/yourhandle',                        label: 'Instagram' },
  { icon: 'fa-brands fa-whatsapp',  href: 'https://wa.me/yourphonenumber',                           label: 'WhatsApp'  },
];

const Footer = () => {
  return (
    <footer className="foot-container">

      <div className="rights">
        <p>© {new Date().getFullYear()} Jay. All rights reserved.</p>
      </div>

      <div className="links">
        <ul>
          {socials.map(({ icon, href, label }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <i className={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>

    </footer>
  );
};

export default Footer;