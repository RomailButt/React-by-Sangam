import React from 'react'
import {Card , CardContent , Typography , CardActions , Button} from '@mui/material';

const TodoItem = ({todo , fetchListOfCurrentTodo}) => {
  
  return (
    <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
         }}>
      <CardContent>
        <Typography variant='h5' color="text.secondary">
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
        onClick={ ()=>{fetchListOfCurrentTodo(todo?.id)}}
        sx={{
            backgroundColor: 'black',
            color: 'white',
            opacity: '0.75',
            '&:hover':{
                backgroundColor: 'black',
                color: 'white',
                opacity: '1',
            }
        }}>Show Details</Button>
      </CardActions>
    </Card>
  )
}

export default TodoItem