import React, { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const AddDealer = () => {
    const initialFormData = {
        name: '',
        location: '',
        phoneNumber: '',
        avatarColor: '',
        avatarInitials: '',
      };
    
      const [formData, setFormData] = useState(initialFormData);
    
      // Check for data in local storage and set it in the state
      useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData'));
        if (storedData) {
          setFormData(storedData);
        } else {
          // Generate avatar background color when first mounted
          const backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
          setFormData((prevData) => ({
            ...prevData,
            avatarColor: backgroundColor,
          }));
        }
      }, []);
    
      // Save form data to local storage on every form data change
      useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
      }, [formData]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = () => {
        // Perform any submit actions here
        // ...
    
        // Clear the form data and local storage after submitting
        setFormData(initialFormData);
        localStorage.removeItem('formData');
      };
    
      const isSubmitDisabled = formData.name === '';
    
      const getAvatarInitials = () => {
        if (formData.name) {
          const nameArray = formData.name.split(' ');
          if (nameArray.length === 1) {
            return nameArray[0].charAt(0).toUpperCase();
          } else {
            return (
              nameArray[0].charAt(0).toUpperCase() +
              nameArray[1].charAt(0).toUpperCase()
            );
          }
        }
        return '';
      };
    
      return (
        <Box sx={{ maxWidth: "100%", margin: '0 auto', mt: 5 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ width: 100, display: 'flex', justifyContent: 'start', marginBottom: 2 }}>
                <Avatar
                  sx={{ bgcolor: formData.avatarColor, width: 100, height: 100, fontSize: '2rem' }}
                  aria-label="avatar"
                  variant="rounded"
                >
                  {getAvatarInitials()}
                </Avatar>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            inputProps={{
              maxLength: 256,
            }}
            sx={{ mt: 2 }}
          />
              <TextField
                label="Location"
                variant="outlined"
                name="location"
                value={formData.location}
                onChange={handleChange}
                fullWidth
                inputProps={{
                  maxLength: 256,
                }}
                sx={{ mt: 2 }}
              />
              <TextField
                label="Phone Number"
                variant="outlined"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                fullWidth
                sx={{ mt: 2 }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'start', marginTop: 2 }}>
              <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
            >
              Submit
            </Button>
              </Box>

            </Grid>
          
          </Grid>
        </Box>
  );
};

export default AddDealer;
