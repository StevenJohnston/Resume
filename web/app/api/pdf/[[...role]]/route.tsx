import ReactPDF from '@react-pdf/renderer';
import DefaultPage from '@/app/(personalized)/page'
import ToastPage from '@/app/(personalized)/toast/page'
import { MyDoc } from '@/app/_lib/resume-pdf';

export type ResumePage = ({ isPdf }: { isPdf: boolean }) => JSX.Element

const DEFAULT_PAGE = DefaultPage
const ROLE_PAGE_LOOKUP = {
  toast: ToastPage
}

interface RoleRequest {
  params: {
    role: keyof typeof ROLE_PAGE_LOOKUP
  }
}

export async function GET(_req: Request, { params: { role } }: RoleRequest) {
  const RolePage = ROLE_PAGE_LOOKUP[role] || DEFAULT_PAGE
  const myDoc = await MyDoc(RolePage)

  const pdfStream = await ReactPDF.renderToStream(myDoc);

  return new Response(pdfStream as unknown as BodyInit, {
    headers: {
      'Content-Type': 'application/pdf',
    }
  })
}
