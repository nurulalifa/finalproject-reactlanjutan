import React, { useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Center, Link } from '@chakra-ui/react';
import { Box, Button } from '@chakra-ui/react';

const NotFound = () => {
    // const navigate = useNavigate();

    // useEffect(() => {
    //     // Redirect the user after a delay
    //     const redirectTimer = setTimeout(() => {
    //         navigate('/');
    //     }, 3000); // Redirect after 3 seconds (adjust the delay as needed)

    //     // Clean up the timer when the component unmounts
    //     return () => clearTimeout(redirectTimer);
    // }, [navigate]);

    return (
        <>
        <Box textAlign='center'>
            <br/>
            <br/>
            <br/>
            <h1>Page Not Found</h1>
            <p>The requested page could not be found.</p>
            <p>Redirecting to the home page...</p>
            <Link href='/'>
                <br/>
                <br/>
                <br/>
            <Button className="test-button" colorScheme="blue" >
                Go Back
            </Button>
            </Link>
            <br/>
            <br/>
            <br/>
            <br/>
            </Box>
        </>
    );
};

export default NotFound;
