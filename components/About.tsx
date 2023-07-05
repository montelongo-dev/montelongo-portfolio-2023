import React from "react";
import Image from "next/image";


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
            <div className="about_image_header_container">
                <h1 className="about_header_copy">
                    {about_bold_copy}
                </h1>
                <div className="about_image">
                    <Image
                        src="/images/sam_portfolio.jpg"
                        width={375}
                        height={275}
                        alt="Sam Montelongo"
                        priority
                        quality={100}
                        unoptimized={true}
                    />
                </div>
            </div>
            {paragraphs.map((paragraph, index) => (
                <p className="about_h2" key={index}>{paragraph}</p>
            ))}
        </div>
    )
}

export default About;
