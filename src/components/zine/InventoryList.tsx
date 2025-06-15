export const InventoryList = ({
  frozen,
  refrigerated,
}: {
  frozen: string[]
  refrigerated: string[]
}) => (
  <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
    <div>
      <h3 className="font-bold mb-2">■ Frozen</h3>
      <ul className="list-disc list-inside text-sm text-muted-foreground">
        {frozen.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-2">■ Refrigerated</h3>
      <ul className="list-disc list-inside text-sm text-muted-foreground">
        {refrigerated.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  </section>
)

export default InventoryList