import mdxString from '../db/mdxString';
import { serialize } from 'next-mdx-remote/serialize';

interface GetBundledMDXProps {
    source?: string;
}

const getMDXSource = async ({ source = mdxString }: GetBundledMDXProps) => {
    console.log('source', source);
    const mdxSource = await serialize(source);
    return mdxSource;
};

export default getMDXSource;
