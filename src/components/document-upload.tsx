'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function DocumentUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    // Here you would typically send the file to your server for processing
    // For this example, we'll just simulate a response
    setTimeout(() => {
      setResult("Your document has been accepted. No changes required.")
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="document">Upload Insurance Document</Label>
        <Input id="document" type="file" onChange={handleFileChange} />
      </div>
      <Button type="submit" disabled={!file}>Check Document</Button>
      {result && (
        <Alert>
          <AlertTitle>Result</AlertTitle>
          <AlertDescription>{result}</AlertDescription>
        </Alert>
      )}
    </form>
  )
}

