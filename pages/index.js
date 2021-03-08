import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import getJoke from '../lib/api'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const joke = await getJoke()
  return {
    props: {
      allPostsData, joke
    }
  }
}

export default function Home({ allPostsData, joke }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am Max Fontani, an ambitious Web Developer!</p>
        <p>
          This Next.js website is another step towards my ultimate goal. {' '}
          <a href="https://nextjs.org/learn">This tutorial was of great help</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <hr style={{marginTop: "10px", marginBottom: "10px"}} />
      <p>Joke of the day: {joke}</p>
    </Layout>
  )
}
