import React, {Component} from 'react';
import { connect } from 'react-redux';
import { closeMasseuseModal } from '../actions/masseuseModal';
import ReactStars from 'react-stars'

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';


class MasseuseModal extends Component {

  render(){
    const {masseuse, closeMasseuseModal}  = this.props;
    const S3BUCKET = "https://s3-ap-southeast-1.amazonaws.com/aroma.th/"

    console.log(this.props)


    return <Modal isOpen={this.props.open} onRequestHide={closeMasseuseModal}>
      <ModalHeader>
        <ModalClose onClick={closeMasseuseModal}/>
        <ModalTitle>
          <div> {masseuse.name} </div>
          <ReactStars
            count={5}
            edit={false}
            value={masseuse.stars}
            size={24}
            color2={'#ffd700'} />

        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <div>Phone: <a href={"tel:" + masseuse.number}>{masseuse.number}</a></div>

        <img src={S3BUCKET + masseuse.picture} style={{width:"200px"}}/>

        <h3>massage types:</h3>
        {
          (masseuse.style ? masseuse.style : []).map(
            (m) => <div style={{float:"left", margin:"3px"}}>{m}<br/><img src={S3BUCKET + m + ".jpg"} style={{width:"100px"}}/></div>
          )
        }
        <div style={{ display:"block", clear:"both", content:""}}>&nbsp;</div>


      </ModalBody>
      <ModalFooter>
        <button className='btn btn-default' onClick={closeMasseuseModal}>
          Close
        </button>
        <button className='btn btn-primary'>
          BOOK NOW!
        </button>
      </ModalFooter>
    </Modal>
  }
}

function mapStateToProps(state) {
  return {
    open: state.masseuseModal.masseuseModal.open,
    masseuse: state.masseuseModal.masseuseModal.masseuse
  };
}


export default connect(mapStateToProps, {closeMasseuseModal})(MasseuseModal);
