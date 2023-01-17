export { metadata } from './page.mdx'

import { FC, PropsWithChildren } from 'react'
import Content from './page.mdx'

const h1: FC = ({ children }: PropsWithChildren) => <div className='h1'>{children}</div>

export default function Page() {
  return (
    <Content components={{ h1 }} />
  )
}
