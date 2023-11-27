import '../styles/globals.css'
import Layout from '../component/layout'
import FlowbiteContext from '@/context/flowbite-context'

export default function App({ Component, pageProps }) {
  return(
<>
<FlowbiteContext>
   <Layout> 
  <Component {...pageProps} />
  </Layout> 
  </FlowbiteContext>
  </>
  )
}
