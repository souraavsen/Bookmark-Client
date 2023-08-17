import React from "react";
import { BookmarkT } from "../../modules/Dashboard/types";

type BookmarkCardPropsT = { bookmark: BookmarkT };

const BookmarkCard: React.FC<BookmarkCardPropsT> = ({ bookmark }) => {
  return (
    <div>
      <a href={bookmark.url} target='_blank' className='text-gray-900 '>
        <div className='rounded shadow'>
          <img
            className='w-full'
            src='https://v1.tailwindcss.com/img/card-top.jpg'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{bookmark.title}</div>
            <p className='text-gray-700 text-base'>{bookmark.url}</p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #{bookmark.category}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BookmarkCard;
