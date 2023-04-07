interface PageProps {
  params: {
    id: string
  }
}

export default function Page({ params }: PageProps) {
  return <div>Collection { params.id }</div>
}
