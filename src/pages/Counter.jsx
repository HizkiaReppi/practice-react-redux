import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from '../redux/slices/counterSlice';
import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [decrementValue, setDecrementValue] = useState('');
  const [incrementValue, setIncrementValue] = useState('');

  const handleDecrementChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    if (value <= count) {
      setDecrementValue(value);
    } else {
      setDecrementValue(count);
    }
  };

  const handleIncrementChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setIncrementValue(value);
  };

  const handleDecrementByAmount = () => {
    dispatch(decrementByAmount(decrementValue));
    setDecrementValue('');
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(incrementValue));
    setIncrementValue('');
  };

  return (
    <div className='px-[7.5%] flex flex-col items-center justify-center h-[85vh]'>
      <h2 className='text-2xl font-semibold mb-5'>Counter</h2>
      <div className='flex items-center gap-5 mb-3'>
        <Button
          type='button'
          variant='primary'
          onClick={() => dispatch(decrement())}
          disabled={count >= 1 ? false : true}
        >
          Decrement
        </Button>
        <span className='border border-slate-600 font-medium rounded-md text-sm px-5 py-2.5'>
          {count}
        </span>
        <Button
          type='button'
          variant='red'
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-2'>
          <div>
            <Label htmlFor='decrement-by-amount'>Decrement By Amount</Label>
            <Input
              type='number'
              id='decrement-by-amount'
              value={decrementValue}
              onChange={handleDecrementChange}
              onBlur={handleDecrementByAmount}
              placeholder='Enter value'
              disabled={count >= 1 ? false : true}
              max={count}
            />
          </div>
          <div>
            <Label htmlFor='increment-by-amount'>Increment By Amount</Label>
            <Input
              type='number'
              id='increment-by-amount'
              value={incrementValue}
              onChange={handleIncrementChange}
              onBlur={handleIncrementByAmount}
              placeholder='Enter value'
            />
          </div>
        </div>
        <div className='flex justify-between items-center gap-2'>
          <Button
            type='button'
            className='w-full'
            variant='red'
            onClick={() => dispatch(decrementByAmount(5))}
            disabled={count >= 5 ? false : true}
          >
            Subtract 5
          </Button>
          <Button
            type='button'
            className='w-full'
            variant='primary'
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Add 5
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
