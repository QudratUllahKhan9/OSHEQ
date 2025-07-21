import React from 'react'
import CertificateVerification from '../components/CertificateVerification/CertificateVerification'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Verification() {
  return (
    <div>
      <Header/>
      <main>
      <CertificateVerification/>
      </main>
      <Footer/>
    </div>
  )
}
