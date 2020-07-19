import React, { Component } from "react";
import TextField, { HelperText, Input } from "@material/react-text-field";
import "@material/react-text-field/dist/text-field.css";
import Button from "../../../components/button/button";
import { Link } from "react-router-dom";
import { FcKey } from "react-icons/fc";
import { MdClearAll } from "react-icons/md";
import "./give.css";

export default class Give extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: "",
      hostName: "Jayat",
      linkEnabled: false,
    };
  }

  validateRoomName(e) {
    if (e.currentTarget.value) {
      this.setState({
        roomId: e.currentTarget.value,
        linkEnabled: true,
      });
    } else {
      this.setState({
        roomId: e.currentTarget.value,
        linkEnabled: false,
      });
    }
  }

  render() {
    return (
      <div className="details-action">
        <TextField
          label="Enter room Id"
          helperText={<HelperText>Fun Begins!</HelperText>}
          onTrailingIconSelect={() => this.setState({ roomId: "" })}
          leadingIcon={<FcKey />}
          trailingIcon={<MdClearAll />}
          outlined
        >
          <Input
            value={this.state.roomId}
            onChange={(e) => this.validateRoomName(e)}
          />
        </TextField>
        {this.state.linkEnabled && (
        <Link
          to={{
            pathname: "/room/" + this.state.roomId,
            state: {
              name: this.state.hostName,
            },
          }}
        >
          <Button text="Join room" />
        </Link>
        )}
      </div>
    );
  }
}
