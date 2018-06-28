import React from "react";

export default class TopSyncComponent extends React.Component {
  render() {
    return (
      <div>
        <div style={{ float: "left", width: "33%" }}>Sync Name</div>
        <div
          style={{
            float: "left",
            width: "33%",
            alignment: "center",
            textAlign: "center"
          }}
        >
          <div>Current Sync Mode</div>
          <div>A ------> B</div>
          <div>update</div>
        </div>
        <div
          style={{
            float: "left",
            width: "33%",
            alignment: "center",
            textAlign: "center"
          }}
        >
          <input id="sync_interval" type="radio" value="manual" />manual &nbsp;
          <input id="sync_interval" type="radio" value="scheduled" />scheduled
        </div>
      </div>
    );
  }
}
