import Head from 'next/head';
import LandingPage from "./../components/LandingPage";

export default () => (
  <>
    <Head>
      <title>Xanadu</title>
      <meta name="short_name" content="Xanadu short name"/>
      <meta name="name" content="Xanadu"/>
      <meta name="description" content="Xanadu description"/>
      <meta name="generator" content="Xanadu"/>
      <meta name="keywords" content="Blockchain, cryptocurrency, Ethereum, Bitcoin"/>
      <meta name="author" content="Chris Seifert"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@hello_amigo"/>
      <meta name="twitter:title" content="Xanadu"/>
      <meta name="twitter:description" content="Xanadu description"/>
      <meta name="twitter:creator" content="@chriscyber2000"/>
      <meta name="twitter:image" content="https://pbs.twimg.com/profile_banners/826747074255417344/1542032600/600x200"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://amigo.id/"/>
      <meta property="og:title" content="Xanadu"/>
      <meta property="og:description" content="Xanadu description"/>
      <meta property="og:site_name" content="Xanadu"/>
      <meta property="og:image" content="https://pbs.twimg.com/profile_banners/826747074255417344/1542032600/600x200"/>
      <meta name="theme-color" content="#000000"/>
      <meta content="text/html; charset=UTF-8" name="Content-Type" />
      //<link rel="shortcut icon" href="/static/favicon.ico"/>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <LandingPage />
  </>
)
