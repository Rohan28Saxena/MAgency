import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import Servicecard from './Servicecard'
import { motion } from "motion/react"

const Services = () => {

    const servicesData=[
        {
            title:'Advertising',
            description:'We turn bold ideas and creativity into powerful digital solution that connect and  engage...',
            icon:assets.ads_icon
        },
         {
            title:'Content Marketing',
            description:'We help businesses attract and engage their audience by creating and sharing valuable content...',
            icon:assets.marketing_icon
        },
        {
            title:'Content Writing',
            description:'Content writing services craft engaging, tailored words that connect brands with their audience and drive results...',
            icon:assets.content_icon
        },
        {
            title:'social media',
            description:'Connecting brands and organization with the world, helping them reach the global audience and market...',
            icon:assets.social_icon
        },

    ]
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.2}}
    
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:test-white'>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1'/>

      <Title title='How can we help ?' desc='From Strategy to execution, we craft digital solution that move your business forward'/>

      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-6'>

        {servicesData.map((service, index)=>(
            <Servicecard key={index} service={service} index={index}/>
        ))}
      </div>

    </motion.div>
  )
}

export default Services
