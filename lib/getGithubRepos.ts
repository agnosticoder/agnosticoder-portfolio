import { ProjectProps } from '../components/Project';

//Todo: make this more maintainable and manageable
//? maybe better to fetch all repos and filter them as needed
const getGithubRepos = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/agnosticoder/repos`);
        const data = await response.json();
        const repos = data.map((repo: any) => {
            return {
                name: repo.name,
                description: repo.description,
                link: repo.homepage,
                url: repo.html_url,
                language: repo.language,
                stars: repo.stargazers_count,
                forks: repo.forks,
                issues: repo.open_issues,
                updated: repo.updated_at,
                created: repo.created_at,
            };
        });
        return repos;
    } catch (err) {
        console.log({ err });
    }
};

export default getGithubRepos;
