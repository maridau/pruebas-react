import React from 'react';
import Switch from '@material-ui/core/Switch';

class MaterialSwitches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedA: true,
            checkedB: true,
        };    
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange = name => event => {
      this.setState({ ...this.state, [name]: event.target.checked });
      };

    render() {
        return (
            <div className="container">
                <h1>Switches</h1>
                <Switch
                    checked={this.state.checkedA}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </div>
        );
    }
}

export default MaterialSwitches;

