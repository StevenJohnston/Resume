'use client'
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface ResumeDownloadProps {
  className?: string
}

export default function ResumeDownload({ className = "" }: ResumeDownloadProps) {
  const pathname = usePathname();
  return (
    <div className={`${className} flex`}>
      <a href={`/api/pdf${pathname}`} className="border-red-700 border-2 rounded-md text-red-700 font-bold px-16 py-2 mb-2 self-end" target="_blank">View as PDF</a>
    </div>
  )
}
