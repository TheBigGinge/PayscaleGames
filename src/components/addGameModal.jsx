import React from 'react';
import { connect } from 'react-redux';
import Modal from './modal';
import { closeAddGameModal, addGame, updateNewGameTitle, updateNewGameDescription,
		 updateNewGameImage } from '../actions/index';

let AddGameModal = ({ dispatch }) => {
	let formId = 'addGameForm';
	return <div className="add-game-modal-wrapper">
		<Modal closeMethod={() => dispatch(closeAddGameModal())}
			   okMethod={(e) => {}}
			   okText='Add Game'
			   title='Add a Game'
			   formId={formId}>
			<h2>What a fine Body</h2>
			<form id={formId} className="form-horizontal" onSubmit={(e) => dispatch(addGame(e))}>
			  <div>
			    <label htmlFor="gameTitle" className="control-label">Title</label>
			    <input onChange={(e) => dispatch(updateNewGameTitle(e))} type="text" className="form-control" id="gameTitle" name="gameTitle" placeholder="ex) One Night Ultimate Werewolf" />
			  </div>
			  <div>
			    <label htmlFor="gameDescription" className="control-label">Description</label>
			    <textArea onChange={(e) => dispatch(updateNewGameDescription(e))} type="text" className="form-control" id="gameDescription" placeholder="ex) Like mafia but ultimately only one night with werewolves"></textArea>
			  </div>
			  <div>
			    <label htmlFor="gameImage" className="control-label">Image Link</label>
			    <input onChange={(e) => dispatch(updateNewGameImage(e))} type="text" className="form-control" id="gameImage" placeholder="ex) https://cdn.shopify.com/s/files/1/0740/4855/products/ONUW-BOX-COVER.jpg?v=1461752063" />
			  </div>
			</form>
		</Modal>
	</div>;
}

export default AddGameModal;