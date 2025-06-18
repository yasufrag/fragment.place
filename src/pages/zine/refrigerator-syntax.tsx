import ZineCover from '@/components/zine/ZineCover'
import PoeticBlock from '@/components/zine/PoeticBlock'
import InventoryList from '@/components/zine/InventoryList'
import DayLayout from '@/components/zine/DayLayout'
import SyntaxMap from '@/components/zine/SyntaxMap'
import TagBox from '@/components/zine/TagBox'
import YourSyntax from '@/components/zine/YourSyntax'
import { MetaTag } from '@/components/MetaTag'
import { meta } from '@/meta/meta'

export default function RefrigeratorSyntaxZine() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-white">
      <MetaTag {...meta.zine.refrigeratorSyntax} />

      <ZineCover
        title="Refrigerator Syntax ZINE"
        subtitle="Tracing the Poetics of Everyday Life in the Early Days of Living Alone"
        image="/images/refrigerator.syntax.cover.jpeg"
      />

      <PoeticBlock title="Prologue｜Waking at 4:30 AM">
        <img src="/images/zine/morning.jpeg" alt="Breakfast with banana and yogurt" className="my-4 rounded" />
        <blockquote>
          The world was still asleep.  <br />
          A cold draft, and a faint irritation on the left corner of my lips.  <br />
          Residual heat from a night of coding—<br />
          perhaps it had settled there, quietly.  <br />
          I boiled water.  <br />
          My stomach and the fridge door calmed down at the same time.
        </blockquote>
      </PoeticBlock>

      <img src="/images/zine/refrigerator.inside.jpeg" alt="Inside the refrigerator" className="my-6 rounded" />

      <InventoryList
        frozen={[
          "Broccoli (small amount)",
          "Spinach",
          "Salted mackerel",
          "Pineapple",
          "Miso cutlet",
          "Fried chicken",
          "Spring rolls",
          "Pork miso soup"
        ]}
        refrigerated={[
          "Onions (many)",
          "Carrots (many)",
          "Tomato (1)",
          "Cherry tomato (1)",
          "Oyster mushrooms",
          "Lotus root",
          "Eggplants",
          "Potatoes (many)",
          "Okahijiki greens",
          "Ice plant"
        ]}
      />

      <PoeticBlock title="Fragment 1｜The Syntax of Miso Soup">
        <pre>
          {`[Oyster Mushroom and Onion Miso Soup Syntax]

- The broth came from memories in the freezer.
- Onion, cut into half-moons. Let the sweetness read itself over time.
- Mushrooms, torn by hand—syntax seeps better than with a knife.
- Miso, added in just the amount of “that silence.”
- When the steam rises, the answer has arrived.`}
        </pre>
      </PoeticBlock>

      <PoeticBlock title="Fragment 2｜Dialogue with the Past Through Leftovers">
        <img src="/images/zine/dinner.jpeg" alt="Dinner plate with vegetables and chicken" className="my-4 rounded" />
        <blockquote>
          The broccoli was still there.  <br />
          Spinach, frozen in time.  <br />
          The mackerel tasted like someone's voice.  <br /><br />
          These were ingredients my family left behind.  <br />
          As if to say, "We were here, too."  <br /><br />
          Food is perhaps a subtle transmission  <br />
          from the past into the present.  <br /><br />
          Life is not just stored inventory—  <br />
          It is <strong>inscribed in stock.</strong>
        </blockquote>
      </PoeticBlock>

      <PoeticBlock title="Fragment 3｜Naan, Candy, and Onion">
        <img src="/images/zine/curry.base.memory.jpeg" alt="Curry base ingredients: onion, carrot, potato" className="my-4 rounded" />
        <blockquote>
          Onion, carrot, potato—  <br />
          the essential trio for curry.  <br /><br />
          My little son loves curry.  <br /><br />
          I wonder how the uncle at the neighborhood Indian curry shop is doing.  <br />
          I want us to go there again, together.  <br /><br />
          He’d probably give my son a candy,  <br />
          and we’d walk home smiling.  <br /><br />
          As I slice onions, a few tears well up.  <br /><br />
          But it’s not from pain.
        </blockquote>
      </PoeticBlock>

      <DayLayout
        morning={[
          "Frozen pork miso soup",
          "White rice (small portion)",
          "Lightly boiled broccoli (with sesame & soy sauce)",
          "Tomato + pineapple (punctuation marks)"
        ]}
        afternoon={[
          "Grilled salted mackerel (Healsio)",
          "Stir-fried carrot and onion",
          "Spinach miso soup",
          "Rice"
        ]}
        evening={[
          "Steamed potatoes and eggplant",
          "Oyster mushroom and onion omelet",
          "Okahijiki greens with light seasoning"
        ]}
      />

      <PoeticBlock title="Banana Syntax Box">
        <img src="/images/zine/banana.syntax.box.jpeg" alt="Banana syntax box" className="my-4 rounded" />
        <blockquote>
          A leftover box on the street.  <br />
          “Kindness Banana,” it says.  <br /><br />
          My K2 Pro has a banana switch.  <br />
          My breakfast often includes a banana.  <br /><br />
          There’s something about this quiet, comedic poetry  <br />
          that aligns with how I work.
        </blockquote>
      </PoeticBlock>

      <SyntaxMap>
        <img src="/images/zine/syntaxmap.obsidian.png" alt="Obsidian screen showing refrigerator syntax map" className="my-4 rounded" />
      </SyntaxMap>

      <PoeticBlock title="Epilogue｜Where Life and Kitchen Begin to Blur">
        <blockquote>
          It was my first time living alone  <br />
          since my family went back to their hometown for a while.  <br /><br />
          The boundary between my kitchen and my body  <br />
          began to loosen and dissolve.  <br /><br />
          Perhaps this was the first boot sequence  <br />
          of an operating system that implements life as poem.
        </blockquote>
      </PoeticBlock>

      <TagBox tags={[
        "refrigerator.syntax",
        "poetic.kitchen",
        "solo.life.poiesis",
        "syntax.of.stock",
        "daily.poiesis"
      ]} />

      <YourSyntax />
    </main>
  )
}