import React from 'react';
import {Flex, Heading, ToggleButton} from '@aws-amplify/ui-react';
import {borderRadius, width} from '@mui/system';
import {Button, Typography} from '@mui/material';

function App() {

    const [isPressed, setIsPressed] = React.useState(false);

    return (
        <Flex style={
            {
                height: '100%',
                width: '100%',
                display: 'flex',
                justifycontent: 'center',
                alignitems: 'center',
                backgroundColor: '#f6f4f2',
                borderRadius: '2em',
                marginTop: '20%',
                padding: "30em"
            }
        }>
            <Button variant='contained'
                isPressed={isPressed}
                onChange={
                    () => setIsPressed(!isPressed)
                }
                style={
                    {
                        backgroundColor: "#4b5668",
                        width: "30em"
                    }
            }>
                <Typography variant='h5'>Submit</Typography>
            </Button>
        </Flex>
    );
}

export default App;
