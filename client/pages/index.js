import { useState } from 'react';
import Head from 'next/head';

const Home = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await fetch(`https://bikinibag.herokuapp.com/`, {
      method: 'post',
      body: [`${encodeURIComponent('email')}=${encodeURIComponent(email)}}`],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    });
    const response = await data.json();
    console.log('response:', response);
    if (response._id) {
      setSent(true);
    }
  };

  const handleChange = ({ target: { value } }) => {
    setEmail(value)
  };

  return (
    <div className="container">
      <Head>
        <title>Bikini Bag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          BIKINIBAG
        </h1>

        <p className="description">
          COMING SOON
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="field2">
            <input value={email} onChange={handleChange} placeholder="email" type="email" className="input-field" name="field2" />
          </label>
          <button type="submit" className="sign-up">Notify me!</button>
        </form>
        {sent && (
          <p className="description">
            SEE YOU SOON!
          </p>
        )}
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: pink;
        }

        form {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .sign-up {
          background-color: transparent;
          color: white;
          border-radius: 4px;
          border: 1px solid white;
          flex: 0;
          min-width: 100px;
          height: 56px;
          font-size: 16px;
          font-family: BenchNine, sans-serif;
        }

        input {
          width: 100%;
          flex: 1;
          height: 56px;
          position: relative;
          padding: 0px 16px;
          border: 1px solid white;
          border-radius: 4px;
          font-family: BenchNine, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: normal;
          background-color: transparent;
          color: black;
          outline: none;
          box-shadow: 0px 4px 20px 0px transparent;
          transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out, 0.1s padding ease-in-out;
          -webkit-appearance: none;
        }

        .input-field::-webkit-input-placeholder {
          color: black;
        }

        form {
          display: flex;
        }

        button {
          margin: 0 5px;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 10rem;
          font-weight: 300;
        }

        .title,
        .description {
          text-align: center;
          color: white;
        }

        .description {
          line-height: 1.5;
          font-size: 3rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export default Home
