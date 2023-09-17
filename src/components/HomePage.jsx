import React, { useState } from 'react'
import TypedHeader from './typedHeader/TypedHeader.jsx'
import styles from './styled.module.scss'
import CanvasAnimation from './mainCanvas/Canvas.jsx'
import Arrow from './arrow/Arrow.jsx'
import { Parallax } from 'react-scroll-parallax'
import InteractionTable from './interactionTable/index.jsx'
import Popup from './popup/Popup.jsx'


function HomePage() {
  const [typeOfPopupContent, setTypeOfPopUpContent] = useState(null) // 'about', 'skills', 'projects' , null


  return (
    <div className={styles.wrapper}>
      <Parallax speed={-100}>
        <div style={{height: '100vh'}}>
            <CanvasAnimation/>
            <div className={styles.typed_header}>
                <TypedHeader/>
            </div>
            <Arrow/>
        </div>
        </Parallax>
      <Parallax speed={10}>

        {!!typeOfPopupContent &&
          <div className={styles.overlay} >
            <Popup setTypeOfPopUpContent={setTypeOfPopUpContent} typeOfContent={typeOfPopupContent}/>
          </div>


        }
        <InteractionTable setTypeOfPopUpContent={setTypeOfPopUpContent}/>
      </Parallax>
    </div>

  )
}

export default HomePage