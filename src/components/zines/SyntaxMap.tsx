'use client'

import React from 'react'
import { ReactNode } from 'react'

const SyntaxMap = ({ children }: { children?: ReactNode }) => (
  <section className="my-12">
    <h3>Poietic Map</h3>
    {children && <div className="mb-6">{children}</div>}
    <pre className="whitespace-pre-wrap bg-neutral-800 p-4 rounded text-sm leading-relaxed text-white">
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