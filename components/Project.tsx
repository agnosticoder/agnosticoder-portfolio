export interface ProjectProps {
    name: string,
    description: string | null,
    link: string | null
}

const Project = ({ name, description, link }: ProjectProps) => {
    const onNext = () => {
        console.log('Working on:', name);
    };

    return (
        <div className="mt-2 mb-2 bg-slate-400 rounded p-2">
            <h1>{name}</h1>
            {description && <h2>{description}</h2>}
            {link && (
                <a target={name} href={link}>
                    Visit
                </a>
            )}
            <div>
                <button className='bg-slate-800 text-slate-100 rounded p-1' onClick={onNext}>Work on it!</button>
            </div>
        </div>
    );
};

export default Project;