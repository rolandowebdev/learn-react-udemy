interface CardProps {
  title: string
  content: string
}

export const Card = ({ title, content }: CardProps) => (
  <article className="bg-slate-800 rounded-md w-full p-3">
    <h2 className="text-center text-xl mb-2 font-semibold">{title}</h2>
    <p className="text-slate-400">
      {content.length > 25 ? `${content.slice(0, 25)}...` : content}
    </p>
  </article>
)
