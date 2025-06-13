import React from 'react';

type FragmentProps = {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
};

export const FragmentCard = ({ title, date, tags, excerpt }: FragmentProps) => (
  <div className="border rounded-2xl p-4 bg-white shadow hover:shadow-md transition">
    <h2 className="text-xl font-semibold mb-1">{title}</h2>
    <p className="text-sm text-gray-500">{date}</p>
    <p className="text-base text-gray-700 my-2">{excerpt}</p>
    <div className="text-xs text-gray-400 space-x-2">
      {tags.map(tag => <span key={tag}>#{tag}</span>)}
    </div>
  </div>
);