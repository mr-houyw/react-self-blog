import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import { deepOrange } from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React, { useState } from "react";
import "../Index/Index.scss";
import Editor from "./editor";
const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  toolbarP: {
    display: "flex",
    alignItems: " center"
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  chip: {
    borderRadius: "8px",
    "&:first-child": {
      // paddingLeft: '8px'
    }
  },

  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}));
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
  event.persist();
  console.log(event);
}
export default function Admin() {
  const classes = useStyles();
  const initState = {
    editor: false,
    current: null
  };
  const [bar, setBar] = useState(initState);
  // const isEditor = () => setBar({ editor: true, current: '编辑' });
  const selectBar = (t) => {
    switch (t) {
      case '编辑':
        return setBar({ editor: true, current: '编辑' })
      default:
        return setBar({ editor: false, current: null })
    }
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      {console.log(bar)}
      <AppBar position='fixed' className={classes.appBar}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Chip
            component='button'
            size='small'
            label='首页'
            variant='outlined'
            className={classes.chip}
            onClick={handleClick}
          />
          {
            bar.current ? <Chip
              size='small'
              label={bar.current}
              variant='outlined'
              className={classes.chip}
              onClick={handleClick}
            /> : null
          }

        </Breadcrumbs>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper
        }}
        anchor='left'
      >
        <div className={classes.toolbar} className={classes.toolbarP}>
          <Avatar className={classes.avatar}>H</Avatar>
        </div>
        <Divider />
        <List>
          {["编辑"].map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={selectBar.bind(this, text)}
              color='#ff5722'
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {bar.editor ? <Editor /> : <div></div>}
      </main>
    </div>
  );
}
