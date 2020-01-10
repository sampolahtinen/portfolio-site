import React from "react"
import styled from "styled-components"
import { colors } from "../styles/colors"
import IconPicker from "./IconPicker"
import { typography } from "../styles/typograhpy"

interface SkillTagProps {
  title: string
}

const Container = styled.div`
  position: relative;
  margin-right: 0.8em;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border-radius: 16px;
  background-color: ${colors.grey};
  padding: 0.5em 1.6em;
`

const Title = styled.span`
  position: relative;
  color: ${colors.white};
  font-size: ${typography.fontSize.normal};
`

const SkillTag = ({ title }: SkillTagProps) => {
  return (
    <Container>
      <IconPicker title={title} />
      <Title>{title}</Title>
    </Container>
  )
}

export default SkillTag
