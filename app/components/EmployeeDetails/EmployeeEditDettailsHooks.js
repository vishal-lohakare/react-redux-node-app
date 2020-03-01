import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { useHistory } from 'react-router-dom';

export default function EmployeeEditDetails(props) {
    const [values, setInputValues] = useState({empId: '', empName: '', empDesc: ''});

    const history = useHistory();
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setInputValues({...values, [name]: value})
    }

    const addEmpToGrid = () => {
        const postData = {id: values.empId, title: values.empName, designation: values.empDesc, exp: 5}
        console.log(postData);
        fetch('http://localhost:3000/employeeData', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        }).then(res => {
            res.json().then((data) => {
                console.log(data);
                history.push("/");
            })
        })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <>
            <Button color="primary" href="/">
                Back
            </Button>
            <form noValidate autoComplete="off">
                <Input placeholder="Employee ID" name="empId" value={values.empId} onChange={handleInputChange}
                       inputProps={{'aria-label': 'description'}}/>
                <Input placeholder="Employee Name" name="empName" value={values.empName} onChange={handleInputChange}
                       inputProps={{'aria-label': 'description'}}/>
                <Input placeholder="Employee Desc" name="empDesc" value={values.empDesc} onChange={handleInputChange}
                       inputProps={{'aria-label': 'description'}}/>
                <Button variant="contained" color="primary" onClick={addEmpToGrid}>
                    Add to Grid
                </Button>
            </form>
        </>
    );
}
