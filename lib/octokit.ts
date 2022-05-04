import { Octokit } from '@octokit/core';

const authKey = process.env.NEXT_PUBLIC_GITHUB_API_KEY || '';

export const octokit = new Octokit({auth: authKey});