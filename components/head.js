import NextHead from 'next/head'

const defaultDescription = ''

const Head = (props) => (
  <NextHead>
    <title>{props.title || ''} - Project Wallace</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </NextHead>
)

export default Head
