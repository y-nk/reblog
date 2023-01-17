/*
There's a bug which forces us to to this.
When adding pageExtensions to be ['ts', 'tsx', 'md', 'mdx'], webpack doesn't follow
recursively imports starting from the mdx file. A way to test this is to:

1. uncomment the pageExtensions options in next.config.mjs
2. in `app/(slug)/posts.tsx` uncomment the commented part in getPosts function
3. rename/delete this file
4. relaunch the project

What changes is that now next's webpack handles the import of the mdx directly
without passing by this file. It should be seen that the counter isn't blue anymore.
*/
export * from './page.mdx'
export { default as default } from './page.mdx'
