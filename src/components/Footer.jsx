import '../styles/Footer.css';

export default function Footer () {
    return (
        <div className="footer">
            <div>
              <label htmlFor="contact-number"><i class="fa-solid fa-phone"></i>Toll Free: 1800 200 1234</label>
            </div>
            <div>
                <a href="https://www.facebook.com/cripumps"><i class="fa-brands fa-facebook"></i> www.facebook.com/cripumps</a>
            </div>
            <div>
                <a href="https://www.crigroups.com"><i class="fa-solid fa-globe"></i> www.crigroups.com</a>
            </div>
        </div>
    );
}