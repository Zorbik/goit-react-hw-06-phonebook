import { useDispatch } from 'react-redux';
import { Input, Label } from '../../components';
import { update } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeInput = e => {
    dispatch(update(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={onChangeInput} />
    </Label>
  );
};
