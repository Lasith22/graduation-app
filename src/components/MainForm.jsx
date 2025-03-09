import React from 'react';
import { Input } from 'antd';

const MainForm = () => {
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

  return (
    <div className="rounded-2xl border border-[#E9EDF2] bg-white/90 p-[30px]">
      <div className="flex flex-col gap-[24px]">
        {/* Student's Name */}
        <div className="flex flex-col gap-[16px]">
          <h1 className={labelClass}>Student's Name</h1>
          <Input
            placeholder="John Smith"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        {/* Phone Number (දුරකථන අංකය) */}
        <div className="flex flex-col gap-[16px]">
          <h1 className={labelClass}>Phone Number (දුරකථන අංකය)</h1>
          <Input
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
            placeholder="07X XXX XXXX"
            className={inputClass}
            style={inputStyle}
            required
          />
        </div>

        {/* Exam Number from School (පාසලෙන් ලබා දුන් විභාග අංකය) - Required */}
        <div className="flex flex-col gap-[16px]">
          <h1 className={labelClass}>
            Exam Number from School* (පාසලෙන් ලබා දුන් විභාග අංකය)
          </h1>
          <Input
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
            placeholder="Enter your home address"
            className={inputClass}
            style={{ ...inputStyle, height: 'auto', minHeight: '80px' }}
            rows={3}
          />
        </div>

        {/* submit button */}
        <button
          className="bg-[#2352D8] text-white font-primary font-bold text-[18px] py-[15px] rounded-[8px] hover:bg-[#FF4D4D] transition-all"
          style={{
            cursor: 'pointer',
            border: 'none',
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MainForm;
