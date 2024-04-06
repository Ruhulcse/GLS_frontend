import moment from 'moment';

export const dateTime = timestamp => {
	return !timestamp ? '' : moment(timestamp).format('DD-MM-YYYY, hh:mm A');
};

export const humanDate = timestamp => {
	return moment(timestamp).format('dddd, MMMM Do, YYYY');
};

export const moneyFormatter = (amount, currency = '', precision = 2) => {
	if (amount && !isNaN(amount)) {
		const number = parseFloat(amount).toFixed(precision);
		const result = Intl.NumberFormat('en-US').format(number);
		return `${result} ${currency}`;
	} else if (!isNaN(amount)) {
		return `${amount} ${currency}`;
	}
};
