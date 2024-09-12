import React from 'react'
import Section from '../component/Section'
import Footer from '../component/Footer'

const About = () => {
  return (
    <>
      <Section
        title="About Us"
        subtitle="Our Story"
        text="At MyShop, we are dedicated to providing you with an exceptional shopping experience. Our curated collection includes the latest trends and top-quality items, ensuring that you find exactly what you're looking for."
        imageSrc="https://media.licdn.com/dms/image/D4D12AQF8NKzCINtp4Q/article-cover_image-shrink_600_2000/0/1689398931729?e=2147483647&v=beta&t=XcNjpvrI953uWLnJKic4pBSkfwDcNAv8_goGOrlIa7s"
        imageAlt="About Us Image"
        reverseOrder={false}
      />
      <div className='fixed bottom-0 w-screen'>
      <Footer />
      </div>
    </>
  )
}

export default About
