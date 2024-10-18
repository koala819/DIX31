import React from 'react'

import { Button } from '@/components/ui/button'

interface CategoryFilterProps {
  categories: string[]
  activeFilter: string
  onFilterChange: (category: string) => void
  locale: string
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeFilter,
  onFilterChange,
  locale,
}) => {
  const allCategory = 'all'
  const translatedAllCategory = locale === 'fr' ? 'Tous' : 'All'

  const translateCategory = (category: string) => {
    if (category === allCategory) return translatedAllCategory

    return category
  }

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? 'default' : 'outline'}
          onClick={() => onFilterChange(category)}
          className="text-sm"
        >
          {translateCategory(category)}
        </Button>
      ))}
    </div>
  )
}

export default CategoryFilter
