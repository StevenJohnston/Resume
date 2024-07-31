import WorkExperience from "@/app/_components/WorkExperience"

interface WealthsimpleWorkExperienceProps {
  isPdf?: boolean
}
export default function WealthsimpleWorkExperience({ isPdf }: WealthsimpleWorkExperienceProps) {
  const listClasses = isPdf ? 'text-[10px]' : 'text-sm pl-3'

  return (
    <>
      <WorkExperience
        title="Full Stack Founding Engineer"
        employer="Atomic VC"
        fromDate="March 2022"
        toDate="Feb 2024"
        tight={isPdf}
      >
        <div className={`${listClasses}`}>
          <ul className="list-disc leading-tight">
            <li>Successfully reduced customer churn by developing a payment retry system using Unit and Plaid APIs.</li>
            <li>Collaborated with legal team to design and develop inhouse equity management solution. Honing technical design  specifications, 3rd party integrations, and established project timelines. Integrating automated payments via Stripe.</li>
            <li>Transformed 3 startup concepts into reality, defining technical solutions, building robust prototypes, and driving development from idea to pre-launch stage.</li>
            <li>Created reusable AWS CDK stacks to provision isolated resources, empowering developers to work independently without resource conflicts, accelerating development cycles, and reducing the risk of production outages.</li>
            <li>Designed, implemented, and optimized 3 applications powered by OpenAI GPT-4 + embeddings included.</li>
            <li>Secured APIs with OAuth 2.0, leveraging GCP Identity Platform and Amazon Cognito.</li>
          </ul>
        </div>
      </WorkExperience>
      <WorkExperience
        title="Devops"
        employer="Adentro"
        fromDate="2020"
        toDate="March 2022"
        tight={isPdf}
      >
        <div className={`${listClasses}`}>
          <ul className="list-disc leading-tight">
            <li>Designed and implemented a CI/CD pipeline using GitHub, Jenkins, AWS S3, and Airflow to automate the deployment of dbt models transforming raw CSV data from S3 into Snowflake.</li>
            <li>Led the upgrade of a self hosted End of Life MongoDB cluster, mitigating security risks and ensuring seamless operation of 30+ microservices.</li>
            <li>Deployed DataDog Agent as sidecar to 100+ microservices to replace existing stdout logging + health checks.</li>
          </ul>
        </div>
      </WorkExperience >
      <WorkExperience
        title="Full Stack Developer"
        employer="Adentro"
        fromDate="July 2018"
        toDate="2020"
        tight={isPdf}
      >
        <div className={`${listClasses}`}>
          <ul className="list-disc leading-tight">
            <li>Profiled live production Go with pprof - Analized long running postgres queries - Debugged remotely via Delve.</li>
            <li>Leveraged kafka and database caching to create Golang and Scala microservices capable of handling +1,000's of real time requests per second.</li>
          </ul>
        </div>
      </WorkExperience >
      <WorkExperience
        title="Front End Developer"
        employer="Green Brick Labs Inc"
        fromDate="May 2017"
        toDate="July 2018"
        tight={isPdf}
      >
        <div className={`${listClasses}`}>
          <ul className="list-disc leading-tight">
            <li>Designed and built a secure, high-performance microservice proxy for the Bitcoin network. Leveraged JWTs for robust authentication and authorization.</li>
          </ul>
        </div>
      </WorkExperience >
    </>
  )
}