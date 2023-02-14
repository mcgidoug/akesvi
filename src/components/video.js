import * as React from "react"
import { graphql } from "gatsby"
import { Section, Container, Heading, Kicker, Feature, Box } from "./ui"

export default function Video(props) {
  return (
    <Section>
      <Container width="fullbleed">
        <Box background="muted" center paddingY={5} radius="large">
          <Heading>
            {props.text && <Kicker>{props.text}</Kicker>}
            {props.heading}
          </Heading>
          <Feature src={props.url} frameBorder="0" height="400"></Feature>
        </Box>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageVideoContent on HomepageVideo {
    id
    heading
    text
    url
  }
`
