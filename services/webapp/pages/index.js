import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Sei Whale Service!!</h1>
      <button onClick={() => {
        fetch('http://localhost:3000/').then(r => r.json()).then(res => {
          console.log(res);
        });
      }}>click</button>
    </div>
  )
}
