import CoinbaseAbout from "@/app/(personalized)/coinbase/components/CoinbaseAbout";
import CoinbaseTechnologies from "@/app/(personalized)/coinbase/components/CoinbaseTechnologies";
import CoinbaseWorkExperience from "@/app/(personalized)/coinbase/components/CoinbaseWorkExperience";
import DefaultEducation from "@/app/(personalized)/components/DefaultEducation";
import Resume from "@/app/_components/Resume";
import { ResumePageProps } from "@/app/_lib/resume-pdf";

export default function CoinbaseResume({ isPdf }: ResumePageProps) {
  return (
    <Resume
      isPdf={isPdf}
      about={<CoinbaseAbout title={"Software Engineer"} isPdf={isPdf} />}
      workExperience={<CoinbaseWorkExperience isPdf={isPdf} />}
      eduction={<DefaultEducation />}
      technologies={<CoinbaseTechnologies />}
    />
  );
}
