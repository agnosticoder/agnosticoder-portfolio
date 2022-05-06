import {octokit} from './octokit';

//Todo: may need to refactor, look at octokit docs for fetching readmes
const getReadme = async (repoName: string) => {
    try {
        const response = await octokit.request(`GET /repos/agnosticoder/${repoName}/contents/README.md`, {
            owner: 'agnosticoder',
            repo: 'next-mdx-notes-app',
        });

        console.log('response', response);
        console.log(Buffer.from(response.data.content, 'base64').toString());
        return Buffer.from(response.data.content, 'base64').toString();
    } catch (err) {
        console.warn({ err });
    }
};

export default getReadme;
