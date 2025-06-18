export const ZineCover = ({
  title,
  subtitle,
  image
}: {
  title: string
  subtitle?: string
  image?: string
}) => (
  <header className="text-center my-12">
    {image && (
      <img
        src={image}
        alt={`${title} cover image`}
        className="mx-auto mb-6 rounded shadow"
      />
    )}
    <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
    {subtitle && <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>}
  </header>
)

export default ZineCover