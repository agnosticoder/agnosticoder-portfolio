import { GetServerSideProps } from 'next';
import { ProjectCardProps } from '../../components/ProjectCard';
import getGithubRepo from '../../lib/getGithubRepo';
import Image from 'next/image';
import getMDXSource from '../../lib/getMDXSource';
import MDXComponents from '../../components/MDXComponents';
import { MDXRemote } from 'next-mdx-remote';
import getReadme from '../../lib/getReadme';

const Project = ({name, description, link, url, thumbnail, mdxSource, ...rest }: ProjectCardProps) => {
    console.log('link', link);

    return (
        <div className="text-lg mt-4">
            <h1 className="text-2xl mb-6 leading-loose">{description}</h1>
            <div className="w-full h-52 sm:h-96 relative mb-4">
                <Image
                    className="rounded-xl"
                    src={thumbnail || ''}
                    layout="fill"
                    objectFit="cover"
                    alt="Project Thumbnail"
                />
            </div>
            <div className='inline-flex gap-2 mb-16'>
                {url && (
                    <a target="_blank" rel="noopener noreferrer" href={url}>
                        <span className="inline-block bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                            Gihub
                        </span>
                    </a>
                )}
                {link ? (
                    <a target="_blank" rel="noopener noreferrer" href={`${link}`}>
                        <span className="inline-block bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                            Live Demo
                        </span>
                    </a>
                ) : (
                    // <a href="#">
                    //     <span className="inline-block bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
                    //         Live Demo
                    //     </span>
                    // </a>
                    null
                )}
            </div>
            <h2 className="text-xl font-bold mb-4 text-stone-300/70 text-center">Readme</h2>
            {mdxSource && (
                <div>
                    {/* //Todo: Figure out if I need frontmatter or not */}
                    {/* <h1>{mdxSource?.frontmatter?.title}</h1>
                    <p>{mdxSource?.frontmatter?.description}</p> */}
                    <div className="bg-stone-800/40 mb-12 p-2 pt-4 pb-4 readme rounded">
                        <MDXRemote {...mdxSource} components={MDXComponents as any} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { name, thumbnail } = query as { name: string; thumbnail: string };


    // if no name is provided, return 404
    if (!name) {
        return {
            notFound: true,
        };
    }

    console.log('name:', name);
    const readme = await getReadme(name);
    const mdxSource = await getMDXSource({source: readme});

    const project = await getGithubRepo(name);
    // if no project is found, return 404
    if (!project) {
        return {
            notFound: true,
        };
    }

    // if project is found, return it
    return {
        props: {
            ...project,
            thumbnail,
            mdxSource: JSON.parse(JSON.stringify(mdxSource)),
        },
    };
};
