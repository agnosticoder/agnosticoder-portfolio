import mdxString from '../db/mdxString';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import emoji from 'remark-emoji';
import rehypeHighlight from 'rehype-highlight';

interface GetBundledMDXProps {
    source?: string;
}

const getMDXSource = async ({ source = mdxString }: GetBundledMDXProps) => {
    const mdxSource = await serialize(source, {parseFrontmatter: true, mdxOptions: {remarkPlugins: [emoji, remarkGfm], rehypePlugins: [rehypeHighlight]}});
    return mdxSource;
};

export default getMDXSource;
