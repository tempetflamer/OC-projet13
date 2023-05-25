import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import './Home.scss'
import Layout from '../../components/Layout/Layout'
import Hero from '../../components/Hero/Hero'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import { FEATURES_CARDS_CONTENT } from '../../data/data.js'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {FEATURES_CARDS_CONTENT.map(({ id, imgSrc, imgAlt, title, description }) => (
          <FeatureCard key={id} imgSrc={imgSrc} imgAlt={imgAlt} title={title} description={description} />
        ))}
      </section>
    </Layout>
  )
}

Home.propTypes = {}
