import React from 'react'

type ZineSection = {
  title: string
  content: string
}

type ZineViewerProps = {
  sections: ZineSection[]
}

export const ZineViewer: React.FC<ZineViewerProps> = ({ sections }) => {
  return (
    <div className="flex flex-row overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-6 px-4">
      {sections.map(section => (
        <div
          key={section.title}
          className="inline-block min-w-[280px] max-w-sm bg-white dark:bg-neutral-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm p-5 whitespace-normal"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            {section.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {section.content}
          </p>
        </div>
      ))}
    </div>
  )
}
