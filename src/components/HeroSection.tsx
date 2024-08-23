import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to the Nuclear Graffiti Store
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Explore our collection of graffiti images with nuclear themes
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
