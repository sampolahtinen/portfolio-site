import React from "react"
import styled from "styled-components"
import PortfolioCard from "./portfolioCard"

const Carousel = styled.div`
  position: relative;
  /* overflow: hidden; */
  width: 100vw;
  height: 100vh;
`
const Viewer = styled.div`
  width: calc(3 * 100vw);
  height: 100vh;
  white-space: nowrap;
`

const PortfolioCarousel = ({ translate }) => {
  return (
    <Carousel className="project-carousel">
      <Viewer
        className="carousel-viewer"
        style={{
          transform: translate,
        }}
      >
        <PortfolioCard
          title="Artland"
          description="Artland is a social platform for art collectors and galleries. Their mission is lowering the barrier of getting into art field through digitalization."
          imageData={"../../artland-landing.png"}
          stack={["React", "GraphQL", "Prisma"]}
        />
        <PortfolioCard
          title="Artland"
          description="Artland is a social platform for art collectors and galleries. Their mission is lowering the barrier of getting into art field through digitalization."
          imageData={"../../artland-landing.png"}
          stack={["React", "GraphQL", "Prisma"]}
        />
        <PortfolioCard
          title="Artland"
          description="Artland is a social platform for art collectors and galleries. Their mission is lowering the barrier of getting into art field through digitalization."
          imageData={"../../artland-landing.png"}
          stack={["React", "GraphQL", "Prisma"]}
        />
      </Viewer>
    </Carousel>
  )
}

export default PortfolioCarousel
