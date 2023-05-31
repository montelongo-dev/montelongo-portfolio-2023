import React from "react";

interface AboutProps {
    data: {
        about: {
            about_bold_copy: string;
            about_reg_copy: string
        }[];
    }
}

const About: React.FC<AboutProps> = ({ data }) => {
    const paragraphs = data.about[0].about_reg_copy.split('\n');
    return (
        <div id="about" className="section_container font-body">
            <h1 className="section_headline">About</h1>
            <hr className="section_hr" />
            <h1 className="about_h1">
                {data.about[0].about_bold_copy}
            </h1>
            {paragraphs.map((paragraph) => (
                <h2 className="about_h2">{paragraph}</h2>
            ))}
        </div>
    )
}

export default About;
