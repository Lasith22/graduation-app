import React, { useState } from 'react';
import { Input, message, Spin } from 'antd';
import { Formik, Form } from 'formik';
import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import SuccessModal from './SuccessModal';

const MainForm = () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
  const inputStyle = {
    width: '100%',
    height: '47px',
    border: '1px',
    borderRadius: '8px',
    borderColor: '#E1E4EB',
    borderStyle: 'solid',
    backgroundColor: '#fff',
  };

  const inputClass =
    'text-[#A8B4BF] text-[13px] font-primary font-bold placeholder-[#A8B4BF]';

  const labelClass = 'text-[#576573] font-primary text-[16px] font-bold';

  const initialValues = {
    studentName: '',
    phoneNumber: '',
    whatsappNumber: '',
    examNumber: '',
    homeAddress: '',
  };

  return (
    <div className="rounded-2xl border border-[#E9EDF2] bg-white/90 p-[30px]">
      <Spin spinning={loading} tip="submiting..">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) =>
            addDataToFirestore(values, resetForm)
          }
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="flex flex-col gap-[24px]">
                {/* Student's Name */}
                <div className="flex flex-col gap-[16px]">
                  <h1 className={labelClass}>Student's Name</h1>
                  <Input
                    value={values.eventName}
                    onChange={(value) =>
                      setFieldValue('studentName', value.target.value)
                    }
                    placeholder="John Smith"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                {/* Phone Number (දුරකථන අංකය) */}
                <div className="flex flex-col gap-[16px]">
                  <h1 className={labelClass}>Phone Number (දුරකථන අංකය)</h1>
                  <Input
                    value={values.phoneNumber}
                    onChange={(value) =>
                      setFieldValue('phoneNumber', value.target.value)
                    }
                    placeholder="07X XXX XXXX"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                {/* WhatsApp Phone Number (WhatsApp දුරකථන අංකය) - Required */}
                <div className="flex flex-col gap-[16px]">
                  <h1 className={labelClass}>
                    WhatsApp Phone Number* (WhatsApp දුරකථන අංකය)
                  </h1>
                  <Input
                    value={values.whatsappNumber}
                    onChange={(value) =>
                      setFieldValue('whatsappNumber', value.target.value)
                    }
                    placeholder="07X XXX XXXX"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                {/* Exam Number from School (පාසලෙන් ලබා දුන් විභාග අංකය) - Required */}
                <div className="flex flex-col gap-[16px]">
                  <h1 className={labelClass}>
                    Exam Number from School* (පාසලෙන් ලබා දුන් විභාග අංකය)
                  </h1>
                  <Input
                    value={values.examNumber}
                    onChange={(value) =>
                      setFieldValue('examNumber', value.target.value)
                    }
                    placeholder="Enter exam number"
                    className={inputClass}
                    style={inputStyle}
                    required
                  />
                </div>

                {/* Home Address (නිවසේ ලිපිනය) */}
                <div className="flex flex-col gap-[16px]">
                  <h1 className={labelClass}>Home Address (නිවසේ ලිපිනය)</h1>
                  <Input.TextArea
                    value={values.homeAddress}
                    onChange={(value) =>
                      setFieldValue('homeAddress', value.target.value)
                    }
                    placeholder="Enter your home address"
                    className={inputClass}
                    style={{ ...inputStyle, height: 'auto', minHeight: '80px' }}
                    rows={3}
                  />
                </div>

                {/* submit button */}
                <button
                  type="submit"
                  className="bg-[#2352D8] text-white font-primary font-bold text-[18px] py-[15px] rounded-[8px] hover:bg-[#FF4D4D] transition-all"
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
