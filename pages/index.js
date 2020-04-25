import Head from 'next/head';
import NavSection from "./../components/0NavSection";
import HeroSection from "./../components/2HeroSection";
import ProblemSection from "./../components/4ProblemSection";
import SolutionSection from "./../components/6SolutionSection";
import ProductSection from "./../components/8ProductSection";
import FooterSection from "./../components/10FooterSection";

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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400i,400,500,500i,700,700i|Lato:100,100i,300,300i,400i,400,700,700i,900,900i|Ubuntu+Mono:400i,400,700,700i&amp;subset=latin" />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
    <body class="bg-body text-body font-body">
      <div class="container mx-auto px-4">
        <NavSection />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductSection />
        <FooterSection />
      </div>
    </body>
  </>
)
