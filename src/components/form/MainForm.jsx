import React, { useState } from 'react';
import { Input, message, Spin } from 'antd';
import { Formik, Form } from 'formik';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import SuccessModal from './SuccessModal';
import BasicDetails from './BasicDetails';

const MainForm = () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const addDataToFirestore = async (values, resetForm) => {
    try {
      setLoading(true);
      const docRef = doc(db, 'studentGraduationPhotos', values.examNumber);
      await setDoc(docRef, {
        studentName: values.studentName,
        phoneNumber: values.phoneNumber,
        whatsappNumber: values.whatsappNumber,
        examNumber: values.examNumber,
        homeAddress: values.homeAddress,
      });
      setIsModalVisible(true);
      resetForm();
    } catch (error) {
      console.error('Error adding document: ', error);
      message.error(`Error submitting form: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const initialValues = {
    studentName: '',
    phoneNumber: '',
    whatsappNumber: '',
    examNumber: '',
    homeAddress: '',
  };

  return (
    <div>
      <Spin spinning={loading} tip="submiting..">
        <Formik
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
                {/* submit button */}
                <button
                  type="submit"
                  className="bg-[#2352D8] text-white font-primary font-bold text-[18px] py-[15px] rounded-[8px] transition-all"
                  style={{
                    cursor: 'pointer',
                    border: 'none',
                  }}
                >
                  Submit
                </button>
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
