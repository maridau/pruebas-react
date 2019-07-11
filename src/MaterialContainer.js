import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MaterialSwitches from './MaterialSwitches';
import MaterialButtons from './MaterialButtons';

class MaterialContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
                    <Typography component="div" />
                    <MaterialSwitches/>
                   <MaterialButtons/>
                </Container>
            </React.Fragment>
        )
    }
}

export default MaterialContainer;
