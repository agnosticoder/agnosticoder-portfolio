import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { HTMLAttributes, useMemo } from 'react';
import { ProjectCardProps } from '../../components/ProjectCard';
import getGithubRepo from '../../lib/getGithubRepo';
import Image from 'next/image';
import getMDXSource from '../../lib/getMDXSource';
import MDXComponents from '../../components/MDXComponents';
import { MDXRemote } from 'next-mdx-remote';

const Ins = ({children, ...rest}:{children: string}) => (
    <div style={{fontSize: 'small'}} {...rest}>Yo</div>
);

const Project = ({ name, description, link, url, thumbnail, mdxSource, ...rest }: ProjectCardProps) => {

    return (
        <div className="text-lg">
            <h1 className="text-2xl mb-4 font-bold">{description}</h1>
            <div className="w-full h-52 sm:h-96 relative">
                <Image
                    className="rounded-xl"
                    src={thumbnail || ''}
                    layout="fill"
                    objectFit="cover"
                    alt="Project Thumbnail"
                />
            </div>
            <ul>
                <li>{name}</li>
                <li>{link}</li>
                <li>{url}</li>
            </ul>
            {mdxSource && (
                <div>
                    {/* <h1>{mdxSource?.frontmatter?.title}</h1>
                    <p>{mdxSource?.frontmatter?.descriptions}</p> */}
                    <div className="border-2 border-stone-300 mt-6 mb-96 p-2">
                        <MDXRemote {...mdxSource}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const mdxSource = await getMDXSource({});
    const { name, thumbnail } = query as { name: string; thumbnail: string };

    // if no name is provided, return 404
    if (!name) {
        return {
            notFound: true,
        };
    }

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
