import style from './style.module.css'

export const metadata = {
  title: 'hello-tsx-metadata'
}

export default function Page() {
  return <h1 className={style.page}>hello-tsx</h1>
}
