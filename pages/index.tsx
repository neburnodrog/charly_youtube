import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getComments } from '../getComments';

export default function Home() {
  const [url, setUrl] = useState('');
  const [comments, setComments] = useState<any[] | null>(null);
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    if (videoId !== '') {
      console.log('IN useEffect: ', { videoId });
      getComments(videoId)
        .then(resp => {
          setComments(resp.items);
        })
        .catch(err => console.log(err));
    }
  }, [videoId]);

  const handleClick = async () => {
    let match = url.split('?v=')[1];
    if (!match) return;
    let vidId = match.split('&')[0];
    if (!vidId) return;
    setVideoId(vidId);
  };

  const renderMain = () => {
    return !comments ? (
      <main className={styles.main}>
        <h4 className={styles.title}>El comentarista de Charlos Geppert</h4>
        <label htmlFor="url">
          Introduce aquí la url del video de YouTube:{' '}
        </label>
        <input
          type="text"
          name="url"
          id="url"
          value={url}
          onChange={e => setUrl(e.currentTarget.value)}
        />
        <button onClick={handleClick}>Amoh a pilla loh comentarioh</button>
      </main>
    ) : (
      <main>
        <h1>Hay comentarios</h1>
      </main>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>El comentarista de Charles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {renderMain()}

      <footer className={styles.footer}>
        Created by{' '}
        <Image src="/15_2LVLn.jpg" alt="Ruben" width={40} height={30} />
        <a href="https://github.com/neburnodrog/charly_youtube">
          Ruben Gordon Karlsson
        </a>
      </footer>
    </div>
  );
}
