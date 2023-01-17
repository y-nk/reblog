import Link from 'next/link'

import { getPosts } from '~/app/(posts)/posts'

import styles from './page.module.css'



export const metadata = {
  title: 'main page'
}

export default async function Home() {
  const posts = await getPosts()

  const slugs = Object.entries(posts)
    .filter(([k, v]) => !v.metadata?.draft)
    .map(([k, v]) => [k, v.metadata?.title])

  return (
    <main className={styles.main}>
      <ul>
      {slugs.map(([slug, title]) => (
        <li key={slug}>
          <Link href={`/${slug}`}>{title}</Link>
        </li>
      ))}

      </ul>
    </main>
  )
}
