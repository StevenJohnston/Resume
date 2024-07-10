import { durationString } from "@/app/_lib/utils"

interface Education {
  program: string,
  institution: string,
  fromDate: string,
  toDate?: string
}

export default function Education({
  program,
  institution,
  fromDate,
  toDate,
}: Education) {
  return (
    <div className="mb-2">
      <div className="flex flex-row justify-between mb-2 items-center">
        <div className="text-xs font-bold w-5/12">{program}</div>
        <div className="text-xs font-bold w-3/12">{institution}</div>
        <div className="text-xs text-gray-600 font-bold w-4/12 flex flex-row justify-end">{durationString(fromDate, toDate)}</div>
      </div>
    </div>
  )
}