import { MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";

export interface ProjectCardProps {
    index: number,
    name: string,
    description: string | null,
    link: string | null
    url: string;
    thumbnail?: string;
    topics?: string[];
    mdxSource?: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ProjectCard = ({ index, name, description, link, url, thumbnail }: ProjectCardProps) => {
    const onNext = () => {
        console.log('Working on:', name);
    };

    return (
        <div
            className={`flex flex-col-reverse ${
                index % 2 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            } w-full sm:justify-between mb-40 gap-4 sm:gap-0`}
        >
            <div className={`${index % 2 ? 'sm:mr-10' : 'sm:ml-10 sm:flex sm:justify-end sm:text-right'}`}>
                <div className="flex flex-col h-full justify-center gap-2">
                    {/* <Link href={`project/${name}`}>
                        <a>
                            <h1 className="text-2xl font-bold mb-4">{name}</h1>
                        </a>
                    </Link> */}
                    {description ? (
                        <h2 className="text-xl">{description}</h2>
                    ) : (
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, consectetur.</h2>
                    )}
                    <div className={`flex gap-1 ${index % 2 ? '' : 'sm:justify-end'}`}>
                        {url && (
                            <div>
                                <a target={name} href={url}>
                                    <span className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                                        Gihub
                                    </span>
                                </a>
                            </div>
                        )}
                        {link ? (
                            <div>
                                <a target={name} href={link}>
                                    <span className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                                        Live Demo
                                    </span>
                                </a>
                            </div>
                        ) : (
                            <div>
                                <a href="#">
                                    <span className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                                        Live Demo
                                    </span>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                {/*//Todo: I need to work on below to supercharge my workflow */}
                {/* <div>
                <button className="bg-slate-800 text-slate-100 rounded p-1" onClick={onNext}>
                    Work on it!
                </button>
            </div> */}
            </div>
            <Link href={{
                pathname: '/project/[name]',
                query: {name, thumbnail}
            }}>
                <a>
                    <div className="w-full h-52 sm:w-80 sm:h-52 shrink-0">
                        {thumbnail && (
                            <div
                                style={{
                                    backgroundImage: `url(${thumbnail})`,
                                    height: '100%',
                                    width: '100%',
                                    backgroundSize: 'cover',
                                }}
                                className="rounded-xl"
                            ></div>
                        )}
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default ProjectCard;