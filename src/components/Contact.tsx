// Contact.tsx
import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Contact: React.FC = () => {
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;


  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: false, email: false, message: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFormErrors(prev => ({ ...prev, [name]: false }));
  };

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const errors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      message: formData.message.trim() === '',
    };
    setFormErrors(errors);
    if (Object.values(errors).some(Boolean) || !form.current) return;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => setFormData({ name: '', email: '', message: '' }))
      .catch(err => console.error(err));
  };

  const textFieldProps = {
    fullWidth: true,
    variant: 'outlined' as const,
    sx: {
      mb: 2,
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#fff',
        '& fieldset': { borderColor: '#ccc' },
        '&:hover fieldset': { borderColor: '#888' },
        '&.Mui-focused fieldset': { borderColor: '#6200ea' },
      },
    },
  };

  return (
    <Box id="contact" className="contact-wrapper">
      <Box maxWidth="600px" mx="auto">
        <Box mb={2} textAlign="center">
          <Typography variant="h4" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1">
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </Typography>
        </Box>
        <Box component="form" ref={form} noValidate autoComplete="off">
          <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
            <TextField
              name="name"
              label="Your Name"
              placeholder="What's your name?"
              value={formData.name}
              onChange={handleChange}
              error={formErrors.name}
              helperText={formErrors.name && 'Please enter your name'}
              {...textFieldProps}
            />
            <TextField
              name="email"
              label="Email / Phone"
              placeholder="How can I reach you?"
              value={formData.email}
              onChange={handleChange}
              error={formErrors.email}
              helperText={formErrors.email && 'Please enter your email or phone number'}
              {...textFieldProps}
            />
          </Box>
          <TextField
            name="message"
            label="Message"
            placeholder="Send me any inquiries or questions"
            multiline
            rows={6}
            value={formData.message}
            onChange={handleChange}
            error={formErrors.message}
            helperText={formErrors.message && 'Please enter the message'}
            {...textFieldProps}
          />
          <Box textAlign="right">
            <Button
              type="button"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;