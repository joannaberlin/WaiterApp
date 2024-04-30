import { API_URL } from '../config';

// selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) =>
	tables.find((table) => table.id === tableId);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const DELETE_TABLE = createActionName('DELETE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');

// action creators
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
			.then((table) => {
				console.log(table);
				dispatch(updateTable(id, table));
			});
	};
};
export const updateTablesApi = (table) => {
	console.log(table);
	return (dispatch) => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(table),
		};

		fetch(API_URL + '/tables', options)
			.then((res) => res.json())
			.then((table) => {
				console.log('table', table);
				dispatch(addTable(table));
			});
	};
};
export const deleteTable = (payload) => ({ type: DELETE_TABLE, payload });
export const addTable = (payload) => ({ type: ADD_TABLE, payload });

const tablesReducer = (statePart = [], action) => {
	switch (action.type) {
		case UPDATE_TABLES:
			return [...action.payload];
		case UPDATE_TABLE:
			return statePart.map((table) =>
				table.id === action.id ? action.payload : table
			);
		case DELETE_TABLE:
			return statePart.filter((table) => table.id !== action.payload);
		case ADD_TABLE:
			return [...statePart].push(action.payload);
		default:
			return statePart;
	}
};
export default tablesReducer;
