import Head from "next/head"

export default function SEO({
  /**
   * @var string
   */
  title,
  /**
   * @var string
   */
  description,
  /**
   * @var array
   */
  meta = [],
}: {
  title: string
  description?: string
  meta?: Array<{ [key: string]: string }>
}) {
  if (title) {
    meta = meta.concat([
      {
        name: `og:title`,
        content: title,
      },
      {
        name: `twitter:title`,
        content: title,
      },
    ])
  }
  if (description) {
    meta = meta.concat([
      {
        name: "description",
        content: description,
      },
      {
        name: "og:description",
        content: description,
      },
      {
        name: `twitter:description`,
        content: description,
      },
    ])
  }
  return (
    <Head>
      {title ? <title>{title}</title> : null}
      {meta.map((props, i) => (
        <meta key={i} {...props} />
      ))}
    </Head>
  )
}
