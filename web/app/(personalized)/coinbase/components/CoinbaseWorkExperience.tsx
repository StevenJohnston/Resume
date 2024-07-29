import WorkExperience from "@/app/_components/WorkExperience"

interface CoinbaseWorkExperienceProps {
  isPdf?: boolean
}
export default function CoinbaseWorkExperience({ isPdf }: CoinbaseWorkExperienceProps) {
  const listClasses = isPdf ? 'text-[10px]' : 'text-sm pl-3'

  return (
    <>
      <WorkExperience
        title="Full Stack Founding Engineer"
        employer="Atomic VC"
        fromDate="March 2022"
        toDate="Feb 2024"
      >
        <div className={`${listClasses}`}>
          <ul className="list-disc leading-tight">
            <li>Led the technical design of a financial automation platform, delivering comprehensive specifications that optimized system architecture, data flows, and API integrations while ensuring full legal compliance.</li>
            <li>Transformed 3 startup concepts into reality, defining technical solutions, building robust prototypes, and driving development from idea to pre-launch stage.</li>
            <li>Accelerated developer testing 100-fold by implementing a local development kit in place of a cloud-based workflow.</li>
            <li>Deployed several projects using an AWS serverless stacks, achieving cost savings, reducing operational overhead, and improving application responsiveness.</li>
            <li>Designed, implemented, and optimized 3 applications powered by large language models (LLM), embeddings included.</li>
            <li>Rapidly onboarded onto several teams with varying tech stacks, consistently demonstrating fast learning and effective integration into new environments.</li>
            <li>Developed a POC video messaging app during a 2-week hackathon, designed for asynchronous communication with features like video recording, message scheduling, and offline viewing.</li>
            <li>Heavily modified an open source javascript project to meet our needs while speeding up development.</li>
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
            <li>Led the upgrade of a self hosted End of Life MongoDB cluster, mitigating security risks and ensuring seamless operation of 30+ microservices.</li>
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
            <li>Demonstrated initiative by proactively taking on full stack tickets shortly after being hired as a frontend developer, expanding skill set and contributions.</li>
            <li>Automated manual tasks for account managers with internal tools, increasing their efficiency and improving client experience.</li>
            <li>Built user-friendly graphs using c3, providing clear visualizations of key data for improved decision-making.</li>
            <li>Designed microservices capable of handling +1,000's of real time requests per second</li>
          </ul>
        </div>
      </WorkExperience >
      <WorkExperience
        title="Front End Developer"
        employer="Green Brick Labs Inc"
        fromDate="2018"
        toDate="2017"
      >
        <div className={`${listClasses}`}>
          <ul className="list-disc leading-tight">
            <li>Joined during creation of new website.</li>
            <li>Wrote proxy between application and bitcoin network</li>
          </ul>
        </div>
      </WorkExperience >
    </>
  )
}