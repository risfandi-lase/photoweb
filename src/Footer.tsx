import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="">
            <div className=" text-xs">
              <div className="flex items-center">
                <Icon
                  icon="mdi:map-marker"
                  width="20"
                  className="text-yellow-500 mr-3"
                />
                <span>Batam, Indonesia</span>
              </div>
              <div className="flex items-center">
                <Icon
                  icon="mdi:email"
                  width="20"
                  className="text-yellow-500 mr-3"
                />
                <a
                  href="mailto:risfandilase7865@gmail.com"
                  className="hover:text-yellow-500 transition-colors"
                >
                  risfandilase7865@gmail.com
                </a>
              </div>
             
            </div>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Fandy Photography. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Made with ❤️ in Batam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
