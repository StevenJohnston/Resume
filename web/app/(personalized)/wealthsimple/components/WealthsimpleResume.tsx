import WealthsimpleAbout from "@/app/(personalized)/wealthsimple/components/WealthsimpleAbout";
import WealthsimpleTechnologies from "@/app/(personalized)/wealthsimple/components/WealthsimpleTechnologies";
import WealthsimpleWorkExperience from "@/app/(personalized)/wealthsimple/components/WealthsimpleWorkExperience";
import DefaultEducation from "@/app/(personalized)/components/DefaultEducation";
import Resume from "@/app/_components/Resume";
import { ResumePageProps } from "@/app/_lib/resume-pdf";
import WealthsimpleProjects from "@/app/(personalized)/wealthsimple/components/WealthsimpleProjects";

export default function WealthsimpleResume({ isPdf }: ResumePageProps) {
  return (
    <Resume
      isPdf={isPdf}
      tight={isPdf}
      about={<WealthsimpleAbout title={"Software Engineer"} isPdf={isPdf} />}
      workExperience={<WealthsimpleWorkExperience isPdf={isPdf} />}
      projects={<WealthsimpleProjects isPdf={isPdf} />}
      eduction={<DefaultEducation />}
      technologies={<WealthsimpleTechnologies />}
    />
  );
}
