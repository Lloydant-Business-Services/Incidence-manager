import '../styles/globals.css'
import FlowbiteContext from '../context/flowbite-context'
import { Component } from 'react'
import Layout from '../component/layout'
//import Columns from '../component/columns'//
///import UserTable from '@/component/UserTable'

export default function App({ Component, pageProps }) {
  return(
<>
<FlowbiteContext>
   <Layout>
  <Component {...pageProps} />
  </Layout> 
  </FlowbiteContext>
 
  {/* <UserTable /> */}
  </>
  )
}
