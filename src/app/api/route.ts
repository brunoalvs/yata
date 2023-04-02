import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name') || 'brunoalvs'
  const response = await fetch(`https://api.github.com/users/${name}`)

  if (!response.ok) {
    return NextResponse.error()
  }

  const data = await response.json()
  return NextResponse.json(data)
}
