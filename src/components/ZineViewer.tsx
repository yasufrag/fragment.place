import React from 'react';

type ZineSection = {
  id: string;
  title: string;
  content: string;
};

type ZineViewerProps = {
  sections: ZineSection[];
};

export const ZineViewer = ({ sections }: ZineViewerProps) => (
  <div className="space-y-8">
    {sections.map(section => (
      <section key={section.id}>
        <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
        <div className="prose prose-neutral" dangerouslySetInnerHTML={{ __html: section.content }} />
      </section>
    ))}
  </div>
);