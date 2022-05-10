import { GetServerSideProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import MDXComponents from "../components/MDXComponents";
import { aboutMe } from "../db/aboutMe";

interface AboutMeProps{
    mdxSource: MDXRemoteSerializeResult;
}

const AboutMe = ({mdxSource}:AboutMeProps) => {

    return (
        <div>
            <h1 className="text-xl font-bold font mb-4 text-stone-300/70 text-center">About me</h1>
            <div className="bg-stone-800/40 mt-6 mb-12 p-2 pt-4 pb-4 readme rounded">
                <MDXRemote {...mdxSource} components={MDXComponents as any} />
            </div>
        </div>
    );
}

export default AboutMe;

export const getServerSideProps: GetServerSideProps = async () => {

    const mdxSource = await serialize(aboutMe);

    return {
        props: {
            mdxSource: JSON.parse(JSON.stringify(mdxSource)),
        },
    }
}