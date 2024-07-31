interface Project {
  title: string,
  link: string,
  tight?: boolean,
  children: React.ReactNode
}

export default function Project({
  title,
  link,
  tight,
  children
}: Project) {
  return (
    <div className={`${tight ? 'mb-1' : 'mb-2'}`}>
      <div className={`flex flex-col sm:flex-row sm:justify-between ${tight ? 'mb-1' : 'mb-2'} sm:items-end`}>
        <div className="text-base font-bold leading-none inline-flex flex-wrap">
          <span>
            {title}
          </span>
          &nbsp;
          {
            link && <a href={link} className="underline text-blue-600 hover:text-blue-800 text-xs overflow-ellipsis max-w-full overflow-hidden">{link.split('https://')[1]}</a>
          }
        </div>
      </div>
      {
        children && (
          <div>
            {children}
          </div>
        )
      }
    </div >
  )
}