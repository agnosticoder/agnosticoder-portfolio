export interface ProjectProps {
    name: string,
    description: string | null,
    link: string | null
}

const Project = ({name, description, link}: ProjectProps) => {
    return (
        <div className='mt-2 mb-2 bg-slate-400 rounded p-2'>
            <h1>{name}</h1>
            {description && <h2>{description}</h2>}
            {link && <a target={name} href={link}>Visit</a>}
        </div>
    );
}

export default Project;