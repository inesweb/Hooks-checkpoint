import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { Card, Button} from 'reactstrap';
//import img from  '../assets/add.png'

//import ModalComp from './ModalComp';
import ModalForm from './ModalForm';

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div className='row justify-content-center mt-3'>
      <button className="AddButton"   onClick={() => setShow(true)} show>
      Add Movie
      </button>
      {show && (
        <ModalForm isOpen={show} toggle={toggleShow} handleAdd={handleAdd} />
      )}
    </div>
  );
};
AddMovie.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
export default AddMovie;