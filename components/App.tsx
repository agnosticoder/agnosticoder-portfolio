import Project, { ProjectProps } from "./Project";
import getGithubRepos from "../lib/getGithubRepos";
import { useEffect, useState } from "react";

const isPorject = (project: any): project is ProjectProps => {
    return project.name || project.description || project.link;
}

const App = () => {
    const [projects, setProjects] = useState<ProjectProps[]>([]);

    //Todo: make this more maintainable
    useEffect(() => {
        getGithubRepos().then(projects => {
            setProjects(projects.filter((project: any) => isPorject(project)));
        });
    }, []);

    return (
        <div className="text-lg">
            {projects.map((project, index) => (
                <Project key={index} name={project.name} description={project.description} link={project.link} />
            ))}
        </div>
    );
};

export default App;
