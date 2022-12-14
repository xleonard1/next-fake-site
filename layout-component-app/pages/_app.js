import '../global.css'
import '../styles/app.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />;
  </Layout>
  )
}

