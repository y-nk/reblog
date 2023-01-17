declare module "*.md" {
  import type { FC } from 'react'

  const html: FC;
  export const metadata: Record<string, string>
  export default html;
}

declare module "*.mdx" {
  import type { FC } from 'react'

  const html: FC<{ components?: Record<string, FC> }>;
  export const metadata: Record<string, string>
  export default html;
}
