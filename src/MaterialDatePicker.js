import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import { DatePicker } from "@material-ui/pickers";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paper: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(2, 0),
        width: '100%'
    },
    formControl: {
        margin: theme.spacing(3),
        width: '100%'
    },
    group: {
        margin: theme.spacing(3),
        width: '100%'
    },
    dense: {
        marginTop: 19,
    },
    button: {
        margin: theme.spacing(1),
    },
    datePicker:{
        marginTop: 20,
        marginBottom: 20
    },
});


class MaterialDatePicker extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedDate: Date()
        };
    }

    handleDateChange = (date) => {
        this.setState({
            selectedDate: date
        });
    }

    render() {
        return (
            <form className={this.props.classes.container} noValidate autoComplete="off">
           
                    <FormLabel component="legend"></FormLabel>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            className={this.props.classes.datePicker}
                            label="Seleccionar fecha"
                            name='date'
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            animateYearScrolling
                        />
                        </MuiPickersUtilsProvider>
            </form>

        );
    }
}

export default withStyles(styles)(MaterialDatePicker);