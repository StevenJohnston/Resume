import WorkExperience from "@/app/_components/WorkExperience"
import Education from "@/app/_components/Education";
import Technology from "@/app/_components/Technology";
import ResumeDownload from "@/app/_components/ResumeDownload";
import About from "@/app/_components/About";

interface ResumeProps {
  isPdf?: boolean
  children?: React.ReactNode

}

export default function ({ isPdf, children }: ResumeProps) {
  const listClasses = isPdf ? 'text-[10px]' : 'text-sm pl-3'

  return (
    <div className="px-4 sm:px-12 py-8 sm:max-w-4xl">
      {/* Header */}
      <div className="mb-2 flex flex-col sm:flex-row">
        <About
          isPdf={isPdf}
        >
          {children}
        </About>
      </div>
      <div>
        <div className="flex flex-row mb-2">
          <div className="text-base font-bold text-red-700 mr-2">
            Work Experience
          </div>
          <div className="bg-red-700 h-1 self-center rounded-md" style={{ flexGrow: 1 }} />
        </div>

        <div>
          <WorkExperience
            title="Full Stack Founding Engineer"
            employer="Atomic"
            fromDate="Sept 2022"
            toDate="Feb 2024"
          >
            <div className={`${listClasses}`}>
              <ul className="list-disc leading-tight">
                <li>Designed detailed specifications documents outlining system architecture, data flows, and API integrations for an innovative financial automation platform, ensuring alignment with legal requirements.</li>
                <li>Transformed 3 startup concepts into reality, defining technical solutions, building robust prototypes, and driving development from idea to pre-launch stage.</li>
                <li>Dramatically improved developer efficiency by replacing a cloud-based development workflow with a local development kit, reducing testing time by 10 minutes.</li>
                <li>Successfully deployed several projects using serverless stacks, achieving cost savings, reducing operational overhead, and improving application responsiveness.</li>
                <li>Continuously evolved my preferred technology stack through self-directed learnings, researching emerging trends, and experimenting with new tools and frameworks.</li>
                <li>Successfully onboarded onto several teams with varying tech stacks, consistently demonstrating fast learning and effective integration into new environments.</li>
                {/* <li>Tools: React, Next.js, Tailwind CSS, GraphQL, CDK, Git, Github + Actions, Stripe, Plaid, Unit, LOB, Figma, Webflow, AWS, GCP</li> */}
              </ul>
            </div>
          </WorkExperience>
          <WorkExperience
            title="Full Stack Developer"
            employer="Adentro/Atomic"
            fromDate="March 2022"
            toDate="Sept 2022"
          >
            <div className={`${listClasses}`}>
              <ul className="list-disc leading-tight">
                <li>Developed a POC video messaging app during a 2-week hackathon, designed for asynchronous communication with features like video recording, message scheduling, and offline viewing.</li>
                <li>Heavily modified an open source project to meet our needs while speeding up development.</li>
                <li>Proxied API calls to extend 3rd party vendor functionality</li>
              </ul>
            </div>
          </WorkExperience>
          <WorkExperience
            title="Devops"
            employer="Adentro"
            fromDate="2020"
            toDate="March 2022"
          >
            <div className={`${listClasses}`}>
              <ul className="list-disc leading-tight">
                <li>Led the upgrade of an EOL MongoDB cluster, mitigating security risks and ensuring seamless operation of 30+ microservices.</li>
                <li>Designed and implemented a CI/CD pipeline using GitHub, Jenkins, AWS S3, and Airflow, accelerating development cycles and reducing manual errors for the data engineering team.</li>
                <li>Rapidly assumed data engineering responsibilities, becoming proficient in Snowflake and dbt to maintain data warehouse integrity and transformations.</li>
              </ul>
            </div>
          </WorkExperience >
          <WorkExperience
            title="Full Stack Developer"
            employer="Adentro"
            fromDate="2018"
            toDate="2020"
          >
            <div className={`${listClasses}`}>
              <ul className="list-disc leading-tight">
                <li>Demonstrated initiative by proactively taking on full-stack tickets shortly after being hired as a frontend developer, expanding skill set and contributions.</li>
                <li>Automated manual tasks for account managers with internal tools, increasing their efficiency and improving client experience.</li>
                <li>Built user-friendly graphs using c3, providing clear visualizations of key data for improved decision-making.</li>
                <li>Designed microservices capable of handling +1,000's of real time requests per second</li>
              </ul>
            </div>
          </WorkExperience >

        </div>
      </div>
      <div>
        <div className="flex flex-row mb-2">
          <div className="text-base font-bold text-red-700 mr-2">
            Education
          </div>
          <div className="bg-red-700 h-1 self-center rounded-md" style={{ flexGrow: 1 }} />
        </div>

        <div>
          <Education
            program="Software Engineering and Technology Diploma"
            institution="Conestoga College"
            fromDate="2014"
            toDate="2018"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-row mb-2">
          <div className="text-base font-bold text-red-700 mr-2">
            Languages and Technologies
          </div>
          <div className="bg-red-700 h-1 self-center rounded-md" style={{ flexGrow: 1 }} />
        </div>

        <div>
          <Technology
            title="Languages"
            description="Typescript, Python, GoLang, SQL, Bash"
          />
          <Technology
            title="Technologies"
            description="React, Next.js, Tailwind CSS, Git, Github + Actions, CDK, Terraform, GraphQL, Prisma, Webflow, LLM, GTP-4"
          />
          <Technology
            title="AWS"
            description="IAM, Route53, Lambda, RDS, Dynamodb, SQS, Elasticseach, S3, CloudWatch, SNS, SQS, CloudFormation"
          />
        </div>
      </div>

      <ResumeDownload
        isPdf={isPdf}
        className="flex sm:hidden flex-row justify-center"
      />
    </div>
  )
}