import React from 'react'
import { useState } from 'react';
import { TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LoginForm = () => {

    const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [radioButtonsGroup, setRadioButtonsGroup] = useState('');
  const [dob, setDob] = useState('');
  const [course, setCourse] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);


  const validate = (inputTag) => {
    const { name, value } = inputTag;
    if (name === "firstName") {
      setFirstName(value);
      setIsFirstNameValid(!/^[a-zA-Z\s]+$/.test(value));
    } else if (name === "email") {
      setEmail(value);
      setIsEmailValid(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value));
    }
  };


  const handleSubmission = () => {
    if (firstName && address && email && radioButtonsGroup && dob && course) {
        alert(`Successfully Registered\nName: ${firstName}\nAddress: ${address}\nE-mail: ${email}\nGender: ${radioButtonsGroup}\nDate of Birth: ${dob}\nCourse: ${course}`);

    } else {
      alert("Fill the form completely");
    }
  };

  const handleReset = () => {
    setFirstName('');
    setAddress('');
    setEmail('');
    setRadioButtonsGroup('');
    setDob('');
    setCourse('');
    setIsFirstNameValid(false);
    setIsEmailValid(false);
  };

    
  return (
    <>

<div className='container-fluid '>
      <div className='row'>
        <div className="col-lg-4"></div>
        <div className='border rounded  shadow col-lg-4 mt-4'>
          <h1 className='text-center mt-4'>Registration Form</h1>
          
          <form action="" className='p-3'>
            {/* 1st name */}
            <div>
              <TextField
                onChange={e => validate(e.target)}
                name='firstName'
                value={firstName}
                className='w-100'
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
            </div>
            {isFirstNameValid && <div className="text-danger mt-1">Enter valid name</div>}

            {/* Address */}
            <div className="mt-3">
              <TextField
                onChange={e => setAddress(e.target.value)}
                name='address'
                value={address}
                className='w-100'
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
            </div>

            {/* Email */}
            <div className="mt-3">
              <TextField
                onChange={e => validate(e.target)}
                name='email'
                value={email}
                className='w-100'
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </div>
            {isEmailValid && <div className="text-danger mt-1">Invalid E-mail ID</div>}

            {/* Gender */}
            <div className='mt-3'>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  className='mt-2'
                  name="radioButtonsGroup"
                  value={radioButtonsGroup}
                  onChange={e => setRadioButtonsGroup(e.target.value)}
                >
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </div>

            {/* DOB */}
            <div className="mt-3">
              <p className='ms-1'>Date of Birth:</p>
              <TextField
                onChange={e => setDob(e.target.value)}
                name='dob'
                type='date'
                value={dob}
                className='w-100'
                id="outlined-basic"
                variant="outlined"
               
              />
            </div>

            {/* Course */}
            <div className="mt-3">
              <select
                onChange={e => setCourse(e.target.value)}
                name="course"
                value={course}
                className='w-100 p-3'
              >
                <option value="" hidden disabled>Courses</option>
                <option value="Biology-Science">Biology-Science</option>
                <option value="Computer-Science">Computer-Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="mt-3">
              <Stack direction={"row"} spacing={2}>
                <Button
                type="button"
                onClick={handleSubmission}
                className='w-50 p-3 bg-dark'
                variant="contained"
                >
                Register
                </Button>
                <Button
                type="button"
                onClick={handleReset}
                className='w-50 p-3'
                variant="outlined"
                >
                Reset
                </Button>

              </Stack>
            </div>
          </form>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>




    </>
  )
}

export default LoginForm