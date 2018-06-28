import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SyncIcon from "@material-ui/icons/Sync";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative"
  },
  toolbar: theme.mixins.toolbar
});

class PermanentDrawer extends React.Component {
  render() {
    const { classes, syncList, width } = this.props;

    const list = syncList.map((syncObj, i) => {
      return (
        <ListItem button>
          <ListItemIcon>
            <SyncIcon />
          </ListItemIcon>
          <ListItemText primary={syncObj.name} />
        </ListItem>
      );
    });

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        width={width}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <div key="sync-objects">{list}</div>
        </List>
      </Drawer>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    syncList: state.syncList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(PermanentDrawer)
);
