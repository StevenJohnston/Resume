
interface Technology {
  title: string,
  description: string,
}

export default function Technology({
  title,
  description,
}: Technology) {
  return (
    <div className="sm:flex sm:flex-row justify-between mb-2">
      <div className="text-xs font-bold w-2/12">{title}</div>
      <div className="text-xs w-10/12 leading-tight">{description}</div>
    </div>
  )
}