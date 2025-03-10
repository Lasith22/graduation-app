import { Modal } from 'antd';
import React from 'react';
import SuccessIcon from '../../assets/SuccessIcon.svg';

const SuccessModal = (props) => {
  const { isModalVisible, handleModalClose, confirmMsg } = props;

  return (
    <Modal
      footer={null}
      title={null}
      open={isModalVisible}
      onOk={handleModalClose}
      onCancel={handleModalClose}
      closable={false}
      width={330}
      bodyStyle={{
        padding: '10px  ',
        width: '100%',
        height: '100%',
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <img src={SuccessIcon} alt="" />
        <h1 className="text-[#576573] font-mainTextStyle text-[18px] font-primary font-bold   mt-[16px] mb-[8px]">
          Success
        </h1>
        <h1 className="text-[#A8B4BF] font-mainTextStyle text-[14px] font-primary font-semibold  leading-custom tracking-custom mb-[24px]">
          {confirmMsg}
        </h1>

        <button
          onClick={handleModalClose}
          type="button"
          className="flex justify-center items-center w-[139px] h-[48px] rounded-[8px] p-[16px] bg-[#E9EDF2] text-[#576573] font-primary font-semibold text-[16px]  cursor-pointer"
        >
          Ok
        </button>
      </div>
    </Modal>
  );
};

export default SuccessModal;
