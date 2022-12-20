import { API_URL } from '../config';

export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) =>
	tables.find((table) => table.id === tableId);

const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const updateTable = (id, payload) => ({
	type: UPDATE_TABLE,
	id,
	payload,
});
export const fetchTables = () => {
	return (dispatch) => {
		fetch(API_URL + '/tables')
			.then((res) => res.json())
			.then((tables) => dispatch(updateTables(tables)));
	};
};
export const updateTablesRequest = (id, table) => {
	return (dispatch) => {
		const options = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(table),
		};

		fetch(API_URL + '/tables/' + id, options)
			.then((res) => res.json())
			.then((table) => dispatch(updateTable(id, table)));
	};
};

const tablesReducer = (statePart = [], action) => {
	switch (action.type) {
		case UPDATE_TABLES:
			return [...action.payload];
		case UPDATE_TABLE:
			return statePart.map((table) =>
				table.id === action.id ? action.payload : table
			);
		default:
			return statePart;
	}
};
export default tablesReducer;
