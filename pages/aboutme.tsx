import Link from "next/link";

const AboutMe = () => {
    return (
        <div>
            <h2>Write your brief description that leads to full story for those who are more interested in knowing me</h2>
            <Link href='mystory'>
                <a className="text-yellow-500/80 hover:text-yellow-500">My Story</a>
            </Link>
        </div>
    );
}

export default AboutMe;