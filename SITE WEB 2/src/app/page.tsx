import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import BrandSlider from '@/components/BrandSlider'

export default function Home() {
  return (
    <>
      <Hero />
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Nos Produits Phares
        </h2>
        <FeaturedProducts />
      </motion.section>
      
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nos Marques Partenaires
          </h2>
          <BrandSlider />
        </div>
      </section>
    </>
  )
} 