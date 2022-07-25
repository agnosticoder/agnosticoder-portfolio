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
            <div className='mx-20 text-center italic text-sm'>Many projects are on the way, please visit my <a className='text-yellow-500' href='https://github.com/agnosticoder' target='_blank' rel='noopener noreferrer'>github</a> account to see the projects I am working on including web3 projects</div>
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