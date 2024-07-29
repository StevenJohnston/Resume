import About from "@/app/_components/About"

interface DefaultAboutProps {
  title: string
  isPdf: boolean
}

export default function DefaultAbout({ title, isPdf }: DefaultAboutProps) {
  return (
    <About
      title={title}
      isPdf={isPdf}
    >
      <p>
        With 8+ years of experience, I'm a versatile full stack developer adept at building software solutions for early-stage companies. I have a strong foundation in both front-end and back-end development, as well as experience with DevOps practices (AWS, CDK, CI/CD, Git). This allows me to seamlessly translate concepts into scalable products while offering strategic technical guidance.
      </p>
    </About>
  )
}