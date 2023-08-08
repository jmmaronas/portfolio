import './skills.css'
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaSass, FaSquareGit, FaSquareGithub, FaSquareJs } from "react-icons/fa6";


function Skills() {
    return (
        <div id='skills' className='container-fluid'>
            <h1 className='text-center my-5'>Skills</h1>
            <ul className='d-flex gap-5 justify-content-around flex-wrap my-5'>
                <li><FaHtml5 className='icons' id='html' />HTML</li>
                <li><FaCss3Alt className='icons' id='css' />CSS</li>
                <li><FaSass className='icons' id='sass' />SASS</li>
                <li><FaReact className='icons' id='react' />React Js</li>
                <li ><FaNodeJs className='icons' id='node' />Node Js </li>
                <li ><FaSquareJs className='icons rounded rounded-3' id='js' />Javascript Vanilla</li>
                <li ><FaSquareGit className='icons' id='git' />Git</li>
                <li><FaSquareGithub className='icons' id='git-hub' />Git Hub</li>
            </ul>
        </div>
    );
}

export default Skills;