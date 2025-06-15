const YourSyntax = () => (
  <section className="my-16">
    <h3 className="text-lg font-semibold mb-2">Your Refrigerator Syntax</h3>
    <p className="text-sm text-gray-400 mb-4">
      Write your own fragment: what’s sleeping in your fridge?  
      What memories or rhythms do your ingredients hold?
      This is not a form. It’s a space to listen, and respond.
    </p>
    <textarea
      placeholder="e.g. 'There was one last eggplant, waiting like a quiet punctuation mark...'"
      className="w-full min-h-[180px] bg-neutral-900 text-white placeholder-gray-500 border border-gray-700 rounded-md p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
    />
  </section>
)

export default YourSyntax