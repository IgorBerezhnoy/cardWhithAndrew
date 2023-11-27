import { useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { useGetDeckByIdQuery, useGetDecksQuery } from '@/services/base-api'

export const Decks = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading } = useGetDecksQuery()
  const { data: deckById } = useGetDeckByIdQuery({ id: 'clpgfu8fh054cwv2qx449vy3g' })

  console.log(deckById)
  if (isLoading) {
    return <Typography as={'h1'}>Loading</Typography>
  }
  if (error) {
    return <Typography as={'h1'}>Error</Typography>
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Updated</TableHeadCell>
            <TableHeadCell>Author</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.items.map(deck => {
            return (
              <TableRow key={deck.id}>
                <TableCell>{deck?.name}</TableCell>
                <TableCell>{deck?.cardsCount}</TableCell>
                <TableCell>{new Date(deck?.updated).toLocaleDateString()}</TableCell>
                <TableCell>{deck?.author.name}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
