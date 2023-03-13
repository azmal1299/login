import React,{useState} from "react";
import { Link } from "react-router-dom";
import './personaldetail.scss';

function Booking() {
    const [state, setState] = useState({
        firstName: '',
        lastName:'',
        email: '',
        mobile:'',
        phone: '',
        // street:'',
        // town:'',
        // city:'',
        State:'',
        country:'',
        pincode:'',
        activeIndex: '',
        isEdit: false,
      })
      const handleChange = (e, id) => {
        setState(prevState => {
          return {
            ...prevState,
            [id]: e
          }
        })
      }
      const handleSubmit = () => {
        const { firstName,lastName, email,mobile, phone,address,State,country,pincode } = state;
    
        const data = {
          firstName,lastName, email,mobile, phone,address,State,country,pincode, 
        }
    
        const employees = localStorage.getItem('employees');
        let employeeList = [];
        if (employees) {
          employeeList = [...JSON.parse(employees), data]
        } else {
          employeeList = [data]
        }
    
        localStorage.setItem('employees', JSON.stringify(employeeList))
        setState({
          firstName: '',
          lastName:'',
          email: '',
          mobile:'',
          phone: '',
        //   street:'',
        //   town:'',
        //   city:'',
          State:'',
          country:'',
          pincode:'',
        })
      }
      const handleEdit = (emp, index) => {
        setState(prevState => {
          return {
            ...prevState,
            activeIndex: index,
            firstName: emp.firstName,
            lastName:emp.lastName,
            email: emp.email,
            mobile:emp.mobile,
            phone: emp.phone,
            // street:emp.street,
            // town:emp.town,
            // city:emp.city,
            Sate:emp.State,
            country:emp.country,
            pincode:emp.pincode,
            isEdit: true,
          }
        })
      }
    
    
      const handleUpdate = () => {
        const { firstName,lastName, email,mobile, phone,street,town,city,State,country,pincode, activeIndex } = state;
        const employees = localStorage.getItem('employees');
        const formatedData = JSON.parse(employees);
        formatedData[activeIndex].firstName = firstName;
        formatedData[activeIndex].lastName = lastName;
        formatedData[activeIndex].email = email;
        formatedData[activeIndex].mobile = mobile;
        formatedData[activeIndex].phone = phone;
        // formatedData[activeIndex].street = street;
        // formatedData[activeIndex].town =town;
        // formatedData[activeIndex].city = city;
        formatedData[activeIndex].State= State;
        formatedData[activeIndex].country = country;
        formatedData[activeIndex].pincode = pincode;
        localStorage.setItem('employees', JSON.stringify(formatedData))
        setState({
          firstName: '',
          lastName:'',
          email: '',
          mobile:'',
          phone: '',
        //   street:'',
        //   town:'',
        //   city:'',
          State:'',
          country:'',
          pincode:'',
          isEdit: false
        })
      }
    
      const renderList = () => {
        const employees = localStorage.getItem('employees');
        if (!employees) return <tr><td> No Record Found </td></tr>;
        return JSON.parse(employees).map((emp, index) => (
          <tr>
            <td>{ emp.firstName }</td>
            <td>{ emp.lastName }</td>
            <td>{ emp.email }</td>
            <td>{ emp.mobile }</td>
            <td>{ emp.phone}</td>
            {/* <td>{ emp.street }</td> */}
            {/* <td>{ emp.town }</td> */}
            {/* <td>{ emp.city }</td> */}
            <td>{ emp.pincode }</td>
            <td>{ emp.State }</td>
            <td>{ emp.country }</td>
            <td>
              <button onClick={ () => handleEdit(emp, index) }>Edit</button>
              <button onClick={ () => handleDelete(emp) }>Delete</button>
            </td>
          </tr>
        ))
      }
    
      const { firstName,lastName, email,address,State,country,pincode, isEdit } = state;
    
      const handleDelete = (emp) => {
        const employees = localStorage.getItem('employees');
        if (employees) {
          const formatedData = JSON.parse(employees);
          const index = formatedData.findIndex(f => f.firstName === emp.firstName)
          formatedData.splice(index, 1);
          localStorage.setItem('employees', JSON.stringify(formatedData))
        }
      }
    return (
        <>
           
            <div className="personal">
                <div className="detal">
                <h1>
                personaldetail
                </h1>
                <ul>
                    <li>
                        <label>firstname</label>
                        <input type="text"
                        placeholder="firstname"
                        value={firstName}
                        onChange={(event) =>handleChange(event, 'firstName')} 
                        required
                        />
                    </li>
                    <li>
                        <label>lastname</label>
                        <input type="text"
                            placeholder="lastname"
                            value={lastName}
                            onChange={(event) =>handleChange(event, 'lastName')} 
                            required
                        />
                    </li>                    
                    <li>
                        <label>email</label>
                        <input type="email"
                            placeholder="email"
                            value={email}
                            onChange={(event) =>handleChange(event, 'email')} 
                            required
                        />
                    </li>
                    <li>
                        <label>address</label>
                        <input type="text"
                            placeholder="door-no,street,town"
                            value={address}
                            onChange={(event) =>handleChange(event, 'address')} 
                            required
                        />
                    </li>
                    <li>
                        <label>district</label>
                        <input type="text"
                            placeholder="district"
                            value={district}
                            onChange={(event) =>handleChange(event, 'district')} 
                            required
                        />
                    </li>
                    <li>
                        <label>State</label>
                        <input type="text"
                            placeholder="State"
                            value={State}
                            onChange={(event) =>handleChange(event, 'State')} 
                            required
                        />
                    </li>
                    <li>
                        <label>country</label>
                        <input type="text"
                            placeholder="country"
                            value={country}
                            onChange={(event) =>handleChange(event, 'country')} 
                            required
                        />
                    </li>
                    <li>
                        <label>pincode</label>
                        <input type="number"
                            placeholder="pincode"
                            value={pincode}
                            onChange={(event) =>handleChange(event, 'pincode')} 
                            required
                        />
                    </li>
                    </ul>
                </div>
                {isEdit? <button onClick={ () => handleUpdate() }>Update</button> : <button onClick={ () => handleSubmit() }>submit</button>}
                
            </div>
        </>
    )
}
export default Booking;