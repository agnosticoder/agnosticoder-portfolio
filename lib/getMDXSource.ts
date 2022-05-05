import mdxString from '../db/mdxString';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';

interface GetBundledMDXProps {
    source?: string;
}

const getMDXSource = async ({ source = mdxString }: GetBundledMDXProps) => {
    console.log('source', source);
    const mdxSource = await serialize(source, {parseFrontmatter: true, mdxOptions: {remarkPlugins: [emoji, remarkGfm]}});
    return mdxSource;
};

export default getMDXSource;
