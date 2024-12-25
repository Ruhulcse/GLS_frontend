import Textinput from '@/components/ui/Textinput';7
import PropTypes from 'prop-types';
import { useState } from 'react';
const GlobalFilter = ({ filter, setFilter }) => {
	const [value, setValue] = useState(filter);
	const onChange = e => {
		setValue(e.target.value);
		setFilter(e.target.value );
	};
	return (
		<div>
			<Textinput
				value={value || ''}
				onChange={onChange}
				placeholder='search...'
			/>
		</div>
	);
};

GlobalFilter.propTypes = {
    filter: PropTypes.string, 
    setFilter: PropTypes.func.isRequired
};

export default GlobalFilter;
