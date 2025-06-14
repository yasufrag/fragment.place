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
    <div className="flex flex-row gap-4 overflow-x-auto px-4 py-6 md:grid md:grid-cols-2 lg:grid-cols-3">
      {sections.map((section) => (
        <div
          key={section.title}
          className="inline-block min-w-[280px] max-w-sm whitespace-normal rounded-xl border border-gray-300 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-neutral-900"
        >
          <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">
            {section.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {section.content}
          </p>
        </div>
      ))}
    </div>
  )
}
