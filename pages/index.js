import { Banner } from '../components/Banner';
import Hero from '../components/Hero';
import { Nav } from '../components/Nav';
import Testimonials from '../components/Testimonials';
import JoinUs from '../components/JoinUs';
import LargeQuote from '../components/LargeQuote';
import Footer from '../components/Footer';
import Head from 'next/head';
import StackedUseCases from '../components/StackedUseCases';

import FAQ from '../components/FAQ';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Temporal.io | Home</title>
      </Head>
      <Banner />
      <Nav />
      <div>
        <Hero />
        <StackedUseCases />
        <LargeQuote />
        <Testimonials />
        <JoinUs />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
