import ReactPDF from '@react-pdf/renderer';
import DefaultResume from '@/app/(personalized)/components/DefaultResume'
import ToastResume from '@/app/(personalized)/toast/components/ToastResume'
import MyDoc from '@/app/_lib/resume-pdf';

export type ResumePage = ({ isPdf }: { isPdf: boolean }) => JSX.Element

const ROLE_PAGE_LOOKUP = {
  toast: ToastResume
}

interface RoleRequest {
  params: {
    role: keyof typeof ROLE_PAGE_LOOKUP
  }
}

export async function GET(_req: Request, { params: { role } }: RoleRequest) {
  const RoleResume = ROLE_PAGE_LOOKUP[role] || DefaultResume
  const myDoc = await MyDoc(RoleResume)

  const pdfStream = await ReactPDF.renderToStream(myDoc);

  return new Response(pdfStream as unknown as BodyInit, {
    headers: {
      'Content-Type': 'application/pdf',
    }
  })
}
