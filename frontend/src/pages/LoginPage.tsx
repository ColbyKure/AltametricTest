import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';  // Import login action from Redux
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod'; // Import Zod for validation

// Define the Zod schema for login validation
const loginSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email is required'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be less than 20 characters'),
});

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle login logic
  const handleLogin = async () => {
    // Validate inputs using Zod schema
    try {
      loginSchema.parse({ email, password }); // Will throw an error if invalid
      setErrors({}); // Clear errors if validation is successful
      
      // If validation passes, proceed with the API request
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });
      dispatch(login(response.data.token)); // Dispatch login action
      navigate('/'); // Navigate to the home page
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const validationErrors: { email?: string; password?: string } = {};
        error.errors.forEach((err) => {
          validationErrors[err.path[0] as keyof typeof validationErrors] = err.message;
        });
        setErrors(validationErrors);
      } else {
        alert('Login failed! Please try again.');
      }
    }
  };

  const formStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#ffffff', 
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
    maxWidth: '400px',  
    margin: '0 auto',
  };

  const inputStyles: React.CSSProperties = {
    width: '100%',
    padding: '12px 20px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyles: React.CSSProperties = {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={formStyles}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Login</h2>
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={inputStyles}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={inputStyles}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        
        <button
          onClick={handleLogin}
          style={buttonStyles}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
