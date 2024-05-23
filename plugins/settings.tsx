/**
 * This plugin contains all the logic for setting up the singletons
 */

import { type DocumentDefinition } from 'sanity'
import { type StructureResolver } from 'sanity/structure'

export const singletonPlugin = (types: string[]) => {
  return {
    name: 'singletonPlugin',
    document: {
      // Masquer les 'Singletons (comme Home)' des options de nouveaux documents
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev: any[], { creationContext }: { creationContext: { type: string } }) => {
        if (creationContext.type === 'global') {
          return prev.filter(
            (templateItem: { templateId: string }) => !types.includes(templateItem.templateId),
          )
        }

        return prev
      },
      // Supprime l'action "duplicate" sur les Singletons (comme Home)
      actions: (prev: any[], { schemaType }: { schemaType: string }) => {
        if (types.includes(schemaType)) {
          return prev.filter(({ action }: { action: string }) => action !== 'duplicate')
        }
        return prev
      },
    },
  }
}

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (
  typeDefArray: DocumentDefinition[],
): StructureResolver => {
  return (S) => {
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
    const singletonItems = typeDefArray.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title || 'Sans titre')
        .icon(typeDef.icon || undefined)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name)
            .views([S.view.form()]),
        )
    })

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) =>
        !typeDefArray.find((singleton) => singleton.name === listItem.getId()),
    )

    return S.list()
      .title('Content')
      .items([...singletonItems, S.divider(), ...defaultListItems])
  }
}
