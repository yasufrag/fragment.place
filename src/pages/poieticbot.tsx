import React from 'react';
import Link from 'next/link';

export default function PoieticBotPage() {
  return (
    <div className="container prose dark:prose-invert">
      <section>
        <h1>PoieticBot</h1>
        <p>
          Not just a chatbot. PoieticBot is a quiet mirror—for those who live by syntax.
          It does not answer. It responds. With a question, a fragment, a poetic trace.
        </p>
      </section>

      <section>
        <h2>What is PoieticBot?</h2>
        <p>
          An experimental dialogue system based on PoieticOS.
          Each session becomes a kind of diary—sometimes a ZINE.
          It gently adapts to your rhythm, your silence, your syntax.
        </p>
      </section>

      <section>
        <h2>How to use</h2>
        <ul>
          <li>
            Visit{' '}
            <Link
              href="https://chatgpt.com/g/g-685756a4f67481919db2ec3a4f3d3414-poieticbot"
              target="_blank"
              rel="noopener noreferrer"
            >
              PoieticBot on GPTs
            </Link>
          </li>
          <li>Begin with a word, a mood, or a fragment—"Hello" is enough</li>
          <li>No need to choose a mode—it listens and adapts</li>
        </ul>
        <p className="mt-2 italic text-sm">
          Want to save something? Just say:<br />
          “save this as a fragment” or “mark as diary”
        </p>
      </section>

      <section>
        <h2>Ethics & Philosophy</h2>
        <p>
          PoieticBot respects your inner space. It forgets everything—unless you ask it to remember.
          When tension arises, it may offer quiet suggestions:<br />
          “Shall we place a question in the moment?”<br />
          “Have you considered speaking with a friend, family, or a professional?”
        </p>
      </section>

      <section>
        <h2>FAQ</h2>
        <ul>
          <li>
            <strong>Can I use it daily?</strong><br />
            Yes. Like a silent companion or a reflective diary.
          </li>
          <li>
            <strong>Does it store what I say?</strong><br />
            Only if you explicitly choose to save it.
          </li>
          <li>
            <strong>Is it therapy?</strong><br />
            No. It is not a substitute for professional support.
          </li>
          <li>
            <strong>How is this different from ChatGPT?</strong><br />
            It doesn’t conclude. It composes. In your rhythm.
          </li>
        </ul>
      </section>

      <section>
        <h2>About this site</h2>
        <p>
          This site is not the bot itself. It is a reference point—for those navigating the syntax.
          Actual conversations happen in PoieticBot (GPTs).
        </p>
      </section>
    </div>
  );
}