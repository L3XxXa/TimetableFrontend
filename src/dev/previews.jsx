import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import DefaultPage from "../pages/default/DefaultPage";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/DefaultPage">
        <DefaultPage/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews