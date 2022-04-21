const getGithubRepo = async (repoName: string) => {
    try {
        const response = await fetch(`https://api.github.com/repos/agnosticoder/${repoName}`);
        const data = await response.json();

        if(data.message === 'Not Found') {
            return null;
        }

        const repo = {
            name: data.name,
            description: data.description,
            link: data.homepage,
            url: data.html_url,
            language: data.language,
            stars: data.stargazers_count,
            forks: data.forks,
            issues: data.open_issues,
            updated: data.updated_at,
            created: data.created_at,
        };

        return repo;
    } catch (err) {
        console.log({ err });
    }
}

export default getGithubRepo;