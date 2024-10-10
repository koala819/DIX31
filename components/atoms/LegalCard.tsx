const LegalCard = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg border border-primary/10 hover:border-primary/20 transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-primary">{title}</h2>
      {children}
    </div>
  )
}

export default LegalCard
