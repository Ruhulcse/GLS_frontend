const PasswordStrengthIndicator = ({ password }) => {
	// Function to check password strength
	const getStrength = (password) => {
		const hasUppercase = /[A-Z]/.test(password);
		const hasLowercase = /[a-z]/.test(password);
		const hasNumber = /[0-9]/.test(password);
		const hasSpecialChar = /[!@#\$%\^&\*+-/\[\]\(\)\>\<.,:;'"\}\{]/.test(
			password
		);

		if (password.length === 0) return '';
		if (password.length < 8) return 'weak'; // Weak: less than 8 characters

		const checksPassed = [
			hasUppercase,
			hasLowercase,
			hasNumber,
			hasSpecialChar,
		].filter(Boolean).length;

		// Strong: at least 3 of 4 criteria are met
		if (checksPassed >= 3) return 'strong';
		// Medium: at least 2 of 4 criteria are met
		if (checksPassed >= 2) return 'medium';
		// Anything less than 2 criteria
		return 'weak';
	};

	const strength = getStrength(password);

	// Determine the color for the strength bar based on password strength
	const getColor = () => {
		switch (strength) {
			case 'weak':
				return 'bg-red-500';
			case 'medium':
				return 'bg-yellow-500';
			case 'strong':
				return 'bg-green-500';
			default:
				return 'bg-gray-300';
		}
	};

	return (
		<div className="mt-1">
			<div className="h-2 w-full bg-gray-300 rounded-full">
				<div
					className={`h-full ${getColor()} rounded-full transition-all duration-300 ease-in-out`}
					style={{
						width: strength
							? `${
									strength === 'weak' ? 33 : strength === 'medium' ? 66 : 100
							  }%`
							: '0%',
					}}
				></div>
			</div>
			{/* {strength && (
				<p className={`text-sm mt-1 ${getColor().replace('bg-', 'text-')}`}>
					Password strength: {strength}
				</p>
			)} */}
		</div>
	);
};

export default PasswordStrengthIndicator;
