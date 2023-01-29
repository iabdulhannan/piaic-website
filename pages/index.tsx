import Head from 'next/head'
import React from "react";
import {Box} from "@chakra-ui/react";
import Hero from "piaicRoot/components/Hero";
import ProgramCarousel from "piaicRoot/components/ProgramCarousel";

export default function Home() {
  return (
    <>
      <Head>
        <title>PIAIC</title>
        <meta name="description" content="Presidential Initiative for Artificial Intelligence & Computing"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="image/x-icon" href={'/favicon.png'}/>
      </Head>
      <main>
        <Box textAlign="center" fontSize="xl" scrollBehavior={'smooth'}>
          <Hero/>
          <ProgramCarousel/>
        </Box>
      </main>
    </>
  );
}
