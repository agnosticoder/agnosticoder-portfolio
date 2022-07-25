import Project from './ProjectCard';
import { IndexProps } from '../pages';

const App = ({projects}: IndexProps) => {


    return (
        <div className="text-stone-300">
            <div className="mb-16 sm:mb-32 mt-20">
                <h1 className="text-2xl sm:text-3xl font-light text-center mb-16 leading-relaxed sm:leading-loose tracking-wide">
                    Hi 👋🏽, I am <span className="text-yellow-600">Satinder Singh</span>, a self-taught software developer based in Toronto and I like to build stuff. See my work below.
                </h1>
            </div>
            <div className='text-stone-300/70 text-center italic text-sm border-b-[1px] border-stone-300/30'>
                Projects
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
                        topics={project.topics}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
