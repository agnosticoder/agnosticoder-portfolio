import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import ProjectCard, { ProjectCardProps } from "../../components/ProjectCard";
import getGithubRepo from "../../lib/getGithubRepo";

const Project = ({name, description, link, url, thumbnail, ...rest}:ProjectCardProps) => {

    return (
        <div className="text-lg">
            {/* <ProjectCard name={name} description={description} link={link} url={url} thumbnail={thumbnail}/> */}
        </div>
    );
}

export default Project;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { name } = query as { name: string };

    // if no name is provided, return 404
    if (!name) {
        return {
            notFound: true,
        };
    }

    const project = await getGithubRepo(name);
    // if no project is found, return 404
    if(!project) {
        return {
            notFound: true,
        };
    }

    // if project is found, return it
    return {
        props: {
            ...project
        },
    };
};