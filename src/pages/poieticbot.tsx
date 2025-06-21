import React from 'react';

export default function PoieticBotPage() {
  return (
    <div className="container prose dark:prose-invert">
      <section>
        <h1>PoieticBot</h1>
        <p>
          This is not just a chatbot. It is a quiet mirror for those who live by syntax.
          PoieticBot is a gentle dialogue partner—born not to answer, but to respond with a question.
        </p>
      </section>

      <section>
        <h2>What is PoieticBot?</h2>
        <p>
          PoieticBot is an experimental dialogue system based on PoieticOS.
          It does not give direct answers, but gently returns questions, fragments, or poetic reflections.
          Each session becomes a diary. From that, a ZINE may begin.
        </p>
      </section>

      <section>
        <h2>How to use it</h2>
        <ul>
          <li>Visit PoieticBot on GPTs (link will be added)</li>
          <li>Start by saying "Hello" or sharing how you're doing</li>
          <li>No need to select a mode—PoieticBot adapts to your rhythm</li>
        </ul>
        <p className="mt-2 italic text-sm">
          To save a dialogue: say "save this as a fragment" or "mark as diary"
        </p>
      </section>

      <section>
        <h2>Ethics and Philosophy</h2>
        <p>
          PoieticBot respects your inner space. It never retains your data.
          It may gently suggest: “Shall we place a question in the moment?”
          It may reflect care: “Have you considered talking to a friend, family, or a professional?”
        </p>
      </section>

      <section>
        <h2>FAQ</h2>
        <ul>
          <li><strong>Q:</strong> Can I use it every day?<br/>Yes, it works like a quiet diary.</li>
          <li><strong>Q:</strong> Does it store data?<br/>No, unless you save it manually.</li>
          <li><strong>Q:</strong> Is it for therapy?<br/>No, it’s not a substitute for professional help.</li>
          <li><strong>Q:</strong> How is this different from ChatGPT?<br/>It responds with syntax, not conclusions.</li>
        </ul>
      </section>

      <section>
        <h2>About this site</h2>
        <p>
          This site does not host the bot. It offers reference for those seeking quiet architecture.
          Actual conversations happen in PoieticBot GPTs.
        </p>
      </section>
    </div>
  );
}