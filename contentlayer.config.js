import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/**@type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (post) => `${post._raw.flattenedPath}`,
  },
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    published: {
      type: 'boolean',
      default: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    picture: {
      type: 'string',
      require: true,
    },
    slug: {
      type: 'string',
      require: true,
    },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-light',
          darkTheme: 'github-dark',
          onVisitLine(node) {
            // Prevent lines from collapsing in 'display: grid' mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: '' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line --highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className.push('word --highlighted')
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            arialabel: 'Link to section',
          },
        },
      ],
    ],
  },
})
