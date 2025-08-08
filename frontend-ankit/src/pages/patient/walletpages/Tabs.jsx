import React from 'react';




const Tabs= ({ activeTab, setActiveTab }) => {
  const tabs = ['Redeem Points', 'Earn Points'];

  return (
    <div className="flex border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-3 text-center font-semibold transition-all duration-300 ${
            activeTab === tab
              ? 'border-b-2'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
          style={activeTab === tab ? {color: '#0c4d6b', borderColor: '#0c4d6b'} : {}}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;