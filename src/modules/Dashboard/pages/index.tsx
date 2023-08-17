import { Input } from "antd";
import React, { useEffect, useState } from "react";
import BookmarkCard from "../../../components/Cards/BookmarkCard";
import { fetchBookmarks } from "../../../services/bookmarks.service";
import { BookmarkT } from "../types";

const { Search } = Input;

const Dashboard: React.FC<{}> = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const onSearch = (value: string) => console.log(value);

  useEffect(() => {
    (async () => {
      const bookmarksData = await fetchBookmarks();
      if (bookmarksData?.status === 200) {
        setBookmarks(bookmarksData.data);
      }
    })();
  }, []);

  return (
    <div className='w-11/12 mx-auto flex gap-8'>
      <div className='w-9/12 my-10'>
        <div className='flex items-center justify-between'>
          <div className='my-6 text-xl font-semibold text-gray-700'>
            All Bookmarks
          </div>
          <Search
            placeholder='Search with title'
            allowClear
            onSearch={onSearch}
            style={{ width: 304 }}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-4 2xl:gap-6'>
          {bookmarks?.map((bookmark: BookmarkT, i: number) => (
            <div key={i}>
              <BookmarkCard bookmark={bookmark} />
            </div>
          ))}
        </div>
      </div>

      <div className='w-60 h-full pt-10 fixed right-1 bg-stone-50 py-6 px-5'>
        <div className='my-6 text-xl font-semibold text-gray-700'>
          Filter with categories
        </div>
        <div className='flex flex-wrap gap-2 overflow-y-scroll'>
          <div className="font-semibold text-sm text-gray-700 italic px-2 bg-gray-200 cursor-pointer rounded-full">#Web</div>
          <div className="font-semibold text-sm text-gray-700 italic px-2 bg-gray-200 cursor-pointer rounded-full">#Web</div>
          <div className="font-semibold text-sm text-gray-700 italic px-2 bg-gray-200 cursor-pointer rounded-full">#Web</div>
          <div className="font-semibold text-sm text-gray-700 italic px-2 bg-gray-200 cursor-pointer rounded-full">#Web</div>
          <div className="font-semibold text-sm text-gray-700 italic px-2 bg-gray-200 cursor-pointer rounded-full">#Web</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
