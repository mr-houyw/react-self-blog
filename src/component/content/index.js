import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      position: 'relative'
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    }
  })
)

export default function Content(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    // setOpen(false);
    props.parent.learnMore(false)
  };
  return (
    <div>
      <Dialog fullScreen open={props.open} onClose={handleClose} >
        <DialogTitle id="scroll-dialog-title">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.content.title}
            </Typography>
          </Toolbar>
        </DialogTitle>
        <DialogContent>

          {props.content.content ? props.content.content.map((item, index) => (
            <DialogContentText
              key={index}
              id="scroll-dialog-description"
              tabIndex={2}
            > {item}</DialogContentText>
          )) : ''}

        </DialogContent>
      </Dialog>
    </div>
  );
}