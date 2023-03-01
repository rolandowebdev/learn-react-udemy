import { notes } from '@/constants'
import { Card } from '@/components'

export const App = () => (
  <main>
    <h1 className="text-5xl font-bold text-sky-800">Udemy</h1>
    <div className="grid grid-cols-4 gap-3">
      {notes.map((note) => (
        <Card key={note.key} title={note.title} content={note.content} />
      ))}
    </div>
  </main>
)
