import { ReactNode } from "react";

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
    <blockquote className="font-light text-stone-400 text-base border-l-4 border-stone-700 pl-8 mb-2 rounded">{children}</blockquote>
);

const Code = ({ children, ...rest }: { children: string }) => (
    <code {...rest} className="text-base bg-stone-600 p-[1px] rounded">{children}</code>
);

const Anchor = ({ children, ...rest }: { children: string }) => (
    <a {...rest} className="text-base hover:underline text-blue-400">{children}</a>
);

const Paragraph = ({ children, ...rest }: { children: string }) => (
    <p {...rest} className="text-base mb-4">{children}</p>
);

const Pre = ({ children, ...rest }: { children: string }) => (
    <div className="mb-4">
        <pre {...rest} className="">{children}</pre>
    </div>
);

const Image = ({ ...rest }: { src: string }) => (
    <p className="mb-4">
        <img {...rest}/>
    </p>
);

const Hr = () => (
    <hr className="border-t-2 border-stone-300 mb-6 mt-6"/>
);

const MDXComponents = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    strong: Strong,
    em: Italic,
    blockquote: Blockquote,
    code: Code,
    a: Anchor,
    p: Paragraph,
    pre: Pre,
    img: Image,
    hr: Hr
};

export default MDXComponents;