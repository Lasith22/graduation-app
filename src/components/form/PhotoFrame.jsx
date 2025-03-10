import React from 'react';
import { Checkbox } from 'antd';

const PhotoFrame = (props) => {
  const { setFieldValue, values } = props;

  const handlePhotoFrameChange = (checkedValues) => {
    setFieldValue('photoFrames', checkedValues);
  };

  return (
    <div className="mb-8 font-primary">
      <div className="flex items-center mb-2">
        <h2 className="text-lg font-medium">
          සම්මාන ඡායාරූප රමුව (Graduation Photo)
        </h2>
        <span className="text-red-500 ml-1">*</span>
      </div>

      <Checkbox.Group
        className="flex flex-col space-y-2"
        onChange={handlePhotoFrameChange}
        value={values.photoFrames}
      >
        <Checkbox value="single">Single Photo 12X17 With Frame</Checkbox>
        <Checkbox value="family">Family Photo 12X17 With Frame</Checkbox>
        <Checkbox value="other">Other Per one 12X17 With Frame</Checkbox>
      </Checkbox.Group>

      <div className="mt-6">
        <div className="flex items-center mb-2">
          <h2 className="text-lg font-medium">
            When you will be attending the event
          </h2>
          <span className="text-red-500 ml-1">*</span>
        </div>
        <p className="text-sm text-gray-600">
          Students who wish to take this photo should arrive at the photo
          location two hours before the event begins with their parents.
        </p>
      </div>
    </div>
  );
};

export default PhotoFrame;
