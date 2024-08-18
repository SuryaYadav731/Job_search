import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
     <section className='page notfound'>
        <div className='context'>
            <img src='/notfound.png' alt='notfound'/>
            <Link to= {"/"}>Return To HOME</Link>
        </div>
     </section>
  );
};

export default NotFound;
