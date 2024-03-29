import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    width: 300,
  },
  paper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 0),
    width: '100%'
  },
  formControl: {
    width: '100%',
  },
  textField: {
    marginRight: theme.spacing(4),
    width: '100%',
  },
  dense: {
    marginTop: 19,
  },
  button: {
    margin: theme.spacing(1),
  },
});

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}


class MaterialSlider extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography id="discrete-slider" gutterBottom>
          Temperature
          </Typography>
        <Slider
          defaultValue={30}
          getAriaValueText={this.valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        <div className={classes.margin} />
        <Typography id="discrete-slider-small-steps" gutterBottom>
          Small Steps
          </Typography>
        <Slider
          defaultValue={0.00000005}
          getAriaValueText={this.valuetext}
          aria-labelledby="discrete-slider-small-steps"
          step={0.00000001}
          marks
          min={-0.00000005}
          max={0.0000001}
          valueLabelDisplay="auto"
        />
        <div className={classes.margin} />
        <Typography id="discrete-slider-custom" gutterBottom>
          Custom marks
          </Typography>
        <Slider
          defaultValue={20}
          getAriaValueText={this.valuetext}
          aria-labelledby="discrete-slider-custom"
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />
        <div className={classes.margin} />
        <Typography id="discrete-slider-restrict" gutterBottom>
          Restricted values
          </Typography>
        <Slider
          defaultValue={20}
          valueLabelFormat={this.valueLabelFormat}
          getAriaValueText={this.valuetext}
          aria-labelledby="discrete-slider-restrict"
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
        />
        <div className={classes.margin} />
        <Typography id="discrete-slider-always" gutterBottom>
          Always visible
          </Typography>
        <Slider
          defaultValue={80}
          getAriaValueText={this.valuetext}
          aria-labelledby="discrete-slider-always"
          step={10}
          marks={this.props.marks}
          valueLabelDisplay="on"
        />
      </div>
    );
  }
}
export default withStyles(styles)(MaterialSlider);
