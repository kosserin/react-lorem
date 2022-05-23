import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <p>This is react project by freecodecamp that I did and you can find code on my github <a href="#">here</a>.</p>
    </header>
  )
}

export default Header