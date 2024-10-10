'use server'

import fs from 'fs'
import path from 'path'

interface FileStats {
  dateCreated: Date
  dateModified: Date
}

export async function getFileStats(
  routePath: string,
): Promise<FileStats | null> {
  // Construire le chemin de base
  let filePath = path.join(process.cwd(), 'app', '[locale]')

  // Ajouter les segments de route supplémentaires s'il y en a
  if (routePath !== '/') {
    filePath = path.join(filePath, routePath)
  }

  // Ajouter 'page.tsx' à la fin
  filePath = path.join(filePath, 'page.tsx')

  //   console.log('\n\nChemin du fichier:', filePath, '\n\n')

  // Vérifier si le fichier existe
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`)
    // return null
  }

  const stats = fs.statSync(filePath)
  //   console.log('\n\nStats du fichier:', stats, '\n\n')

  return {
    dateCreated: stats.birthtime,
    dateModified: stats.mtime,
  }
}
