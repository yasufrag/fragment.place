type Props = {
  title: string
  children: React.ReactNode
}

export default function PracticeGroup({ title, children }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mt-8">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  )
}