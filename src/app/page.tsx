import { DocumentUpload } from '../components/document-upload'
import { FAQ } from '../components/faq'

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold mb-4">Welcome to Crisis Claim</h1>
        <p className="text-lg text-gray-600 mb-8">
          Upload your insurance documents to check if they will be accepted and learn about any necessary changes.
        </p>
        <DocumentUpload />
      </section>
      <FAQ />
    </div>
  )
}

