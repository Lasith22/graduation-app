import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-teal-900 text-white py-8 font-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Advertising Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Advertising</h3>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact us</h3>
            <div className="space-y-2">
              <p>Event Lanka - Madushanka Udara</p>
              <p>077 1 16 17 18</p>
              <p>076 675 98 55</p>
            </div>
          </div>

          {/* More Information Section */}
          <div>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
