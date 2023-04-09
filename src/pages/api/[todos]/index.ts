import type { NextApiRequest, NextApiResponse } from 'next'

async function fakeServer () {
  type Todo = {
    id: number,
    title: string,
    completed: boolean
  }

  const defaultData: Todo[] = [
    {
      id: 1,
      title: 'Todo 1',
      completed: false
    },
    {
      id: 2,
      title: 'Todo 2',
      completed: false
    }
  ]

  const returnData: Promise<{ status: number, data: Todo[]}> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: defaultData
      })
    }, 2000)
  })

  return returnData
}

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const { query: { todos } } = req
  const response = await fakeServer().then((data) =>  data)

  res.status(200).json(response)
}
