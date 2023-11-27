import { useGetDecksQuery } from '@/services/base-api'

export const Decks = () => {
  const { data, isError, isLoading } = useGetDecksQuery()

  console.log(data)
  console.log(isError)
  console.log(isLoading)

  return <div>decks</div>
}
