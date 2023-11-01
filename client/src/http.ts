import { create } from 'apisauce';
import Post from './components/Posts/Post';

const api = create({
    baseURL: 'http://localhost:3000',
    headers: { Accept: 'application/json' },
});
const getPosts = async () =>
    await api.get('/posts').then(async (response) => {
        const data = (await response.data) as Post[];
        const formattedData: Post[] = [];
        for (const post of data) {
            formattedData.push(new Post(post));
        }
        return formattedData;
    });
export { getPosts };
