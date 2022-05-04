import { MDXProviderComponentsProp } from "@mdx-js/react";

const Heading1 = ({ children }: { children: string }) => (
    <h1 className="text-4xl font-semibold mb-3">
        {children}
    </h1>
);

const Heading2 = ({ children }: { children: string }) => (
    <h1 className="text-3xl font-semibold mb-4">
        {children}
    </h1>
);

const Heading3 = ({ children }: { children: string }) => (
    <h1 className="text-2xl font-semibold mb-3">
        {children}
    </h1>
);

const Heading4 = ({ children }: { children: string }) => (
    <h1 className="text-xl font-semibold mb-2">
        {children}
    </h1>
);

const Heading5 = ({ children }: { children: string }) => (
    <h1 className="text-lg font-semibold mb-2">
        {children}
    </h1>
);

const Strong = ({ children }: { children: string }) => (
    <strong className="text-base font-semibold">{children}</strong>
);

const Italic = ({ children }: { children: string }) => (
    <em className="italic text-base">{children}</em>
);

const Blockquote = ({ children }: { children: string }) => (
    <blockquote className="bg-stone-800 font-light text-stone-400 text-base border-l-4 border-stone-700 pl-8 mb-2 rounded">{children}</blockquote>
);

const Code = ({ children, ...rest }: { children: string }) => (
    <code {...rest} className="text-base">{children}</code>
);

const Ins = ({ children, ...rest }: { children: string }) => (
    <ins {...rest} className="text-base">{children}</ins>
);

const MDXComponents:MDXProviderComponentsProp = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    strong: Strong,
    em: Italic,
    blockquote: Blockquote,
    ins: Ins,
    code: Code,
};

export default MDXComponents;