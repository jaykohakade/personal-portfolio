import React from 'react'
import './project.css';
import img1 from '../../asest/project-one.png';

const projects = [
    {
        id: 1,
        org: "Thinking-Minds - 2025",
        title: "Thinking-Minds",
        platform: "Online Learing Platform",
        description: "An e-learning platform is a web-based system that provides online courses, tutorials, and interactive learning resources. Built using React.js, Node.js, and MySQL, it enables users to access content, track progress, and participate in quizzes or live sessions. This technology stack ensures a fast, responsive interface with secure data handling and scalable performance.",
        image: img1,
        demoLink: "https://your-demo-link.com"
    },
    { id: 2, title: "Project Two" },
    { id: 3, title: "Project Three" },
];

function Project() {
    return (


        <div className="container">



            <div className='project-heading'>
                <p>Real World Result</p>
                <h5> Featured Projects </h5>
                <p>Here are some of my projects that I have worked on</p>

            </div>
            {projects.map((project) => (
                <div className="card" key={project.id}>

                    {/* Image */}
                    <img src={project.image} alt={project.title} />


                    {/* Content */}
                    <div className="overlay">
                        <h5>{project.org}</h5>
                        <h2>{project.title}</h2>
                        <p>{project.platform}</p>
                        <p className='p1'>{project.description}</p>
                        {/* Button */}
                        <a href={project.demoLink} target="_blank" rel="noreferrer">
                            <button>Live Demo</button>
                        </a>
                    </div>

                </div>
            ))}
        </div>


    );
}


export default Project