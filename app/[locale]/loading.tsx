import React from 'react'

const Loading = () => {
  return (
    <div className="fixed inset-0 w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900 z-[900]">
      {/* Spinner simple */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 dark:border-gray-700 border-t-blue-500 dark:border-t-blue-400 animate-spin"></div>

        {/* Texte simple */}
        <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
          Chargement...
        </p>
      </div>
    </div>
  )
}

export default Loading
