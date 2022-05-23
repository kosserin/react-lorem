import React, {useContext} from 'react';

import { LoremContext } from '../../../store/lorem-context';
import LoremItem from './LoremItem/LoremItem';

import styles from './LoremList.module.css';

const LoremList = () => {

  const ctx = useContext(LoremContext);

  return (
    <ul className={styles['lorem-list']}>
      {ctx.paragraphs.map(p => {
        return <LoremItem key={p.id} text={p.text} />
      })}
    </ul>
  )
}

export default LoremList