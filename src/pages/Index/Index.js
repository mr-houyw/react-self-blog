import {
  Avatar, Button, Card, CardActions, CardHeader, Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import avatar from '../../assets/images/avatar.jpg';
import './Index.scss';

// import {  } from "@material-ui/icons";
const userStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  content: {
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

function Index(props) {
  const classList = props.classList || 'index-box  index-box--flex'
  const classPaper = props.classPaper || 'paper'
  const children = props.children
  const clasChild = props.classChild
  const subheader = props.subheader
    || (
      <Typical
        key="f"
        loop={Infinity}
        steps={['谁终将声震人间，必长久深自缄默', 2000, '谁终将点燃闪电，必长久如云漂泊', 2000]}
        wrapper="span"
      />
    )
  const navBar = props.navBar || 'flex flex--row'
  const classes = userStyles()
  return (
    <div
      className={classList}
    >
      <Card className={classPaper}>
        <CardHeader
          avatar={(
            <Avatar
              alt="Remy Sharp"
              className={`center avatar--roate ${classes.large} `}
              src={avatar}
            />
          )}
          classes={{
            root: classes.root,
            content: classes.content,
          }}
          style={{ padding: '0', fontFamily: 'Long Cang' }}
          subheader={subheader}
          title={(
            <Typography
              component="h5"
              variant="h5"
            >
              Houyw
            </Typography>
          )}
        />
        <CardActions
          className={navBar}
        >
          <Button
            color="primary"
            fullWidth
            size="small"
            variant="contained"
          >
            <Link to="/">
              Home
            </Link>
          </Button>
          <Button
            color="primary"
            fullWidth
            size="small"
            variant="contained"
          >
            <Link to="/home">
              blog
            </Link>
          </Button>
          <Button
            color="primary"
            fullWidth
            size="small"
            variant="contained"
          >
            <Link to="/about">
              about
            </Link>
          </Button>
        </CardActions>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          paddingTop: '50px',
          paddingBottom: '50px'
        }}>
          {children}
        </div>
      </Card>
    </div>
  )
}
export default Index