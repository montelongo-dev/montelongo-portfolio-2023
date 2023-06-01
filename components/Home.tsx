import Image from "next/image";
import React from "react";


interface HomeData {
    name: string;
    title: string;
}

interface HomeProps {
    homeData: HomeData
}

const Home: React.FC<HomeProps> = ({ homeData }) => {
    const { name, title } = homeData

    return (
        <div id="home" className="home_container font-header">
            <h1 className="home_header">
                {`<${name}/>`}
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
                {`<${title}/>`}
            </h2>
        </div>
    )
}

export default Home;
