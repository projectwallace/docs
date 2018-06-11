import NextHead from 'next/head'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
  <NextHead>
    <title>{props.title || ''} - Docs - Project Wallace</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </NextHead>
)

export default Head
