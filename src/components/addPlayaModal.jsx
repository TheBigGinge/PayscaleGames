import React from 'react';
import { connect } from 'react-redux';
import Modal from './modal';
import { closeAddPlayaModal, addPlaya, updateNewPlayaName, updateNewPlayaEmail,
		 updateNewPlayaImage } from '../actions/index';

let AddPlayaModal = ({ dispatch }) => {
	let formId = 'addPlayaForm';
	return <div className="add-Playa-modal-wrapper">
		<Modal closeMethod={() => dispatch(closeAddPlayaModal())}
			   okMethod={(e) => {}}
			   okText='Add Playa'
			   title='Add a Playa'
			   formId={formId}>
			<form id={formId} className="form-horizontal" onSubmit={(e) => dispatch(addPlaya(e))}>
			  <div>
			    <label htmlFor="playaName" className="control-label">Name</label>
			    <input onChange={(e) => dispatch(updateNewPlayaName(e))} type="text" className="form-control" id="playaName" name="playaTitle" placeholder="ex) Ashley Dillinger" />
			  </div>
			  <div>
			    <label htmlFor="playaEmail" className="control-label">Email</label>
			    <input onChange={(e) => dispatch(updateNewPlayaEmail(e))} type="email" className="form-control" id="playaEmail" placeholder="ex) ashley.dillinger@payscale.com" />
			  </div>
			  <div>
			    <label htmlFor="playaImage" className="control-label">Image Link</label>
			    <input onChange={(e) => dispatch(updateNewPlayaImage(e))} type="text" className="form-control" id="playaImage" placeholder="ex) https://cdn.shopify.com/s/files/1/0740/4855/products/ONUW-BOX-COVER.jpg?v=1461752063" />
			  </div>
			</form>
		</Modal>
	</div>;
}

export default AddPlayaModal;