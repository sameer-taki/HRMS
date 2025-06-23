import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Button,
  AppBar,
  Toolbar
} from '@mui/material';
import { 
  People, 
  Schedule, 
  Assignment, 
  Payment 
} from '@mui/icons-material';

export default function Home() {
  const features = [
    {
      title: 'Employee Management',
      description: 'Manage employee records, profiles, and organizational structure',
      icon: <People sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: 'Attendance Tracking',
      description: 'Track employee attendance, working hours, and time management',
      icon: <Schedule sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: 'Leave Management',
      description: 'Handle leave requests, approvals, and leave balance tracking',
      icon: <Assignment sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: 'Payroll Processing',
      description: 'Process salaries, benefits, and generate payroll reports',
      icon: <Payment sx={{ fontSize: 40, color: 'primary.main' }} />
    }
  ];

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fiji HRMS
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            Human Resource Management System
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Streamline your HR processes with our comprehensive HRMS solution
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ mt: 2, px: 4, py: 1.5 }}
          >
            Get Started
          </Button>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  <Box mb={2}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box mt={8} textAlign="center">
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Why Choose Fiji HRMS?
          </Typography>
          <Grid container spacing={4} mt={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Easy to Use
              </Typography>
              <Typography color="text.secondary">
                Intuitive interface designed for HR professionals and employees alike
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Secure & Reliable
              </Typography>
              <Typography color="text.secondary">
                Enterprise-grade security with reliable data protection and backup
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Scalable Solution
              </Typography>
              <Typography color="text.secondary">
                Grows with your organization from small teams to large enterprises
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}