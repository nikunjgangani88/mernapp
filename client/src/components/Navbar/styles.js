import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: '30px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 50px',
	},
	appBar2: {
		borderRadius: 10,
		margin: '20px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px',
	},
	heading: {
		color: '#41B3A3',
		textDecoration: 'none',
	},
	image: {
		marginLeft: '15px',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '400px',
	},
	profile: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '400px',
	},
	userName: {
		display: 'flex',
		alignItems: 'center',
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
	logout: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: '#C38D9E',
	},
	signin: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: '#41B3A3',
	},
}));
