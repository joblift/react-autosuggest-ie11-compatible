import styles from './Examples.less';

import React from 'react';
import Basic from 'Basic/Basic';
import MultipleSections from 'MultipleSections/MultipleSections';

export default function Examples() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        Examples
      </h2>
      <Basic />
      <MultipleSections />
    </div>
  );
};