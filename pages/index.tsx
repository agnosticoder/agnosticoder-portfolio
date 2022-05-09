import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import App from '../components/App';
import { ProjectCardProps } from '../components/ProjectCard';
import getProjects from '../lib/getProjects';

export interface IndexProps{
    projects: ProjectCardProps[];
}

const Home = ({projects}:IndexProps) => {

    return (
        <>
            <App projects={projects}/>
        </>
    );
};

export default Home;


export const getStaticProps: GetStaticProps = async () => {
    try {
        const projects = await getProjects()
        return {
            props: {
                projects
            }
        }
    } catch (err) {
        console.log({ err });
        return {
            notFound: true
        }
    }
}