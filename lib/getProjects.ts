import { PhotosWithTotalResults } from 'pexels';
import { ProjectCardProps } from '../components/ProjectCard';
import getGithubRepos from './getGithubRepos';
import { client } from './pexelsClient';

const isPhotosWithTotalResults = (photos: any): photos is PhotosWithTotalResults => {
    return 'total_results' in photos;
};

const getProjects = async () => {
    try {
        let projects = await getGithubRepos();
        const photos = await client.photos.search({
            query: 'animals',
            page: 6,
            per_page: projects.length,
            orientation: 'landscape',
            size: 'small',
        });

        if (isPhotosWithTotalResults(photos)) {
            const photosData = photos.photos.map((photo) => ({ thumbnail: photo.src.large, photoId: photo.id }));
            if (photosData.length === projects.length) {
                projects = projects.map((project: ProjectCardProps, index: number) => {
                    return {
                        ...project,
                        ...photosData[index],
                    };
                });
            }
        }
        return projects;
    } catch (err) {
        console.log({ err });
    }
};

export default getProjects;
