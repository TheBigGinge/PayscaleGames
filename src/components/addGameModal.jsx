import React from 'react';
import { connect } from 'react-redux';
import Modal from './modal';
import { closeAddGameModal, addGame } from '../actions/index';

let AddGameModal = ({ dispatch }) => {
	return <div className="add-game-modal-wrapper">
		<Modal closeMethod={() => dispatch(closeAddGameModal())}
			   okMethod={(e) => dispatch(addGame(e))}
			   okText='Add Game'
			   title='Add a Game'>
			<h2>What a fine Body</h2>
			<form className="form-horizontal">
			  <div>
			    <label for="gameTitle" className="control-label">Title</label>
			    <input type="text" className="form-control" id="gameTitle" placeholder="ex) One Night Ultimate Werewofl" />
			  </div>
			  <div>
			    <label for="gameDescription" className="control-label">Description</label>
			    <textArea type="text" className="form-control" id="gameDescription" placeholder="ex) Like mafia but ultimately only one night with werewolves"></textArea>
			  </div>
			  <div>
			    <label for="gameImage" className="control-label">Image Link</label>
			    <input type="text" className="form-control" id="gameImage" placeholder="ex) https://cdn.shopify.com/s/files/1/0740/4855/products/ONUW-BOX-COVER.jpg?v=1461752063" />
			  </div>
			</form>
		</Modal>
	</div>;
}

export default AddGameModal;