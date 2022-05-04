import {octokit} from './octokit';

//Todo: may need to refactor, look at octokit docs for fetching readmes
const getReadmes = async () => {
    try {
        const response = await octokit.request('GET /repos/agnosticoder/next-mdx-notes-app/contents/README.md', {
            owner: 'agnosticoder',
            repo: 'next-mdx-notes-app',
        });

        console.log('response', response);
        console.log(Buffer.from(response.data.content, 'base64').toString());
    } catch (err) {
        console.warn({ err });
    }
};

export default getReadmes;
