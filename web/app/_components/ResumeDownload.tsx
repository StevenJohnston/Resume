interface ResumeDownloadProps {
  isPdf?: boolean
  className?: string
}

export default function ({ isPdf, className = "" }: ResumeDownloadProps) {
  return (
    <div className={`${className} flex`}>
      {
        !isPdf && (
          <a href="/api/pdf" className="border-red-700 border-2 rounded-md text-red-700 font-bold px-16 py-2 mb-2 self-end" target="_blank">View as PDF</a>
        )
      }
    </div>
  )
}