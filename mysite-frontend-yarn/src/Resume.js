import React from 'react'

// import { Grid } from 'semantic-ui-react'
import { Document, Page } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'

import ResumePDF from './images/Briana-Baker-resume.pdf'

const Resume = (props) => {
  return(
    <div className="ui grid">
      <div className="six wide column">
          <Document file={ResumePDF}>
            <Page pageNumber={1}/>
          </Document>
      </div>
    </div>
  )
}

export default Resume
