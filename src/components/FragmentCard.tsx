import React from 'react';

type FragmentProps = {
  title: string;
  date?: string;
  tags?: string[];
  excerpt?: string;
};

export const FragmentCard: React.FC<FragmentProps> = ({ title, date, tags, excerpt }) => {
  return (
    <div className="border border-gray-300 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      {date && <p className="text-sm text-gray-500 mb-1">{date}</p>}
      {excerpt && <p className="text-gray-600 text-base mb-3">{excerpt}</p>}
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};