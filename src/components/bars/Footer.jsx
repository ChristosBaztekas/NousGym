import { Link } from "react-router-dom";
import { SmoothScrollButton } from "../custom/SmoothScrollButton";
import * as Icons from "../../utils/icons.util"; // Import all icons

export const Footer = () => {
    return (
        <footer className="footer">
            {/* Social Media Section */}
            <div>
                <p>Follow on:</p>
                <span className="footer__social-links">
                    <Link
                        to="https://www.facebook.com/share/168oaXHvt1/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icons.FacebookIcon />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icons.LinkedIcon />
                    </Link>
                    <Link
                        to="https://www.tiktok.com/@nousgym.gr?_t=ZN-8ukqaeeQyEI&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icons.TiktokIcon />
                    </Link>
                    <Link
                        to="https://www.instagram.com/nousgymgr?igsh=MThqNnh0ZHM5YnE5&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icons.InstaIcon />
                    </Link>
                </span>
            </div>

            {/* Navigation and Contact Section */}
            <nav>
                {/* Menu Links */}
                <div>
                    <p>Μενού</p>
                    <ul>
                        <li>
                            <Link to="/">Αρχική</Link>
                        </li>
                        <li>
                            <Link to="/who-we">Ποιοι Είμαστε</Link>
                        </li>
                        <li>
                            <Link to="/nous-gym">NousGym+</Link>
                        </li>
                        {/* Smooth scroll button to testimonials */}
                        <li>
                            <SmoothScrollButton href="#testimonial">
                                Τι Λένε Για Εμάς
                            </SmoothScrollButton>
                        </li>
                        <li>
                            <SmoothScrollButton href="#widget">
                                Επικοινωνία
                            </SmoothScrollButton>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <p>Επικοινωνία</p>
                    <span>
                        <Icons.MailIcon />
                        <span className="text-sm">
                            Send Email{" "}
                            <a href="mailto:info@nousgym.gr" className="font-medium text-base">
                                info@nousgym.gr
                            </a>
                        </span>
                    </span>
                </div>
            </nav>

            {/* Privacy and Terms Links */}
            <div>
                <Link
                    to="https://sites.google.com/view/privacynousgym?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Πολιτική Απορρήτου
                </Link>
                {" | "}
                <Link
                    to="https://sites.google.com/view/termsnousgym?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Όροι και Προϋποθέσεις
                </Link>
            </div>
        </footer>
    );
};
