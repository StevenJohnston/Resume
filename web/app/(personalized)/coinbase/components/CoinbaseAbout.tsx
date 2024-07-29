import About from "@/app/_components/About"

interface CoinbaseAboutProps {
  title: string
  isPdf: boolean
}

export default function CoinbaseAbout({ title, isPdf }: CoinbaseAboutProps) {
  return (
    <About
      title={title}
      isPdf={isPdf}
    >
      <p>
        With 8+ years of experience, I'm a versatile full stack developer with professional experience creating software solutions in both the cryptocurrency and financial sectors. Recently at Atomic VC, I honed my ability to rapidly onboard and contribute to diverse product portfolios, leveraging my technical expertise (front-end, back-end, DevOps) to guide projects towards success. I'm driven to new technologies and always looking for an opportunity to learn.
      </p>
    </About>
  )
}