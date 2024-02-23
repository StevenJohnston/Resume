import WorkExperience from "@/app/_components/WorkExperience"
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Education from "@/app/_components/Education";
import Technology from "@/app/_components/Technology";
import GithubIcon from "@/app/_components/github-outline.svg"
import Linked from "@/app/_components/linkedin-outline.svg"

interface ResumeProps {
    isPdf?: boolean
}

const Resume = ({ isPdf }: ResumeProps) => {
    const textClass = isPdf ? 'text-[10px]' : 'text-sm'

    return (
        <div className="px-12 py-8 md:max-w-4xl">
            {/* Header */}
            <div className="mb-2 flex flex-row">
                <div className="mr-6 flex flex-col w-1/3">
                    <h1 className="text-2xl leading-none font-bold" >STEVEN JOHNSTON</h1>
                    <p className="font-bold flex text-sm text-red-700 mb-2">Fullstack Engineer</p>
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
                <div className="text-sm mt-8 w-2/3">
                    With 8+ years of experience, I'm a versatile full-stack developer adept at building software solutions for early-stage companies. I have a strong foundation in both front-end and back-end development, as well as experience with DevOps practices (AWS, CDK, CI/CD, Git). This allows me to seamlessly translate concepts into scalable products while offering strategic technical guidance.
                </div>
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
                        <div className={`${textClass}`}>
                            <ul className="list-inside list-disc leading-tight">
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
                        <div className={`${textClass}`}>
                            <ul className="list-inside list-disc leading-tight">
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
                        <div className={`${textClass}`}>
                            <ul className="list-inside list-disc leading-tight">
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
                        <div className={`${textClass}`}>
                            <ul className="list-inside list-disc leading-tight">
                                <li>Demonstrated initiative by proactively taking on full-stack tickets shortly after being hired as a frontend developer, expanding skillset and contributions.</li>
                                <li>Automated manual tasks for account managers with internal tools, increasing their efficiency and improving client experience.</li>
                                <li>Built user-friendly graphs using c3, providing clear visualizations of key data for improved decision-making.</li>
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
                <div className="flex flex-row">
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
                        description="React, Next.js, Tailwind CSS, Git, Github + Actions, CDK, Terraform, GraphQL, Prisma, Webflow"
                    />
                    <Technology
                        title="AWS"
                        description="IAM, Route53, Lambda, RDS, Dynamodb, SQS, Elasticseach, S3, CloudWatch, SNS, SQS, CloudFormation"
                    />
                </div>
            </div>
        </div>
    );
};

export default Resume;
