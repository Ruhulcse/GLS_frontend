import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useState } from 'react';

// import images
import img1 from '@/assets/images/all-img/big-shap1.png';
import img2 from '@/assets/images/all-img/big-shap2.png';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';

const tables = [
	{
		name: 'Personal',
		price_Yearly: '$96',
		limit: '200kg',
		price: '200',
		button: 'Subscribe',
		bg: 'bg-warning-500',
		description: '200kg maximum weight',
		img: img1,
		api_id: 'price_1N1ZBIJggWefJ04AzhNvgacQ',
	},
	{
		name: 'Commercial',
		price_Yearly: '$196',
		price: '1000',
		button: 'Subscribe',
		limit: '1000kg',
		bg: 'bg-info-500',
		ribon: 'Most popular',
		img: img2,
		description: '1000kg maximum weight',
		api_id: 'price_1N1ZOgJggWefJ04ArJBwwOq9',
	},
];

const Plans = () => {
	const { email } = useSelector(state => state.user.user);

	const [check, setCheck] = useState(true);
	// const toggle = () => {
	// 	setCheck(!check);
	// };

	const handleSubscription = async priceId => {
		const stripePromise = await loadStripe(
			import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
		);
		const response = await fetch('http://localhost:5000/create_subscription', {
			method: 'POST',
			headers: { 'Content-Type': 'Application/JSON' },
			body: JSON.stringify({
				email,
				priceId,
			}),
		});

		if (response.status === 409) {
			const data = await response.json();
			if (data && data.redirectUrl) {
				window.location.href = data.redirectUrl; // redirect to billing portal if user is already subscribed
			}
		} else {
			const session = await response.json();
			stripePromise.redirectToCheckout({
				sessionId: session.id,
			});
		}
	};

	return (
		<div>
			<div className='space-y-5'>
				<Card>
					{/* <div className="flex justify-between mb-6">
            <h4 className="text-slate-900 text-xl font-medium">Packages</h4>
            <label className="inline-flex text-sm cursor-pointer">
              <input type="checkbox" onChange={toggle} hidden />
              <span
                className={` ${
                  check
                    ? "bg-slate-900 dark:bg-slate-900 text-white"
                    : "dark:text-slate-300"
                } 
                px-[18px] py-1 transition duration-100 rounded`}
              >
                Yearly
              </span>
              <span
                className={`
              ${
                !check
                  ? "bg-slate-900 dark:bg-slate-900 text-white"
                  : " dark:text-slate-300"
              }
                px-[18px] py-1 transition duration-100 rounded
                `}
              >
                Monthly
              </span>
            </label>
          </div> */}
					<div className='grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
						{tables.map((item, i) => (
							<div
								className={` ${item.bg}
          price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative overflow-hidden z-[1]
          `}
								key={i}
							>
								<div className='overlay absolute right-0 top-0 w-full h-full z-[-1]'>
									<img src={item.img} alt='' className='ml-auto block' />
								</div>
								{item.ribon && (
									<div className='text-sm font-medium bg-slate-900 dark:bg-slate-900 text-white py-2 text-center absolute ltr:-right-[43px] rtl:-left-[43px] top-6 px-10 transform ltr:rotate-[45deg] rtl:-rotate-45'>
										{item.ribon}
									</div>
								)}
								<header className='mb-6'>
									<h4 className='text-xl mb-5'>{item.name}</h4>
									<div className='space-x-4 relative flex items-center mb-5 rtl:space-x-reverse'>
										{check ? (
											<span className='text-[32px] leading-10 font-medium'>
												{item.price_Yearly}{' '}
											</span>
										) : (
											<span className='text-[32px] leading-10 font-medium'>
												${item.price}
											</span>
										)}

										<span className='text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto'>
											Save 20%
										</span>
									</div>
									<p className='text-slate-500 dark:text-slate-300 text-sm'>
										<strong>Limit {item.limit}</strong>
									</p>
								</header>
								<div className='price-body space-y-8'>
									<p className='text-sm leading-5 text-slate-600 dark:text-slate-300'>
										{item.description}
									</p>
									<div>
										<Button
											text={item.button}
											className='btn-outline-dark dark:border-slate-400 w-full'
											onClick={() => handleSubscription(item.api_id)}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Plans;
