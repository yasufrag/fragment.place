const ZineCover = ({
  title,
  subtitle,
  image,
  alt,
}: {
  title: string
  subtitle?: string
  image?: string
  alt?: string
}) => (
  <section className="text-center my-12">
    <h1 className="text-3xl font-bold tracking-tight">{title}</h1>

    {subtitle && (
      <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>
    )}

    {image && (
      <img
        src={image}
        alt={alt ?? `${title} cover image`}
        className="mx-auto mt-6 rounded shadow"
      />
    )}
  </section>
)

export default ZineCover