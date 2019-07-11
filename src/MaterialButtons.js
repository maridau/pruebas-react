import React from 'react';
import Button from '@material-ui/core/Button';

class MaterialButtons extends React.Component {

    render() {
       

        return (
            <div className="container">
                <h1>Button</h1>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}

export default MaterialButtons;

