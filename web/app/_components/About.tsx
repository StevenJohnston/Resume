import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import ResumeDownload from "@/app/_components/ResumeDownload"
import GithubIcon from "@/app/_components/github-outline.svg"
import Linked from "@/app/_components/linkedin-outline.svg"
interface About {
  isPdf?: boolean
  children?: React.ReactNode
}

export default function About({
  isPdf,
  children,
}: About) {
  return (
    <>
      <div className="mr-6 flex flex-col sm:w-1/3">
        <h1 className="text-[1.4rem] leading-none" >STEVEN JOHNSTON</h1>
        <p className="font-bold flex text-sm text-red-700 mb-2">Full-Stack Engineer</p>
        <div className="justify-evenly flex-wrap flex sm:block">
          <div className="flex flex-row">
            <EnvelopeIcon className="h-4 w-4" fill="white" />
            <p className="text-[10px] pl-1">me@stevenjohnston.ca</p>
          </div>
          <div className="flex flex-row">
            <PhoneIcon className="h-4 w-4" fill="white" />
            <p className="text-[10px] pl-1">519 503 3407</p>
          </div>
          <div className="flex flex-row">
            <MapPinIcon className="h-4 w-4" fill="white" fillOpacity={0} />
            <p className="text-[10px] pl-1">Kitchener, Ontario, Canada</p>
          </div>
          <div className="flex flex-row">
            <a className="flex flex-row text-black no-underline" href="https://github.com/StevenJohnston" target="_blank">
              <GithubIcon className="h-4 w-4" fill="black" />
              <p className="text-[10px] pl-1">github.com/StevenJohnston</p>
            </a>
          </div>
          <div className="flex flex-row">
            <a className="flex flex-row text-black no-underline " href="https://www.linkedin.com/in/steven-johnston-6a162487/" target="_blank">
              <Linked fill="black" className="h-4 w-4" />
              <p className="text-[10px] pl-1">linkedin.com/StevenJohnston</p>
            </a>
          </div>
        </div>
      </div>
      <div className="text-sm sm:w-2/3">
        <ResumeDownload
          isPdf={isPdf}
          className="sm:flex hidden justify-end flex-row h-8"
        />
        {children}
      </div>
    </>
  )
}