import Link from 'next/link';
import Head from 'next/head';
import Layout from './components/layout';
import Alert from './components/alert';
import React,{ useState } from 'react';

export default function FirstPost() {
    const {count1,setCount1}=useState(1);
    return (
        <>
            <Alert success>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                {count1+1}
                <Link href="/">
                <a>Back to home</a>
                </Link>
            </h2>
            </Alert>
        </>
      );
  }