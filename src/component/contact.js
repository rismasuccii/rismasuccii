import React from "react";

function Contact() {
    return (
        <section className="contact">
            <h2>Kontak Kami</h2>
            <p>
                Email: <a href="mailto:info@rismasuci.com">info@rismasuci.com</a>
            </p>
            <p>
                Telepon: <a href="tel:+6283104243770">+62 831-0424-3770</a>
            </p>
            <div className="map">
                <iframe
                    title="Lokasi Kopi Jotos"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.882462007292!2d114.36809231106328!3d-8.214573991783666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1452d6d15a447%3A0x4171b695db29d8c2!2skopi%20jotos!5e0!3m2!1sid!2sid!4v1733251483394!5m2!1sid!2sid"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}

export default Contact;