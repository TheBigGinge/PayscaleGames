import Griddle from 'griddle-react';
import React from 'react';
import { connect } from 'react-redux';
import { hideXwingGrid } from '../actions/';


const metaData = [
    {
        'columnName': 'userName',
        'displayName': 'Pilot',
        'visible': true
    },
    {
        'columnName': 'wins',
        'displayName': 'Wins this Cycle',
        'visible': true
    },
    {
        'columnName': 'losses',
        'displayName': 'Losses this Cycle',
        'visible': true
    },
    {
        'columnName': 'leagueWins',
        'displayName': 'Total League Wins',
        'visible': true
    }
];


const tempData = [
	{
		'userName': 'Ryan Moore',
		'wins': 16,
		'losses': 0,
		'leagueWins': 1
	},
	{
		'userName': 'Carson Hopper',
		'wins': 4,
		'losses': 4,
		'leagueWins': 1
	},
	{
		'userName': 'Paul Vogl',
		'wins': 4,
		'losses': 4,
		'leagueWins': 0
	},
	{
		'userName': 'Chris  Norris',
		'wins': 4,
		'losses': 4,
		'leagueWins': 0
	},
	{
		'userName': 'Dylan (Dice) Emde',
		'wins': 4,
		'losses': 4,
		'leagueWins': 0
	}
];


let XwingScoreGrid = ({ dispatch }) => (
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
	        <a href="#" onClick={() => dispatch(hideXwingGrid())} ><img className="center-block" src="../images/xwingButtonOne.jpeg" ></img></a>
	      </div>
	    </div>
	  </div>
	</div>
	</div>

);

XwingScoreGrid = connect()(XwingScoreGrid);
export default XwingScoreGrid;
