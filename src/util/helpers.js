import moment from 'moment';

export const dateTime = timestamp => {
	return !timestamp ? '' : moment(timestamp).format('DD-MM-YYYY, hh:mm A');
};
