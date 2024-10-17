import { Check, Copy } from 'lucide-react'
import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeBlockProps {
  code: string
  language: string
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="relative group">
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{
          borderRadius: '0.5rem',
          padding: '1rem',
          margin: '1rem 0',
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-gray-700 dark:bg-gray-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {isCopied ? <Check size={18} /> : <Copy size={18} />}
      </button>
    </div>
  )
}

export default CodeBlock
