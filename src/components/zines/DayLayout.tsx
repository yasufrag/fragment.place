export const DayLayout = ({
  morning,
  afternoon,
  evening,
}: {
  morning: string[]
  afternoon: string[]
  evening: string[]
}) => (
  <section className="my-10">
    <h3 className="font-semibold text-lg mb-4">Day Layout</h3>
    <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
      <div>
        <h4 className="font-bold mb-1">Morning</h4>
        <ul className="list-disc list-inside">{morning.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
      <div>
        <h4 className="font-bold mb-1">Afternoon</h4>
        <ul className="list-disc list-inside">{afternoon.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
      <div>
        <h4 className="font-bold mb-1">Evening</h4>
        <ul className="list-disc list-inside">{evening.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
    </div>
  </section>
)

export default DayLayout