import React, { useEffect, useState } from 'react';
import './StudentEditProfile.css';
import { Input, Label, Button, Form, Card, CardBody,FormGroup } from 'reactstrap';
import StudentNavBar from '../../components/StudentNavbar/StudentNavBar';

const StudentEditProfile = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [course, setCourse] = useState('');
  const [semester, setSemester] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setdob] = useState('');
  const [motherName, setMotherName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/user/details', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((result) => {
        setFirstName(result.firstname)
        setLastName(result.lastname)
        setCourse(result.course)
        setSemester(result.semester)
        setPhone(result.phone)
        setdob(result.dob)
        setAddress(result.address)
        setMotherName(result.mothersname)
        setFatherName(result.fathersname)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const onUpdateHandler = () => {
    
    const alteredData = {
      firstname: firstName,
      lastname: lastName,
      course: course,
      semester: semester,
      phone: phone,
      address: address,
      dob: dob,
      mothersname: motherName,
      fathersname: fatherName,
    };

    if (password !== '') 
    {
      alteredData.password = password;
    }

    fetch('http://localhost:4000/user/updateprofile/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(alteredData),
    })
      .then((response) => response.json())
      .then((result) => {
        props.history.push('/studentdashboard');
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCancelHandler = () => {
    props.history.push('/studentdashboard');
  }

  return (
    <div className="scontainer">
        <StudentNavBar/>
        <div className="containerj">
            <Card className="student-edit-profile-form">
                <CardBody className="upload-form">
                  <Form onSubmit="" autoComplete="off">
                    <FormGroup align="center">
                      <Label>EDIT PROFILE</Label>
                    </FormGroup>
                    <hr/>
                    <FormGroup>
                      <Label for="firstName">First Name </Label>
                      <Input
                        type="text"
                        name="firstName"
                        value={firstName}
                        placeholder=""
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="lastName">Last Name </Label>
                      <Input
                        type="text"
                        name="lastName"
                        value={lastName}
                        placeholder=""
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="course">Course </Label>
                      <Input
                        type="text"
                        name="course"
                        value={course}
                        placeholder=""
                        onChange={(e) => setCourse(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="semester">Semester </Label>
                      <Input
                        type="text"
                        name="semester"
                        value={semester}
                        placeholder=""
                        onChange={(e) => setSemester(e.target.value)}
                        required
                      />
                    </FormGroup> 
                    <FormGroup>
                      <Label for="phone">Mobile No. </Label>
                      <Input
                        type="text"
                        name="phone"
                        value={phone}
                        placeholder=""
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="dob">DOB </Label>
                      <Input
                        type="date"
                        name="dob"
                        value={dob}
                        placeholder=""
                        onChange={(e) => setdob(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="address">Address </Label>
                      <Input
                        type="textarea"
                        name="address"
                        className="student-address"
                        value={address}
                        placeholder=""
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="mothername">Mother's Name </Label>
                      <Input
                        type="text"
                        name="mothername"
                        value={motherName}
                        placeholder=""
                        onChange={(e) => setMotherName(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="fathername">Father's Name </Label>
                      <Input
                        type="text"
                        name="fathername"
                        value={fatherName}
                        placeholder=""
                        onChange={(e) => setFatherName(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="newpassword">New Password</Label>
                      <Input
                        type="password"
                        name="newpassword"
                        value={password}
                        placeholder=""
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup align='center'>
                      <Button color="success" onClick={onUpdateHandler}>
                        Update Profile
                      </Button>
                      <Button color="danger" onClick={onCancelHandler}>
                        Cancel
                      </Button>
                    </FormGroup>
                  </Form>
                </CardBody>    
              </Card>  
            </div>  
    </div>
  );
};

export default StudentEditProfile;