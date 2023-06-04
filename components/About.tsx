import React from "react";


interface AboutData {
    about_bold_copy: string;
    about_reg_copy: string;
}

interface AboutProps {
    aboutData: AboutData;
}

const About: React.FC<AboutProps> = ({ aboutData }) => {
    const { about_bold_copy, about_reg_copy } = aboutData;
    const paragraphs = about_reg_copy.split('\n');

    return (
        <div id="about" className="section_container font-body">
            <h1 className="section_headline">About</h1>
            <hr className="section_hr" />
            <h1 className="about_h1">
                {about_bold_copy}
            </h1>
            {paragraphs.map((paragraph, index) => (
                <h2 className="about_h2" key={index }>{paragraph}</h2>
            ))}
        </div>
    )
}

export default About;
