import React from "react";

interface ContactData {
    contact_copy: string;
}

interface ContactProps {
    contactData: ContactData
}

const Contact: React.FC<ContactProps> = ({ contactData }) => {

    return (
        <div id="contact" className="section_container font-body">
            <h1 className="section_headline">CONTACT</h1>

            <hr className="section_hr" />

            <h2 className="contact_h2">
                {contactData.contact_copy}
            </h2>

            <form name="contact" action="/contact-success" method="POST" className="contact_form_container" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <div className="contact_form_div">
                    <label htmlFor="name" className="block mb-2 text-sm">
                        Name
                    </label>
                    <input type="text" name="name" required className="input_class" />
                </div>

                <div className="contact_form_div">
                    <label htmlFor="email" className="block mb-2 text-sm">
                        Email Address
                    </label>
                    <input type="email" name="email" required className="input_class" />
                </div>

                <div className="contact_form_div">
                    <label htmlFor="message" className="block mb-2 text-sm">
                        Message
                    </label>

                    <textarea
                        rows={5}
                        name="message"
                        className="input_class"
                        required
                    ></textarea>
                </div>

                <div className="mb-6">
                    <button
                        type="submit"
                        className="contact_button"
                    >
                        Send
                    </button>
                </div>
            </form>

        </div>
    );
}

export default Contact;
