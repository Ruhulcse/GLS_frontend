import useSkin from '@/hooks/useSkin';
import PropTypes from 'prop-types';
const Card = ({
	children,
	title,
	subtitle,
	headerslot,
	className = 'custom-class',
	bodyClass = 'p-6',
	noborder,
	titleClass = 'custom-class',
}) => {
	const [skin] = useSkin();

	return (
		<div
			className={`
        card rounded-md bg-white dark:bg-slate-800   ${
					skin === 'bordered'
						? ' border border-slate-200 dark:border-slate-700'
						: 'shadow-lg'
				}
   
    ${className}
        `}
		>
			{(title || subtitle) && (
				<header className={`card-header ${noborder ? 'no-border' : ''}`}>
					<div>
						{title && <div className={`card-title ${titleClass}`}>{title}</div>}
						{subtitle && <div className='card-subtitle'>{subtitle}</div>}
					</div>
					{headerslot && <div className='card-header-slot'>{headerslot}</div>}
				</header>
			)}
			<main className={`card-body ${bodyClass}`}>{children}</main>
		</div>
	);
};

// do prop validation

Card.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	headerslot: PropTypes.node,
	className: PropTypes.string,
	bodyClass: PropTypes.string,
	noborder: PropTypes.bool,
	titleClass: PropTypes.string,
};

export default Card;
