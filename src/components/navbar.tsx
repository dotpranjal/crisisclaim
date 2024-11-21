import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-blue-600">Crisis Claim</Link>
          <div className="space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/resources" className="text-gray-600 hover:text-blue-600">Resources</Link>
            <Link href="/profile" className="text-gray-600 hover:text-blue-600">Profile</Link>
            <Link href="/login" className="text-gray-600 hover:text-blue-600">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

