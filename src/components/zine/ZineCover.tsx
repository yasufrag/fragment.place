export const ZineCover = ({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) => (
  <header className="text-center my-12">
    <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
    {subtitle && <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>}
  </header>
)

export default ZineCover