import React from 'react';
import { Radio, Space } from 'antd';

const StarRank = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      {/* Date Selection */}
      <div className="mb-6">
        <label className="block text-gray-800 font-medium mb-2">
          Date you will be attending the event{' '}
          <span className="text-red-500">*</span>
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
      <div className="mb-6">
        <label className="block text-gray-800 font-medium mb-2">
          When you will be attending the event{' '}
          <span className="text-red-500">*</span>
        </label>
        <p className="text-sm text-gray-600 mb-2">
          Students who wish to take this photo should arrive at the photo
          location two hours before their scheduled time.
        </p>
        <Radio.Group className="w-full">
          <Space direction="vertical" className="w-full">
            <Radio value="morning">
              <div className="py-1 px-3 bg-gray-100 rounded text-gray-700 inline-block">
                9:00 am to 11:30 pm (If you arrive at 6:30 a.m.)
              </div>
            </Radio>
            <Radio value="afternoon">
              <div className="py-1 px-3 bg-gray-100 rounded text-gray-700 inline-block">
                3:00 pm to 5:30 pm (If you arrive at 12:30 p.m.)
              </div>
            </Radio>
          </Space>
        </Radio.Group>
      </div>
    </div>
  );
};

export default StarRank;
