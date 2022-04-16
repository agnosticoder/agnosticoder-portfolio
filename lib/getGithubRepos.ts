import { ProjectProps } from '../components/Project';

//Todo: make this more maintainable and manageable
//? maybe better to fetch all repos and filter them as needed
const getGithubRepos = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/agnosticoder/repos?per_page=100`);
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

        console.log('repos', repos);

        // filter out repos that are not in the list of projects
        //1 react-binary-to-decimal-convertor
        //2 react-border-radius-previewer
        //3 react-calculator 
        //4 react-cause-effect 
        //5 react-coundown-timer 
        //6 react-csv-to-json-and-vice-versa 
        //7 react-dynamic-css-variable 
        //8 react-github-status 
        //9 react-hello-app 
        //10 next-iot-mailbox-simulator 
        //11 next-mint-username-nft
        //12 next-mdx-notes-app 
        //13 next-wave-portal-hardhat-web3 
        //14,15 solana-web3-front-end   &&  solana-web3-back-end 
        //16, 17 fitness-app-next-frontend && fitness-app-backend 
        //18 react-firebase-authentication
        const projects = ['react-binary-to-decimal-convertor', 'react-border-radius-previewer', 'react-calculator', 'react-cause-effect', 'react-coundown-timer', 'react-dynamic-css-variable', 'react-github-status', 'react-hello-app', 'next-iot-mailbox-simulator', 'next-mint-username-nft', 'next-mdx-notes-app', 'next-wave-portal-hardhat-web3', 'solana-web3-front-end', 'solana-web3-back-end', 'fitness-app-next-frontend', 'fitness-app-backend', 'react-firebase-authentication', 'react-csv-to-json-and-vice-versa'];

        const filteredRepos = repos.filter((repo: ProjectProps) => {
            return projects.includes(repo.name);
        });

        console.log('filteredRepos', filteredRepos.length);

        return filteredRepos;
    } catch (err) {
        console.log({ err });
    }
};

export default getGithubRepos;
