import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
		},
	},
	paper: {
		padding: theme.spacing(2),
	},
	form: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	fileInput: {
		width: '97%',
		margin: '10px 0',
	},
	buttonSubmit: {
		marginBottom: 10,
		backgroundColor: '#41B3A3',
		color: 'white',
	},
	clear: {
		backgroundColor: '#E27D60',
		color: 'white',
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid grey',
		boxShadow: theme.shadows[7],
		padding: theme.spacing(2, 4, 3),
	},
	fab: {
		position: 'absolute',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
}));
