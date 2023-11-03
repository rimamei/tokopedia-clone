import React, { useEffect, useState } from 'react';
import * as Go from 'react-icons/go';
import data from '@/json/data';
import { Link } from 'react-router-dom';

const Trending = (props) => {
  const { outerClassName } = props;
  const { trending } = data;
  const [visible, setVisible] = useState(false);
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [rank, setRank] = useState(1);

  useEffect(() => {
    const intervalTrending = setInterval(() => {
      setCurrentKeyword((keyword) => {
        return keyword + 1 > trending.length - 1 ? 0 : keyword + 1;
      });
      setRank((count) => {
        return count + 1 > trending.length ? 1 : count + 1;
      });
    }, 2000);
    return () => {
      clearInterval(intervalTrending);
    };
  }, [currentKeyword, rank, trending]);

  return (
    <div
      className={`flex animate-slider items-center ${outerClassName}`}
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <p className="mr-2 w-20 text-xs font-light">
        {rank}.{' '}
        {trending[currentKeyword].keyword.length > 10
          ? `${trending[currentKeyword].keyword.substring(0, 10)}...`
          : trending[currentKeyword].keyword}
      </p>
      {trending[currentKeyword].isUp ? (
        <div className="flex items-center text-primary font-semibold">
          <Go.GoArrowUp size={18} />
          <p className="text-xs">{trending[currentKeyword].number}</p>
        </div>
      ) : (
        <div className="flex items-center text-red-500 font-semibold">
          <Go.GoArrowDown size={18} />
          <p className="text-xs">{trending[currentKeyword].number}</p>
        </div>
      )}

      {visible && (
        <div className="absolute top-10 bg-white flex flex-col shadow w-48 text-xs leading-6 font-light border border-gray-400">
          <div className="border-b border-gray-200 p-5">
            {trending.map((item, index) => (
              <div className="flex justify-between">
                <Link
                  key={item._id}
                  className="text-left text-gray-700 hover:font-semibold hover:text-gray-700"
                >
                  <span className="font-bold text-gray-500">{index + 1}</span>
                  &emsp;
                  {item.keyword.length > 10
                    ? `${item.keyword.substring(0, 10)}...`
                    : item.keyword}
                </Link>
                <div className="flex w-10">
                  {item.isUp ? (
                    <Go.GoArrowUp
                      size={18}
                      className="self-start text-primary text-left"
                    />
                  ) : (
                    <Go.GoArrowDown
                      size={18}
                      className="self-start text-red-500 text-left"
                    />
                  )}
                  <p
                    className={`self-end text-left font-semibold ${
                      item.isUp ? 'text-primary' : 'text-red-500'
                    }`}
                  >
                    {item.number}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link className="text-center py-2">Lainnya</Link>
        </div>
      )}
    </div>
  );
};

export default Trending;
