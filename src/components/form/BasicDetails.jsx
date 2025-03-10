import { Input } from 'antd';
import React from 'react';

const BasicDetails = (props) => {
  const { setFieldValue, values } = props;
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

  const labelClass = 'text-[#576573] font-primary text-[15px] font-bold';
  return (
    <div className="flex flex-col gap-[24px]">
      {/* Student's Name */}
      <div className="flex flex-col gap-[16px]">
        <h1 className={labelClass}>Student's Name</h1>
        <Input
          value={values.eventName}
          onChange={(value) => setFieldValue('studentName', value.target.value)}
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
          onChange={(value) => setFieldValue('phoneNumber', value.target.value)}
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
          onChange={(value) => setFieldValue('examNumber', value.target.value)}
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
          onChange={(value) => setFieldValue('homeAddress', value.target.value)}
          placeholder="Enter your home address"
          className={inputClass}
          style={{ ...inputStyle, height: 'auto', minHeight: '80px' }}
          rows={3}
        />
      </div>
    </div>
  );
};

export default BasicDetails;
