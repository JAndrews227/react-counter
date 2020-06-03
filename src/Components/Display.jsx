import React, { useState } from 'react';
import ButtonPad from './ButtonPad';
import { render } from '@testing-library/react';

function Display(props) {
  const [display, setDisplay] = useState(0);

  return (
    <section className='display'>
      <div>
        <h2>
          <i>React Counter</i>
        </h2>
      </div>
    </section>
  );
}

export default Display;
