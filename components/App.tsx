import Project, { ProjectCardProps } from './ProjectCard';
import { useEffect, useState } from 'react';
import getReadmes from '../lib/getReadmes';
import getProjects from '../lib/getProjects';

const App = () => {
    const [projects, setProjects] = useState<ProjectCardProps[]>([]);

    useEffect(() => {
        // getReadmes();
        getProjects()
            .then((projects) => setProjects(projects))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="text-stone-300">
            <div className="mb-32 mt-32">
                <h1 className="text-3xl text-center mb-16 leading-loose tracking-wide">
                    I am <span className="text-yellow-500">Satinder Singh</span>, software developer from Toronto,
                    Canada. I like to play with Typescript, Next.js, Node.js, Prisma, Tailwind CSS and more ...
                </h1>
            </div>
            <div className="text-lg flex flex-col items-center mt-10">
                {projects.map((project, index) => (
                    <Project
                        index={index}
                        key={index}
                        name={project.name}
                        description={project.description}
                        link={project.link}
                        url={project.url}
                        thumbnail={project.thumbnail}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
