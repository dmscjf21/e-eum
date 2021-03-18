import React, { useState } from 'react';
import styles from './CardAdd.module.css'

const CardAdd = (props) => {
  const [cardImg, setImg] = useState()
  const onImageChange = function (e) {
    setImg(e.target.value)
    setImg(URL.createObjectURL(e.target.files[0]))
  }

  const speakClick= () => {
    console.log('소리쳐')
  }

  return(
    <>
      <div className={styles.add_box}>
        <div className={styles.image_box}>
          <img  src={cardImg} alt="이미지를 등록해주세요" />

          <label  
            className={styles.image_button}
            >
            <img  src="/images/photo-camera.svg" alt="대체이미지" />
            <input type="file" className={styles.image_input} onChange={onImageChange}/>
            
              
          </label>
        </div>
        
        <div className={styles.card_input_box}>
          <input 
            type='text' 
            className={styles.card_input}
            placeholder='카드 이름'/>
          <img onClick={speakClick} src="/images/speaker-filled-audio-tool.svg" alt="대체이미지" />
        </div>
      </div>

      <div className={styles.button_box}>
          <button className={styles.close_button} onClick={props.cardAddClick}>취소</button>
          <button className={styles.add_button} onClick={props.cardAddClick} >등록</button>
      </div>
    </>
  )
}

export default CardAdd;