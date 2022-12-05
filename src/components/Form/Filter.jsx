import { useDispatch } from 'react-redux';
import { Input, Label } from '../../components';
import { changeSearchQuery } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeInput = e => {
    dispatch(changeSearchQuery(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={onChangeInput} />
    </Label>
  );
};
