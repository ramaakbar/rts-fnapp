import { Child } from '../models/Post';
import axios from 'axios';
import { useQuery } from 'react-query';

const getPost = async (inputPost: string): Promise<Child[]> => {
  const { data } = await axios.get(
    `https://www.reddit.com/r/${inputPost}.json`
  );

  return data.data.children;
};

export default function usePosts(inputPost: string) {
  return useQuery(['post', inputPost], () => getPost(inputPost), {
    enabled: false,
  });
}
