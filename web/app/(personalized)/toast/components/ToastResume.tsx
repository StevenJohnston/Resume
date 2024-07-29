import DefaultEducation from "@/app/(personalized)/components/DefaultEducation";
import DefaultTechnologies from "@/app/(personalized)/components/DefaultTechnologies";
import DefaultWorkExperience from "@/app/(personalized)/components/DefaultWorkExperience";
import ToastAbout from "@/app/(personalized)/toast/components/ToastAbout";
import Resume from "@/app/_components/Resume";
import { ResumePageProps } from "@/app/_lib/resume-pdf";

export default function ({ isPdf }: ResumePageProps) {
  return (
    <Resume
      isPdf={isPdf}
      about={<ToastAbout isPdf={isPdf} />}
      workExperience={<DefaultWorkExperience isPdf={isPdf} />}
      eduction={<DefaultEducation />}
      technologies={<DefaultTechnologies />}
    />
  );
}
