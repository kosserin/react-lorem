import React, {useRef, useContext} from 'react';

import { LoremContext } from '../../../store/lorem-context';

import styles from './LoremForm.module.css';

const LoremForm = () => {

  const numberRef = useRef();
  const ctx = useContext(LoremContext);
  
  const formSubmitHandler = e => {
    e.preventDefault();
    const refValue = numberRef.current.value;
    ctx.generateParagraphs(refValue);
  }

  return (
    <form onSubmit={formSubmitHandler} className={styles['lorem-form']}>
        <label htmlFor='numberValue'>Enter number of paragraphs:</label>
        <input ref={numberRef} type="number" defaultValue={5} />
        <button type='submit'>Generate</button>
    </form>
  )
}

export default LoremForm