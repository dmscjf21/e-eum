import React from 'react';
import styles from './SpeechBoxCard.module.css'

const SpeechBoxCard = (props) => {
  const textValue = props.textValue
  const cardUrl = props.cardUrl
  return(
    <button className={styles.card}>
      <img className={styles.card_image} src={cardUrl} alt="대체이미지"/>
        {textValue}
    </button>
  )
}

export default SpeechBoxCard;