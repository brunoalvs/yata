import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest, response: NextResponse) {
  // const data = await db.collection('collection').doc(id).get();

  console.log('request', request)
  console.log('response', response)

  const data = { name: 'John Doe' }

  return NextResponse.json({ data })
}
