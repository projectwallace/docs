import NextHead from 'next/head'

const defaultDescription = ''

const Head = (props) => (
  <NextHead>
    <title>{props.title || ''} - Project Wallace</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" href="https://www.projectwallace.com/css/entry.7b7428e.css" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link rel="preconnect" href="https://gravatar.com" crossorigin="" />
    <link rel="preload" href="https://fonts.gstatic.com/s/teko/v7/zHdV_sp301b8VeOcG1lniQLUuEpTyoUstqEm5AMlJo4.woff2" as="font" type="font/woff2" crossorigin="" />
    <link rel="apple-touch-icon" sizes="180x180" href="https://www.projectwallace.com/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="https://www.projectwallace.com/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="https://www.projectwallace.com/favicon-16x16.png" />
  </NextHead>
)

export default Head
