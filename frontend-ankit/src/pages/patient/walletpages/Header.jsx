
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PatientTopIcons from '../../../components/PatientTopIcons';


const Header = ({ onBack }) => {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1); // Go back to previous page
    }
  };

  return (
    <header className="sticky top-0 flex items-center justify-between border-b border-gray-200 ">
      <div className="bg-white shadow-sm w-full flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <button onClick={handleBackClick} className="text-black p-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold text-gray-800">Wallet</h1>
        </div>
        <div>
          <PatientTopIcons />
        </div>
      </div>
    </header>
  );
};

export default Header;
