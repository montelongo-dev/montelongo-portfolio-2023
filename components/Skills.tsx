import Link from "next/link";
import { FaCogs } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
import { IoDownloadOutline } from "react-icons/io5";


export default function Skills() {
    return (
        <div id="skills" className="section_container font-body">
            <h1 className="section_headline">Skills</h1>

            <hr className="section_hr" />

            <div className="skill_download" >
                <Link className="skill_href" href="https://docs.google.com/document/d/1BICUnFTkCIH9-R1BilRKAlT4PCI128aKCA1UUGcn7Ps/" target="_blank" rel="noopener noreferrer">
                    <h4 className="skill_h4">Download Resume</h4>
                    <IoDownloadOutline size="25" />
                </Link>
            </div>

            <div className="skills_container">
                <div className="skill_container">
                    <FiDatabase size="30" className="text-gray-600" />
                    <h2 className="font-semibold lg:text-sm pt-3">BACKEND</h2>
                    <hr className="skill_hr" />
                    <div className="skill_col">
                        <p>Python</p>
                        <p>Django</p>
                        <p>DRF</p>
                        <p>Wagtail CMS</p>
                        <p>SQL Databases</p>
                        <p>PHP</p>
                    </div>
                </div>

                <div className="skill_container">
                    <HiOutlineCode size={30} className="text-gray-600" />
                    <h2 className="font-semibold lg:text-sm pt-3">FRONT END</h2>
                    <hr className="skill_hr" />
                    <div className="skill_col">
                        <p>Javascript</p>
                        <p>Typescript</p>
                        <p>React</p>
                        <p>Next.js</p>
                        <p>jQuery</p>
                        <p>HTML</p>
                        <p>CSS</p>
                    </div>
                </div>

                <div className="skill_container">
                    <FaCogs size={30} className="text-gray-600" />
                    <h2 className="font-semibold lg:text-sm pt-3">DEV OPS</h2>
                    <hr className="skill_hr" />
                    <div className="skill_col">
                        <p>Linux CLI</p>
                        <p>Bash Scripting</p>
                        <p>Docker</p>
                        <p>Heroku</p>
                        <p>AWS</p>
                        <p>Git</p>
                    </div>
                </div>
            </div>

            <div className="skill_footnote">
                <Link href="https://github.com/montelongo-dev/" target="_blank" rel="noopener noreferrer">This site was built using Next.js, Django REST Framework and Tailwind CSS.</Link>
            </div>

        </div>

    )
}