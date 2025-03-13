import { Check, Copy } from 'lucide-react'
import  { useState, useEffect } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown'
import html from 'react-syntax-highlighter/dist/esm/languages/prism/markup'
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import { useTheme } from 'next-themes'

// Importer seulement les deux thèmes dont nous avons besoin
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'

// Enregistrer les langages
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('markdown', markdown)
SyntaxHighlighter.registerLanguage('html', html)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('shell', bash)

interface CodeBlockProps {
  code: string;
  language: string;
}

// Fonction pour traiter les chaînes de code échappées
const decodeEscapedString = (str: string): string => {
  return str
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\')
    .replace(/\\r/g, '\r');
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [processedCode, setProcessedCode] = useState('');
  const { theme } = useTheme(); // Utilisez votre hook useTheme

  // Choisir le thème en fonction du mode
  const isDarkTheme = theme === 'dark';
  const codeTheme = isDarkTheme ? oneDark : solarizedlight;

  useEffect(() => {
    // Traitement de la chaîne de code
    let decoded = code;

    // Si c'est un objet JSON
    if (typeof code === 'string' && code.trim().startsWith('{') && code.trim().endsWith('}')) {
      try {
        const parsedObj = JSON.parse(code);
        if (parsedObj && parsedObj.code) {
          decoded = parsedObj.code;
        }
      } catch (e) {
        console.warn('Failed to parse JSON in code block');
      }
    }

    // Décodage des caractères échappés
    setProcessedCode(decodeEscapedString(decoded));
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(processedCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={`relative group my-6 rounded-lg overflow-hidden border ${isDarkTheme ? 'border-gray-700' : 'border-gray-300'}`}>
      <div className={`flex items-center justify-between px-4 py-2 ${isDarkTheme ? 'bg-gray-800 border-b border-gray-700' : 'bg-gray-100 border-b border-gray-300'}`}>
        <span className={`text-sm font-mono ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
          {language}
        </span>

        <button
          onClick={handleCopy}
          className={`p-1.5 rounded transition-colors ${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
          aria-label="Copy code"
        >
          {isCopied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={codeTheme}
        showLineNumbers={true}
        customStyle={{
          fontSize: '0.9rem',
          lineHeight: '1.5',
          padding: '1rem',
          margin: '0',
          background: isDarkTheme ? '#1E1E1E' : '#FFFFFF',
          borderRadius: '0 0 0.375rem 0.375rem',
        }}
        lineNumberStyle={{
          minWidth: '2.5em',
          paddingRight: '1em',
          color: isDarkTheme ? '#6A737D' : '#A0AEC0',
          textAlign: 'right',
        }}
        codeTagProps={{
          style: {
            fontSize: '0.9rem',
            fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
            lineHeight: '1.5',
            whiteSpace: 'pre',
            overflowX: 'auto',
          },
        }}
      >
        {processedCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;