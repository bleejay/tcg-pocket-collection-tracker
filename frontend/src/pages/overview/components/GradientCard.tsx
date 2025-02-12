interface GradientCardProps {
  title: string
  paragraph: string
  className?: string
  backgroundColor?: string
}

export function GradientCard({ title, paragraph, className, backgroundColor }: GradientCardProps) {
  return (
    <div className={`${className} tex flex flex-col items-center justify-center rounded-4xl p-8`} style={{ backgroundColor }}>
      <header className="font-semibold text-7xl text-white">{title}</header>
      <p className="mt-2 text-center text-2xl text-white">{paragraph}</p>
    </div>
  )
}
