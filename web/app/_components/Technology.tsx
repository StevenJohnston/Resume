
interface Technology {
  title: string,
  description: string,
}

export default function Technology({
  title,
  description,
}: Technology) {
  return (
    <div className="flex flex-row justify-between mb-2">
      <div className="text-xs font-bold w-5/12">{title}</div>
      <div className="text-xs w-7/12 leading-tight">{description}</div>
    </div>
  )
}