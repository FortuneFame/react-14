import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';

import { increaseCounter, decreaseCounter } from '../../store/actions/counter.action';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterReducer.counter);

    return (
        <div className='d-flex flex-column align-items-center justify-content-center mt-4' style={{ width: '100%' }}>
            <Typography
                variant="h3">
                Increment or Decrement Counter
            </Typography>
            <Typography
                variant="h1"
                className="mt-5 border p-3 mb-5">
                {counter}
            </Typography>
            <div>
                <Button
                    className='m-3'
                    style={{ backgroundColor: '#212121', color: '#fff' }}
                    variant="contained"
                    onClick={() => dispatch(decreaseCounter())}>
                    Divide by 2
                </Button>
                <Button
                    className='m-3'
                    style={{ backgroundColor: '#212121', color: '#fff' }}
                    variant="contained"
                    onClick={() => dispatch(increaseCounter())}>
                    Multiply by 2
                </Button>
            </div>
        </div>
    );
};

export default Counter;