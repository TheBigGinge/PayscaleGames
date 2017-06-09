import React from 'react';
import '../../css/modal.scss';

let Modal = ({ closeMethod, okMethod, okText, title, formId, children }) => {
	return <div className="modal-wrapper">
		<h1>{title}</h1>
		{ children }
		<a className="close-modal" onClick={() => closeMethod()}>Cancel</a>
		<button className="btn btn-default ok-button" form={formId} onClick={() => okMethod()}>{okText}</button>
	</div>;
};

export default Modal;

