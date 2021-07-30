import React, { Component } from "react";
import ReactDOM from "react-dom";
import Generator from "./Generator";
import TimeLine from "react-gantt-timeline";

const config = {
  header: {
    top: {
      style: {
        background: "linear-gradient( grey, black)",
        textShadow: "0.5px 0.5px black",
        fontSize: 12
      }
    },
    middle: {
      style: {
        background: "linear-gradient( orange, grey)",
        fontSize: 9
      }
    },
    bottom: {
      style: {
        background: "linear-gradient( grey, black)",
        fontSize: 9,
        color: "orange"
      },
      selectedStyle: {
        background: "linear-gradient( #d011dd ,#d011dd)",
        fontWeight: "bold",
        color: "white"
      }
    }
  },
  taskList: {
    title: {
      label: "Task Todo",
      style: {
        background: "linear-gradient( grey, black)"
      }
    },
    task: {
      style: {
        backgroundColor: "grey",
        color: "white"
      }
    },
    verticalSeparator: {
      style: {
        backgroundColor: "#fbf9f9"
      },
      grip: {
        style: {
          backgroundColor: "red"
        }
      }
    }
  },
  dataViewPort: {
    rows: {
      style: {
        backgroundColor: "white",
        borderBottom: "solid 0.5px silver"
      }
    },
    task: {
      showLabel: true,
      style: {
        borderRadius: 1,
        boxShadow: "2px 2px 8px #888888"
      }
    }
  }
};

class Work extends Component {
  constructor(props) {
    super(props);
    let result = Generator.generateData();
    this.data = result.data;
    this.state = {
      itemheight: 20,
      data: [],
      links: result.links
    };
  }

  onHorizonChange = (start, end) => {
    //Return data the is in the range
    let result = this.data.filter(item => {
      return (
        (item.start < start && item.end > end) ||
        (item.start > start && item.start < end) ||
        (item.end > start && item.end < end)
      );
    });
    console.log("Calculating ");
    this.setState({ data: result });
  };

  render() {
    return (
      <div className="app-container">
        <div className="nav-container">
          <div className="mode-container-title">
            On Horizon Change Demo with client side Filtering
          </div>
        </div>
        <div className="time-line-container">
          <TimeLine
            data={this.state.data}
            links={this.state.links}
            config={config}
            onHorizonChange={this.onHorizonChange}
          />
        </div>
      </div>
    );
  }
}

export default Work;