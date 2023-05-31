import Image from "next/image";
import React from "react";


interface HomeProps {
    data: {
        home: {
            name: string;
            title: string;
        }[];
    }
}

const Home: React.FC<HomeProps> = ({ data }) => {
    return (
        <div id="home" className="home_container font-header">
            <h1 className="home_header">
                {`<${data.home[0].name}/>`}
            </h1>
            <div className="image_container">
                <Image
                    src="/images/mac_keyboard.png"
                    className="home_image"
                    width={200}
                    height={35}
                    alt="Mac keyboard"
                    priority
                    quality={100}
                    unoptimized={true}
                />
            </div>
            <h2 className="home_subhead">
                {`<${data.home[0].title}/>`}
            </h2>
        </div>
    )
}

export default Home;
