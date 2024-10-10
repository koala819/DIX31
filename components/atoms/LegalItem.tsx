const LegalItem = ({ label, value }: { label: string; value: any }) => {
  return (
    <li className="flex flex-col sm:flex-row sm:justify-between">
      <span className="font-medium text-primary">{label}</span>
      <span className="text-muted-foreground">{value}</span>
    </li>
  )
}

export default LegalItem
