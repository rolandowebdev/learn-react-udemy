interface CardProps {
  title: string
  content: string
}

export const Card = ({ title, content }: CardProps) => (
  <article className="bg-slate-500 rounded-md p-3">
    <h2 className="text-center text-2xl mb-2 font-semibold">{title}</h2>
    <p>{content}</p>
  </article>
)
