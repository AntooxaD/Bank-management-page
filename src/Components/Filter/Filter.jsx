import { TitleFilter, InputFilter } from '../Styled/Styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterBanks } from '../../Redux/contactActions';
import { getFilter } from '../../Redux/selectors';

function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);
    const onChange = data => dispatch(filterBanks(data.currentTarget.value));

    return (
        <label>
            <TitleFilter> Find bank by name</TitleFilter>
            <InputFilter type="text" value={value} onChange={onChange} />
        </label>
    );
}

export default Filter;
