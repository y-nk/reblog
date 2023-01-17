import type { FC } from "react"

import { readdir } from "fs/promises"
import { pathExistsSync } from "fs-extra"
import { dirname } from "path"

const __dirname = dirname(new URL(import.meta.url).pathname)

const IGNORE_FILES = ['layout.tsx', 'posts.ts']

type Post = {
  default: FC,
  metadata: any,
}

export async function getSlugs() {
  return (await readdir(__dirname))
    .filter(slug => !IGNORE_FILES.includes(slug))
}

export async function getPosts() {
  const slugs = await getSlugs()

  const posts: Record<string, Post> = {}

  await Promise.all(
    slugs.map(slug => (
      getPost(slug).then(post => posts[slug] = post)
    ))
  )

  return posts
}

export async function getPost(slug: string) {
  /*
    const page = [
      'page.mdx',
      'page.md',
      'page.tsx',
      'page.ts',
    ].filter(candidate => pathExistsSync(`${process.cwd()}/app/(slug)/${slug}/${candidate}`))
  */

  const page = 'page'

  try {
    return import(/* webpackMode: "eager" */ `./${slug}/${page}`)
  } catch (err) {
    console.log(err)
    return {}
  }
}
