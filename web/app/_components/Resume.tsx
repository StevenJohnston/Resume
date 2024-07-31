import WorkExperience from "@/app/_components/WorkExperience"
import Education from "@/app/_components/Education";
import Technology from "@/app/_components/Technology";
import ResumeDownload from "@/app/_components/ResumeDownload";
import About from "@/app/_components/About";

interface ResumeProps {
  about: React.ReactNode
  workExperience?: React.ReactNode
  eduction?: React.ReactNode
  technologies?: React.ReactNode
  projects?: React.ReactNode

  isPdf?: boolean
  tight?: boolean
}

function renderWorkExperience(workExperience: React.ReactNode, tight: boolean = false) {
  return (
    <div>
      <div className={`flex flex-row ${tight ? 'mb-1' : 'mb-2'} `}>
        <div className="text-base font-bold text-red-700 mr-2">
          Work Experience
        </div>
        <div className="bg-red-700 h-1 self-center rounded-md" style={{ flexGrow: 1 }} />
      </div>

      <div>
        {workExperience}
      </div>
    </div>
  )
}

function renderEduction(eduction: React.ReactNode, tight: boolean = false) {
  return (
    <div>
      <div className={`flex flex-row ${tight ? 'mb-1' : 'mb-2'}`}>
        <div className="text-base font-bold text-red-700 mr-2">
          Education
        </div>
        <div className="bg-red-700 h-1 self-center rounded-md" style={{ flexGrow: 1 }} />
      </div>

      <div>
        {eduction}
      </div>
    </div>
  )
}

function renderTechnologies(technologies: React.ReactNode, tight: boolean = false) {
  return (

    <div>
      <div className={`flex flex-row ${tight ? 'mb-1' : 'mb-2'}`}>
        <div className="text-base font-bold text-red-700 mr-2">
          Languages and Technologies
        </div>
        <div className="bg-red-700 h-1 self-center rounded-md" style={{ flexGrow: 1 }} />
      </div>

      <div>
        {technologies}
      </div>
    </div>
  )
}

function renderProjects(projects: React.ReactNode, tight: boolean = false) {
  return (
    <div>
      <div className={`flex flex-row ${tight ? 'mb-1' : 'mb-2'}`}>
        <div className="text-base font-bold text-red-700 mr-2">
          Projects
        </div>
        <div className="bg-red-700 h-1 self-center rounded-md" style={{ flexGrow: 1 }} />
      </div>

      <div>
        {projects}
      </div>
    </div>
  )
}


export default function Resume({ about, workExperience, eduction, technologies, projects, tight, isPdf }: ResumeProps) {
  return (
    <div className="px-4 sm:px-12 py-8 sm:max-w-4xl">
      <div className="mb-2 flex flex-col sm:flex-row">
        {about}
      </div>
      {workExperience && renderWorkExperience(workExperience, tight)}
      {projects && renderProjects(projects, tight)}
      {eduction && renderEduction(eduction, tight)}
      {technologies && renderTechnologies(technologies, tight)}
      {
        !isPdf
        && <ResumeDownload
          className="flex sm:hidden flex-row justify-center"
        />
      }
    </div>
  )
}