import React, { useState } from 'react';
import { message, Spin } from 'antd';
import { Formik, Form } from 'formik';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import SuccessModal from './SuccessModal';
import BasicDetails from './BasicDetails';
import StarRank from './StarRank';
import PhotoFrame from './PhotoFrame';
import { useNavigate } from 'react-router';
import {
  basicDetailsValidationSchema,
  photoFrameValidationSchema,
  starRankValidationSchema,
} from './validationSchemas';

const MainForm = () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const addDataToFirestore = async (values, resetForm) => {
    setLoading(true);

    if (activeStep == 0 && basicDetailsValidationSchema.isValidSync(values)) {
      setActiveStep(1);
      setLoading(false);
    } else if (
      activeStep == 1 &&
      starRankValidationSchema.isValidSync(values)
    ) {
      setActiveStep(2);
      setLoading(false);
    } else if (
      activeStep === 2 &&
      photoFrameValidationSchema.isValidSync(values)
    ) {
      try {
        const docRef = doc(db, 'studentGraduationPhotos', values.examNumber);
        await setDoc(docRef, {
          studentName: values.studentName,
          phoneNumber: values.phoneNumber,
          whatsappNumber: values.whatsappNumber,
          examNumber: Number(values.examNumber),
          homeAddress: values.homeAddress,
          attendingDate: values.attendingDate,
          attendingTime: values.attendingTime,
          starRank: values.starRank,
          photoFrames: values.photoFrames,
          confirmDetails: values.confirmDetails,
        });
        setIsModalVisible(true);
      } catch (error) {
        console.error('Error adding document: ', error);
        message.error(`Error submitting form: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }
    console.log(values);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    navigate('/');
  };

  const initialValues = {
    studentName: '',
    phoneNumber: '',
    whatsappNumber: '',
    examNumber: '',
    homeAddress: '',
    attendingDate: '',
    attendingTime: '',
    starRank: '',
    photoFrames: [],
    confirmDetails: false,
  };

  const handleCancel = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    } else if (activeStep === 0) {
      navigate(-1);
    }
  };
  const validationSchemas = [
    basicDetailsValidationSchema,
    starRankValidationSchema,
    photoFrameValidationSchema,
  ];
  return (
    <div>
      <Spin spinning={loading} tip="submiting..">
        <Formik
          validationSchema={validationSchemas[activeStep]}
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) =>
            addDataToFirestore(values, resetForm)
          }
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="my-[40px] px-[20px] py-[40px] bg-[#fff] rounded-[24px]">
                {activeStep === 0 && (
                  <BasicDetails setFieldValue={setFieldValue} values={values} />
                )}
                {activeStep === 1 && (
                  <StarRank setFieldValue={setFieldValue} values={values} />
                )}
                {activeStep === 2 && (
                  <PhotoFrame setFieldValue={setFieldValue} values={values} />
                )}
                {/* submit button */}
                <div className="mt-[40px]  flex justify-between md:justify-normal items-center gap-[12px]">
                  <button
                    onClick={handleCancel}
                    type="button"
                    className="flex justify-center items-center w-full md:w-[86px] h-[34px] rounded-[4px] p-[12px] border-[#707E8C] border text-[#707E8C] font-primary text-[14px] font-bold  cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className={`flex justify-center items-center w-full 
                        md:w-[86px] 
                     h-[34px] rounded-[4px] p-[12px] gap-[10px] bg-[#46ADC2] text-[#FFF] font-primary text-[14px] font-bold cursor-pointer`}
                  >
                    {activeStep === 2 ? 'Submit' : 'Next'}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Spin>

      <SuccessModal
        handleModalClose={handleModalClose}
        isModalVisible={isModalVisible}
        confirmMsg="Data Submmited successfully!"
      />
    </div>
  );
};

export default MainForm;
