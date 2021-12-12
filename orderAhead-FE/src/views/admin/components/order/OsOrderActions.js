import React from 'react';
import {Box, Card, CardContent, Button, CardActions, Typography} from '@mui/material'

const OsOrderActions = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" style={{borderBottom: '1px solid #ccc'}}>Order actions</Typography>
        </CardContent>
        <CardActions>
          <Box class="d-flex justify-content-end w-100">
            <Button variant="contained">Create</Button>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
};

export default OsOrderActions;