import { resolveHref } from 'lib/sanity.links'
import { map } from 'rxjs/operators'
import {
  DocumentLocationResolver,
  DocumentLocationsState,
} from 'sanity/presentation'

// Modifié : signature de la fonction pour correspondre à l'interface DocumentLocationResolver
export const resolveLocations: DocumentLocationResolver = (params, context) => {
  // Modifié : utilisation de pipe() pour retourner un Observable
  return context.documentStore
    .listenQuery(
      `*[_id == $id || references($id)]{_type, slug, title}`,
      params,
      { perspective: 'previewDrafts' },
    )
    .pipe(
      map((docs) => {
        if (params.type === 'settings') {
          return {
            locations: [
              {
                title: 'Settings',
                href: '/',
              },
            ],
            tone: 'positive',
          } as DocumentLocationsState
        }

        if (['home', 'page', 'project'].includes(params.type)) {
          const isReferencedBySettings = docs.some(
            (doc: any) => doc._type === 'settings',
          )

          switch (params.type) {
            case 'home':
              return {
                locations: [
                  {
                    title:
                      docs.find((doc: any) => doc._type === 'home')?.title ||
                      'Home',
                    href: resolveHref(params.type)!,
                  },
                ],
                tone: 'positive',
                message: 'This document is used to render the front page',
              } as DocumentLocationsState
            case 'page':
            case 'project':
              return {
                locations: docs
                  .map((doc: any) => {
                    const href = resolveHref(doc._type, doc?.slug?.current)
                    return {
                      title: doc?.title || 'Untitled',
                      href: href!,
                    }
                  })
                  .filter((doc: any) => doc.href !== undefined),
                tone: isReferencedBySettings ? 'positive' : 'critical',
                message: isReferencedBySettings
                  ? 'This document is referenced in settings'
                  : 'This document is not referenced in settings',
              } as DocumentLocationsState
            default:
              return {
                message: 'Unable to map document type to locations',
                tone: 'critical',
              } as DocumentLocationsState
          }
        }

        return null
      }),
    )
}
