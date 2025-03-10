import React from 'react';
import Footer1 from '../../assets/footer/1.png';
import Footer2 from '../../assets/footer/Footer2.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F3D47] text-white py-8 font-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {/* Logo Section */}
          <img src={Footer1} alt="" />

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact us</h3>
            <div className="md:space-y-2">
              <p>Event Lanka - Madushanka Udara</p>
              <div className="flex  items-start justify-start gap-1.5 mt-2">
                <p>077 1 16 17 18</p>-<p>076 675 98 55</p>
              </div>
            </div>
          </div>

          {/* More Information Section */}
          <div className=" hidden sm:block">
            <h3 className="text-xl font-semibold mb-4">More Informations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <img src={Footer2} alt="" className="mt-5 md:mt-0" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
