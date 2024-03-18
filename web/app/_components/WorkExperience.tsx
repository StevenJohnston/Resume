
interface WorkExperience {
    title: string,
    employer: string,
    fromDate: string,
    toDate?: string,
    children: React.ReactNode
}

function durationString(fromDate: string, toDate?: string): string {
    if (!toDate) toDate = 'Current'
    return `${fromDate} - ${toDate}`
}

export default function WorkExperience({
    title,
    employer,
    fromDate,
    toDate,
    children
}: WorkExperience) {
    return (
        <div className="mb-2">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2 sm:items-end">
                <div className="text-base font-bold sm:w-5/12 leading-none">{title}</div>
                <div className="text-xs font-bold sm:w-3/12 leading-none">{employer}</div>
                <div className="text-xs text-gray-600 font-bold sm:w-4/12 flex flex-row sm:justify-end leading-none">{durationString(fromDate, toDate)}</div>
            </div>
            {
                children && (
                    <div>
                        {children}
                    </div>
                )
            }
        </div>
    )
}