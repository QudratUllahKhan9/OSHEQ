import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Home/HeroSection'
import Footer from '../components/Footer/Footer'
import Body from '../components/Home/Body'
import BodyCard from '../components/Home/BodyCard'
import QualificationsSection from '../components/Home/QualificationsSection'
import TopCourses from '../components/Home/TopCourses'
import AboutUs from '../components/Home/AboutUs'
import NewsArticles from '../components/Home/NewsArticles'
import Testimonials from '../components/Home/Testimonials'
import FAQs from '../components/Home/FAQs'


export default function Home() {
  return (
    <div>
     <Header/>
     <main>
      <HeroSection/>
      <Body/>
      <BodyCard/>
      <QualificationsSection/>
      <TopCourses/>
      <AboutUs/>
      <NewsArticles/>
      <Testimonials/>
      <FAQs/>
     </main>
     <Footer/>
    </div>
  )
}
