import { Card } from '@/components'
import { notes } from '@/constants'

export const Home = () => (
  <section className="w-full mt-10">
    <h1 className="text-5xl text-center font-bold text-sky-600 mb-6">Udemy</h1>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {notes.map((note) => (
        <Card key={note.key} title={note.title} content={note.content} />
      ))}
    </div>
  </section>
)
