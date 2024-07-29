import About from "@/app/_components/About"

interface ToastAboutProps {
  isPdf: boolean
}

export default function ToastAbout({ isPdf }: ToastAboutProps) {
  return (
    <About
      title="Full Stack Engineer"
      isPdf={isPdf}
    >
      <p>
        With 8+ years of experience, I'm a versatile full stack developer with experience creating software solutions in both the restaurant and financial sectors. Recently at Atomic VC, I honed my ability to rapidly onboard and contribute to diverse product portfolios, leveraging my technical expertise (front-end, back-end, DevOps) to guide projects to success. I'm driven to new technologies and always looking for an opportunity to learn.
      </p>
    </About>
  )
}