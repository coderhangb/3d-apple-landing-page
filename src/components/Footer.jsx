import { footerLinks } from "../constants/index";

function Footer() {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an{" "}
          <a href="#" className="text-primary">
            Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="text-primary">
            other retailer
          </a>{" "}
          near you. Or call{" "}
          <a href="tel:0008000401966" className="text-primary">
            000800 040 1966.
          </a>
        </p>
        <img src="/logo.svg" alt="" />
      </div>

      <hr />

      <div>
        <div className="links">
          <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.link}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
