import React from 'react';
import Hero from '../components/home/Hero';
import MainForm from '../components/form/MainForm';
import Footer from '../components/home/Footer';
import PowerdBy from '../components/home/PowerdBy';

const Form = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] p-5 md:p-20">
        <MainForm />
        <Footer />
        <PowerdBy />
      </div>
    </>
  );
};

export default Form;
