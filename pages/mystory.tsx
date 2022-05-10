import { GetServerSideProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Image from "next/image";
import { Photo } from "pexels";
import { isPhotos } from "pexels/dist/typeCheckers";
import { useEffect, useState } from "react";
import MDXComponents from "../components/MDXComponents";
import { myStory } from '../db/myStory';
import { pexelClient } from '../lib/pexelsClient';

const isPhoto = (photo: any): photo is Photo => {
    return "src" in photo && "large2x" in photo.src;
}

const getRandomPhotoUrl = async () => {
    try {
        const photo = await pexelClient.photos.show({id: '1995842'});
        if (isPhoto(photo)) {
            return photo.src.large2x;
        }
    } catch (err) {
        console.log('err:', err);
    }
}

interface MyStoryProps{
    mdxSource: MDXRemoteSerializeResult;
}

const MyStory = ({ mdxSource }: MyStoryProps) => {
    const [thumbnail, setThumbnail] = useState('');

    useEffect(() => {
        getRandomPhotoUrl().then(url => {
            if (url) {
                setThumbnail(url);
            }
        }).catch(err => {
            console.log('err:', err);
        });
    }, []);

    return (
        <div>
            <h1 className="text-stone-300/70 text-xl text-center font-semibold sm:px-12 mb-8">My Story</h1>
            <div className="w-full h-52 sm:h-96 relative mb-4">
                {thumbnail && (
                    <Image
                        className="rounded-xl"
                        src={thumbnail}
                        layout="fill"
                        objectFit="cover"
                        alt="Project Thumbnail"
                        priority
                    />)}
            </div>
            <div className="bg-stone-800/40 mt-6 mb-12 p-2 pt-4 pb-4 readme rounded">
                <MDXRemote {...mdxSource} components={MDXComponents as any} />
            </div>
        </div>
    );
};

export default MyStory;

export const getServerSideProps: GetServerSideProps = async () => {

    const mdxSource = await serialize(myStory);

    return {
        props: {
            mdxSource: JSON.parse(JSON.stringify(mdxSource)),
        },
    }
}