import Technology from "@/app/_components/Technology";

export default function CoinbaseTechnologies() {
  return (
    <>
      <Technology
        title="Languages"
        description="Typescript, Python, GoLang, SQL, Bash"
      />
      <Technology
        title="Technologies"
        description="React, Next.js, Tailwind CSS, Git, Github + Actions, CDK, Terraform, Jenkins, Docker, Datadog, Prometheus, Grafana, Kafka, GraphQL, Prisma, Webflow, LLM, GTP-4"
      />
      <Technology
        title="AWS"
        description="IAM, Route53, Lambda, RDS, Dynamodb, SQS, Elasticseach, S3, CloudWatch, SNS, SQS, CloudFormation"
      />
    </>
  )
}