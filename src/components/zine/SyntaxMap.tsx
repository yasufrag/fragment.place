import { ReactNode } from 'react'

const SyntaxMap = ({ children }: { children?: ReactNode }) => (
  <section className="my-10">
    <h3 className="font-semibold text-lg mb-4">Poietic Map</h3>
    {children}
    <pre className="mt-4 whitespace-pre-wrap">
{`┌────────────────────────────┐
│  Main Syntax    → Chicken breast, mackerel, frozen prepared food  
│  Side Syntax    → Eggplant, lotus root, carrot, onion  
│  Green Repair   → Spinach, okahijiki, broccoli  
│  Color Syntax   → Tomato, pineapple, ice plant  
└────────────────────────────┘

→ Methods: Steam, stir-fry, soak, reheat  
→ Tools: Hot Cook, Healsio oven, the body itself`}
    </pre>
  </section>
)

export default SyntaxMap