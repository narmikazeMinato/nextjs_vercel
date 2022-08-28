import Link from 'next/link';
import Head from 'next/head';
import Layout from './components/layout';
import Alert from './components/alert';
import React,{ useState } from 'react';
import Image from "next/image";
import Script from "next/script";

export default function Sug() {
    const {count1,setCount1}=useState(1);
    return (
        <Layout>
            
            <Head>
                <title>First Post</title>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
            </Head>
            <Image src="/images/profile.jpg" height={144} width={144}/>
         
            
        </Layout>
      );
  }