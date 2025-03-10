import React from 'react';
import { Checkbox } from 'antd';
import { ErrorMessage } from 'formik';

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

      <div className="mt-8 mb-6 border-t pt-6 border-gray-200">
        <div className="font-primary">
          <div className="flex items-start">
            <Checkbox
              checked={values.confirmDetails}
              onChange={(e) =>
                setFieldValue('confirmDetails', e.target.checked)
              }
              className="mt-1"
            />
            <div className="ml-2">
              <p className="text-gray-800 font-medium">
                I confirm that all the details provided are correct
                <span className="text-red-500 mx-1">*</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                By checking this box, I acknowledge that I have reviewed all the
                information provided in this form and confirm that it is
                accurate and complete.
              </p>
            </div>
          </div>
          <ErrorMessage
            name="confirmDetails"
            component="div"
            className="text-red-500 text-sm mt-1 font-mainTextStyle font-custom"
          />
        </div>
      </div>

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
