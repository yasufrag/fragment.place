import { Metadata } from 'next'
import PracticeGroup from '@/components/practices/PracticeGroup'
import PracticeCard from '@/components/practices/PracticeCard'

export const metadata: Metadata = {
  title: 'Practices',
  description: 'How people use FragmentPractice in their daily lives.',
}

export default function UseCasesPage() {
  return (
    <div className="article-container">
      <div>
        <h1>How do people use FragmentPractice?</h1>
        <p>
          A few ways this quiet OS is used in daily life—across different rhythms and intentions.
        </p>
      </div>

      <PracticeGroup title="Ume｜Light Users">
        <PracticeCard
          title="A quiet prompt every morning"
          description="Receive a daily reflection and type a brief thought."
          slug="morning-prompt"
        />
        <PracticeCard
          title="Use it like a diary"
          description="Mark as a journal and copy the syntax to your notes."
          slug="diary-mode"
        />
      </PracticeGroup>

      <PracticeGroup title="Take｜Reflective Users">
        <PracticeCard
          title="Dialogue to unpack emotion"
          description="Speak freely to the Bot to find hidden thoughts."
          slug="emotion-dialogue"
        />
        <PracticeCard
          title="Bundle your Fragments"
          description="Save and organize Fragments into personal ZINEs."
          slug="bundle-fragments"
        />
      </PracticeGroup>

      <PracticeGroup title="Matsu｜Advanced Users">
        <PracticeCard
          title="Run a symbolic OS of your own"
          description="Customize your syntax structure, connect with Git, publish to site."
          slug="symbolic-os"
        />
        <PracticeCard
          title="Design dialogic rituals"
          description="Use the Bot for family conversation or structural planning."
          slug="dialogic-rituals"
        />
      </PracticeGroup>
    </div>
  )
}