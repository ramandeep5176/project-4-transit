import React, { Component } from "react";
import TextField from "@mui/material/TextField";

export class LoadInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <TextField
          hintText="Enter Your Phone"
          floatingLabelText="Phone"
          onChange={handleChange("Phone")}
          defaultValue={values.Phone}
        />
        <br />
        <TextField
          hintText="Enter Your xx"
          floatingLabelText="xx"
          onChange={handleChange("xx")}
          defaultValue={values.xx}
        />
        <br />
        <TextField
          hintText="Enter Your yy"
          floatingLabelText="yy"
          onChange={handleChange("yy")}
          defaultValue={values.yy}
        />
        <br />

        <button label="Continue" onClick={this.continue}>
          next
        </button>
        <button label="back" onClick={this.back}>
          back
        </button>
      </React.Fragment>
    );
  }
}

export default LoadInfo;
