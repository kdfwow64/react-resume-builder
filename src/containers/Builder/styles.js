import { makeStyles } from '@material-ui/core';

export const builderStyles = makeStyles(theme => ({
	main: {
		backgroundColor: '#f7f7f7' || theme.palette.grey,
		minHeight: '100vh'
    },
    paper: {
        padding: 12,
        marginTop: 16,
        marginBottom: 32
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 4
    },
    hidden:{
        display:'none'
    },
    visible:{
        display:'block'
    }
}));