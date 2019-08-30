import React, { Component } from "react";
import { TextField, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { CustomDropzone } from "..";
import { DragDropContent } from "react-beautiful-dnd";
const style = theme => {
  return {
    form: {
      padding: "20px"
    }
  };
};
class ChallengeForm extends Component {
  state = {
    imgSrc: ""
  };
  onDrop = acceptedFiles => {
    const currentFile = acceptedFiles[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.setState({ imgSrc: reader.result });
      },
      false
    );
    reader.readAsDataURL(currentFile);
  };
  render() {
    return (
      <form noValidate autoComplete="off" className={this.props.classes.form}>
        <Typography variant="h4" align="center">
          Edit Challenge
        </Typography>
        <Grid container spacing={8}>
          <Grid item md={4}>
            <TextField id="chall_name" label="Name" margin="normal" fullWidth />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="chall_course"
              label="Course"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="chall_level"
              label="Level"
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item md={4}>
            <TextField
              id="chall_prechallenge"
              label="PreChallenge"
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item md={4}>
            <TextField id="chall_time" label="Time" margin="normal" fullWidth />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="chall_topic"
              label="Topic"
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item md={4}>
            <CustomDropzone
              onDrop={this.onDrop}
              img={this.state.imgSrc}
            ></CustomDropzone>
            <TextField
              id="chall_present"
              label="Present"
              margin="normal"
              fullWidth
              multiline
              rowsMax={3}
            />
          </Grid>
          <Grid item md={8}>
            <DragDropContent>
              <h1>aokokok</h1>
              <h1>aokokok</h1>
              <h1>aokokok</h1>
              <h1>aokokok</h1>
              <h1>aokokok</h1>
              <h1>aokokok</h1>
            </DragDropContent>
          </Grid>
        </Grid>
      </form>
    );
  }
}
export default withStyles(style)(ChallengeForm);
