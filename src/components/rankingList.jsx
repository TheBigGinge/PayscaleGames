import React from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import '../../css/griddle.scss';

const fakeData = [
	{player: 'Ryan Moore', Wins: 4, Losses: 4},
	{player: 'Ashley Dillinger', Wins: 2, Losses: 4},
	{player: 'Jim Skerrit', Wins: 1, Losses: 4},
	{player: 'Mike Janses', Wins: 3, Losses: 4}
]
{/*
let CustomRowComponent = ({ rowData }) => (
	<div style={{
    	backgroundColor: "#EDEDED",
    	border: "1px solid #777",
		padding: 5,
		margin: 10,
    }}>
    	<h1>{rowData.name}</h1>
    	<ul>
    		<li><strong>State</strong>: {rowData.state}</li>
    		<li><strong>Company</strong>: {rowData.company}</li>
    	</ul>
	</div>
  );

class CustomTableComponent extends React.Component {
	static contextTypes = {
  		components: React.PropTypes.object
	}

	render() {
		return <this.context.components.TableBody />
	}
}

let CustomTableBody = ({ rowIds, Row, style, className }) => (
	<div style={style} className={className}>
	  	{ rowIds && rowIds.map(r => <Row key={r} griddleKey={r} />) }
	</div>
);
*/}

class TableList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <Griddle
			data={fakeData}
			plugins={[plugins.LocalPlugin]}
			components={{}}
		>
		    <RowDefinition>
		    	<ColumnDefinition id="player" title="Player" order={1} width={400} />
		      	<ColumnDefinition id="Wins" title="Wins" />
		      	<ColumnDefinition id="Losses" title="Losses" />
		    </RowDefinition>
		</Griddle>	
	}
}

export default TableList;
