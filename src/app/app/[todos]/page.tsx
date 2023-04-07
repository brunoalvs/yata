interface PageProps {
  params: {
    todos: string
  }
}

export default function Page({ params }: PageProps) {
  console.log(params)
  return <div>My Post</div>
}
