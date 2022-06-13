import moment from 'moment';
import { useEffect, useState } from 'react';
import { BiUpvote } from 'react-icons/bi';
import { BsChatLeft } from 'react-icons/bs';
import { Child } from '../models/Post';

export default function PostItem({ data }: { data: Child }) {
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
          <source
            src={data.data?.secure_media?.reddit_video?.fallback_url}
            type='video/mp4'
          />
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
