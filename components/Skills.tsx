import Link from "next/link";
import { FaCogs } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
import { IoDownloadOutline } from "react-icons/io5";


interface Skill {
    skill: string;
}

interface SkillCard {
    type: string;
    skills: Skill[];
}

interface SkillsData {
    skill_card_1: SkillCard;
    skill_card_2: SkillCard;
    skill_card_3: SkillCard;
    skill_resume_url: string;
    skill_github_url: string;
}

interface SkillsProps {
    skillsData: SkillsData;
}

const Skills: React.FC<SkillsProps> = ({ skillsData }) => {
    const { skill_card_1, skill_card_2, skill_card_3, skill_resume_url, skill_github_url } = skillsData;

    return (
        <div id="skills" className="section_container font-body">
            <h1 className="section_headline">Skills</h1>

            <hr className="section_hr" />

            <div className="skill_download" >
                <a href="SMontelongo_Resume_2023.pdf" target="_blank" className="skill_href">
                    <h4 className="skill_h4">Download Resume</h4>
                    <IoDownloadOutline size="25" />
                </a>
            </div>

            <div className="skills_container">
                <div className="skill_container">
                    <FiDatabase size="30" className="text-gray-800" />
                    <h2>{skill_card_1.type}</h2>
                    <hr className="skill_hr" />
                    <ul className="skill_col">
                        {skill_card_1.skills.map((skill, index) => (
                            <li key={index}>{skill.skill}</li>
                        ))}
                    </ul>
                </div>

                <div className="skill_container">
                    <HiOutlineCode size={30} className="text-gray-800" />
                    <h2 className="font-semibold lg:text-sm pt-3">{skill_card_2.type}</h2>
                    <hr className="skill_hr" />
                    <ul className="skill_col">
                        {skill_card_2.skills.map((skill, index) => (
                            <li key={index}>{skill.skill}</li>
                        ))}
                    </ul>
                </div>

                <div className="skill_container">
                    <FaCogs size={30} className="text-gray-800" />
                    <h2 className="font-semibold lg:text-sm pt-3">{skill_card_3.type}</h2>
                    <hr className="skill_hr" />
                    <ul className="skill_col">
                        {skill_card_3.skills.map((skill, index) => (
                            <li key={index}>{skill.skill}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="skill_footnote">
                <Link href={skill_github_url} target="_blank" rel="noopener noreferrer">This site was built using Next.js, Typescript, Django REST Framework.</Link>
            </div>

        </div>
    )
}

export default Skills;
