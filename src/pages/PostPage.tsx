import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import usePosts from '../hooks/usePosts';
import { Child } from '../models/Post';
import { BiUpvote } from 'react-icons/bi';
import moment from 'moment';
import { BsChatLeft } from 'react-icons/bs';

const queryClient = new QueryClient();

const Posts = () => {
  const [inputPost, setInputPost] = useState('');
  const [query, setQuery] = useState('');

  const { data, isLoading, isError, isFetching, refetch } = usePosts(query);

  useEffect(() => {
    if (query !== '') {
      refetch();
    }
  }, [query, refetch]);

  const submitSearchPost = () => {
    if (inputPost.length) {
      setQuery(inputPost);

      setInputPost('');
    }
  };

  const onHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPost(e.target.value);
  };

  return (
    <div className='mx-auto mt-8 mb-4 max-w-3xl px-4'>
      <h2 className='text-4xl font-extrabold'>Search Subreddit Post </h2>

      <div className='mt-5 flex w-full justify-between gap-3'>
        <input
          type='text'
          className='w-11/12 rounded-lg   bg-gray-50 px-4 py-2 transition-all duration-500  focus:ring-blue-500 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
          placeholder='Search subreddit'
          value={inputPost}
          onChange={onHandle}
        />

        <button
          className='flex rounded-md bg-blue-600 px-4 py-2 text-white transition-all duration-500 hover:bg-blue-700'
          onClick={submitSearchPost}
        >
          Submit
        </button>
      </div>
      <div className='mt-5 flex flex-col gap-4 '>
        <div className='text-lg font-semibold'>r/{query}</div>

        {isLoading || isFetching ? (
          <svg
            role='status'
            className='mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600'
            viewBox='0 0 100 101'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
              fill='currentColor'
            />
            <path
              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
              fill='currentFill'
            />
          </svg>
        ) : isError ? (
          <div className='text-bold font-medium'>
            Error: Subreddit not found
          </div>
        ) : (
          data?.map((dat, i) => <PostItem data={dat} key={i} />)
        )}
      </div>
    </div>
  );
};

export default function PostPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
}
function PostItem({ data }: { data: Child }) {
  // eslint-disable-next-line
  const [colors, setColors] = useState([
    'bg-rose-500',
    'bg-sky-500',
    'bg-emerald-500',
  ]);
  const [color, setColor] = useState<string>();

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [colors]);

  const convDate = (time: number | undefined): string => {
    let newDate = new Date(time! * 1000);
    return moment(newDate).fromNow();
  };

  return (
    <div className='flex flex-col gap-3 rounded-md border bg-gray-50 px-5 py-3 transition-all duration-500 hover:border hover:border-gray-400 dark:border-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:border dark:hover:border-gray-400'>
      <a href={`https://www.reddit.com${data.data?.permalink}`}>
        <div className=' text-sm'>
          Posted by u/{data.data?.author} {convDate(data.data?.created)}
        </div>

        <div className=''>
          {data.data?.link_flair_css_class ? (
            <>
              <span
                className={`mr-2 rounded-xl px-2 py-1 text-white ${color} text-sm`}
              >
                {data.data?.link_flair_css_class}
              </span>
            </>
          ) : (
            <></>
          )}
          <div className='inline text-lg font-bold'>{data.data?.title}</div>
        </div>
      </a>
      {data.data?.secure_media?.reddit_video?.fallback_url !== undefined ? (
        <video className='rounded-md ' controls>
          <source src={data.data?.secure_media?.reddit_video?.fallback_url} />
        </video>
      ) : (
        <img
          src={data.data?.url_overridden_by_dest}
          alt=''
          className='rounded-md'
        />
      )}
      <div className='text flex gap-4  text-sm font-medium'>
        <div className=' flex align-middle'>
          <BiUpvote className='m-auto mr-1 text-lg' /> {data.data?.ups} Upvotes
        </div>
        <div className=' flex align-middle'>
          <BsChatLeft className='m-auto mr-1' />
          {data.data?.num_comments} Comments
        </div>
      </div>
    </div>
  );
}
