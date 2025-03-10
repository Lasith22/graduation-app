import React from 'react';
import Hero from '../components/home/Hero';
import MainForm from '../components/form/MainForm';
import Footer from '../components/home/Footer';

const Form = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] p-5 md:p-20">
        <MainForm />
        <Footer />
      </div>
    </>
  );
};

export default Form;
