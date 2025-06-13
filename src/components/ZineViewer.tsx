import React from 'react';

type ZineSection = {
  title: string;
  content: string;
};

type ZineViewerProps = {
  sections: ZineSection[];
};

export const ZineViewer: React.FC<ZineViewerProps> = ({ sections }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-6 px-4 space-x-4 flex">
      {sections.map((section, index) => (
        <div
          key={index}
          className="inline-block min-w-[300px] max-w-sm bg-white border border-gray-300 rounded-xl shadow-md p-5 whitespace-normal"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{section.title}</h3>
          <p className="text-gray-700 text-sm leading-relaxed">{section.content}</p>
        </div>
      ))}
    </div>
  );
};