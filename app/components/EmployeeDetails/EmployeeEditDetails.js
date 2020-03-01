import React from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

export default class EmployeeEditDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empId: '',
            empName: '',
            empDesc: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {empId, empName, empDesc} = this.state;
        return (
            <form>
                <Button color="primary">
                    Back
                </Button>
                <form noValidate autoComplete="off">
                    <Input placeholder="Employee ID" name="empId" value={empId} onChange={this.handleChange}
                           inputProps={{'aria-label': 'description'}}/>
                    <Input placeholder="Employee Name" name="empName" value={empName}
                           inputProps={{'aria-label': 'description'}}/>
                    <Input placeholder="Employee Desc" name="empDesc" value={empDesc}
                           inputProps={{'aria-label': 'description'}}/>
                    <Button variant="contained" color="primary">
                        Add to Grid
                    </Button>
                </form>
            </form>
        );
    }
}
