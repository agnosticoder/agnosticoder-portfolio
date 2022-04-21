import Project, { ProjectCardProps } from './ProjectCard';
import getGithubRepos from '../lib/getGithubRepos';
import { useEffect, useState } from 'react';
import { createClient, PhotosWithTotalResults } from 'pexels';

const isPhotosWithTotalResults = (photos: any): photos is PhotosWithTotalResults => {
    return 'total_results' in photos;
};

const client = createClient('563492ad6f91700001000001ee065894650840b4b8f0a239581ad259');

const isPorject = (project: any): project is ProjectCardProps => {
    return project.name || project.description || project.link;
};

const App = () => {
    const [projects, setProjects] = useState<ProjectCardProps[]>([]);

    //Todo: make this more maintainable
    useEffect(() => {
        getGithubRepos().then((projects) => {
            let temp = projects;
            client.photos.search({ query: 'nature', page: 2, per_page: temp.length }).then((photos) => {
                if (isPhotosWithTotalResults(photos)) {
                    const photosUrls = photos.photos.map((photo) => photo.src.large2x);
                    if (photosUrls.length === temp.length) {
                        temp = temp.map((project:ProjectCardProps, index:number) => {
                            return {
                                ...project,
                                thumbnail: photosUrls[index],
                            };
                        });
                        console.log(temp);
                        setProjects(temp);
                    }
                }
            });
            setProjects(projects.filter((project: any) => isPorject(project)));
        });
    }, []);

    return (
        <div className="text-stone-300">
            <div className='mb-32 mt-32'>
                <h1 className="text-3xl text-center mb-16 leading-loose tracking-wide">
                    I am <span className="text-yellow-500">Satinder Singh</span>, software developer from Toronto
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
