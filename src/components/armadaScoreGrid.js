import Griddle from 'griddle-react';
import React from 'react';
import { connect } from 'react-redux';
import { hideArmadaGrid } from '../actions/';


const metaData = [
    {
        'columnName': 'userName',
        'displayName': 'Pilot',
        'visible': true
    },
    {
        'columnName': 'wins',
        'displayName': 'Overall Wins',
        'visible': true
    },
    {
        'columnName': 'losses',
        'displayName': 'Overall Losses',
        'visible': true
    },
    {
        'columnName': 'leagueWins',
        'displayName': 'Tournament Wins',
        'visible': true
    }
];


const tempData = [
	{
		'userName': 'Ryan Moore',
		'wins': 100,
		'losses': 3,
		'leagueWins': 1
	},
	{
		'userName': 'Will Palas',
		'wins': 3,
		'losses': 97,
		'leagueWins': 0
	},
];


let ArmadaScoreGrid = ({ dispatch }) => (
	<div>
		<Griddle 
	        results={tempData}
	        columns={['userName', 'wins', 'losses', 'leagueWins']}
	        useGriddleStyles={false}
	        tableClassName='table table-hover'
	        settingsToggleClassName='settings'
	        sortAscendingClassName='sort-ascending'
	        sortDescendingClassName='sort-descending'
	        nextClassName='griddle griddle-next'
	        previousClassName='griddle griddle-previous'
	        parentRowCollapsedClassName='parent-row'
	        initialSort='Wins This Cycle'
	        initialSortAscending={true}
	        resultsPerPage={5}
	        showFilter={false}
	        useCustomFilterComponent={false}

	        showSettings={false}
	        filterPlaceholderText='Search...'
	        columnMetadata={metaData}
	    />
    <div className="row" >
      <div className="col-md-4">
        <div style={{margin: '20px'}}>
          <div style={{textAlign: 'center'}}>
            <h3 className="buttonHeader">Go Back</h3>
            <a href="#" onClick={() => dispatch(hideArmadaGrid())}><img className="center-block" src="../images/armada.jpg" style={{width: '300px', height: '168px'}}></img></a>
          </div>
        </div>
      </div>
	</div>
	</div>

);

ArmadaScoreGrid = connect()(ArmadaScoreGrid);
export default ArmadaScoreGrid;
