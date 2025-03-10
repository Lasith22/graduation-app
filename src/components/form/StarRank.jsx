import React from 'react';
import { Radio, Space } from 'antd';

const StarRank = () => {
  return (
    <div className="">
      {/* Date Selection */}
      <div className="mb-6 font-primary">
        <label className="block text-gray-800 font-medium mb-2">
          ඔබ උත්සවයට සහභාගීවන දවස
          <span className="text-red-500 mx-1 text-2xl">*</span>
        </label>
        <Radio.Group className="w-full">
          <Space direction="vertical" className="w-full">
            <Radio value="2025-04-17">
              <div className="py-1 px-3 bg-gray-100 rounded text-gray-700 inline-block">
                2025-04-17
              </div>
            </Radio>
            <Radio value="2025-04-18">
              <div className="py-1 px-3 bg-gray-100 rounded text-gray-700 inline-block">
                2025-04-18
              </div>
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      {/* Time Selection */}
      <div className="mb-6 font-primary">
        <label className="block text-gray-800 font-medium mb-2">
          ඔබ උත්සවයට සහභාගීවන වේලාව
          <span className="text-red-500 mx-1 text-2xl">*</span>
        </label>
        <p className="text-sm text-gray-600 mb-2">
          මෙම ඡායාරූපය ලබා ගැනීමට අවශ්‍යෙ සිසුන් දෙමවුපියන් සමග උත්සවය ආරම්බ
          කිරීමට පැය දෙකකට පෙර ඡායාරූප ගන්නා ස්ථානය වෙත පැමිණෙන්න,
        </p>
        <Radio.Group className="w-full">
          <Space direction="vertical" className="w-full">
            <Radio value="morning">
              <div className="py-1 px-3 bg-gray-100 rounded text-gray-700 inline-block">
                9:00 am to 11:30 pm (එසේනම් ඔබ උදෑසන 6.30 පැමිණෙන්න.)
              </div>
            </Radio>
            <Radio value="afternoon">
              <div className="py-1 px-3 bg-gray-100 rounded text-gray-700 inline-block">
                3:00 pm to 5:30 pm (එසේනම් ඔබ දහවල් 12.30 පැමිණෙන්න.)
              </div>
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className="flex justify-start   items-center">
        <h1 className=" text-2xl">Stars Rank</h1>{' '}
        <span className="text-red-500 mx-1 text-2xl">*</span>
      </div>
    </div>
  );
};

export default StarRank;
