import React from 'react';

import styles from './LoremItem.module.css';

const LoremItem = (props) => {
  return (
    <li id={`lorem-item__${props.id}`} className={styles['lorem-item']}>
        {props.text}
    </li>
  )
}

export default LoremItem