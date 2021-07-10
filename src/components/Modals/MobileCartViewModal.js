import React from 'react';

import '../../styles/resturantView.scss';
import BackDrop from './BackDrop';

const mobileCartViewModal = (props) => (
    <div>
      <BackDrop show={props.show} clicked={props.foodViewHandler} />
      <div
      className="FoodViewModal"
      style={{
         transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
         opacity: props.show ? '1': '0'
 
     }}
      >
         {props.children}
     </div>
    </div>
 );

export default mobileCartViewModal;