import { useMemo, useState } from 'react'

import { TableHeader } from '@/components/ui/table'

export function App() {
  const data = [
    {
      cardsCount: 10,
      createdBy: 'John Doe',
      title: 'Project A',
      updated: '2023-07-07',
    },
    {
      cardsCount: 5,
      createdBy: 'Jane Smith',
      title: 'Project B',
      updated: '2023-07-06',
    },
    {
      cardsCount: 8,
      createdBy: 'Alice Johnson',
      title: 'Project C',
      updated: '2023-07-05',
    },
    {
      cardsCount: 3,
      createdBy: 'Bob Anderson',
      title: 'Project D',
      updated: '2023-07-07',
    },
    {
      cardsCount: 12,
      createdBy: 'Emma Davis',
      title: 'Project E',
      updated: '2023-07-04',
    },
  ]

  type Sort = {
    direction: 'asc' | 'desc'
    key: string
  } | null

  const [sort, setSort] = useState<Sort>(null)

  const columns = [
    {
      key: 'name',
      title: 'Name',
    },
    {
      key: 'cardsCount',
      title: 'Cards',
    },
    {
      key: 'updated',
      title: 'Last Updated',
    },
    {
      key: 'createdBy',
      title: 'Created by',
    },
  ]
  const sortedString = useMemo(() => {
    if (!sort) {
      return null
    }

    return `${sort.key}-${sort.direction}`
  }, [sort])

  console.log(sortedString)

  // ...

  // ...

  return (
    <table>
      <table>
        <TableHeader columns={columns} onSort={setSort} sort={sort} />
      </table>
      <tbody>
        {data.map(item => (
          <tr key={item.title}>
            <td>{item.title}</td>
            <td>{item.cardsCount}</td>
            <td>{item.updated}</td>
            <td>{item.createdBy}</td>
            <td>icons...</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
