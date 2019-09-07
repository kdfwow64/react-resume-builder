import { makeStyles } from '@material-ui/core';

export const appStyles = makeStyles(theme => ({
	main: {
		backgroundColor: '#f7f7f7' || theme.palette.grey,
        minHeight: '100vh'   
    },
    content: {
		maxWidth:1440
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