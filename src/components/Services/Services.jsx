import { Link } from 'react-router-dom'
import broker from '../../assets/home/broker.jpg'
import carrier from '../../assets/home/carrier.jpg'
import shipper from '../../assets/home/shipper.jpg'
import Container from '../../shared/Container/Container'
const Services = () => {
    const service = [
        {
            title:'Carriers',
            image:carrier,
            link:'/carriers'
        },
        {
            title:'Brokers',
            image:broker,
            link:'/brokers'
        },
        {
            title:'Shippers',
            image:shipper,
            link:'/shippers'
        },
    ]
  return (
    <div className='py-20'>
        <Container>
        <div className='flex flex-wrap justify-center sm:space-x-4 sm:space-y-0 space-y-4'>
           {
            service.map((item, i)=>(
                <div className='h-auto w-80 relative group shadow shadow-slate-400' key={i}>
                    <img src={item.image} alt="service-image" className='h-auto w-auto object-contain' data-aos="zoom-in" />
                    <div className='relative flex flex-col justify-center items-center inset-0 transition-all duration-1000 space-y-4 py-6 bg-[#FFFFFF] group-hover:bg-[#0A0D10]'>
                    <h3 className='text-xl font-semibold text-[#03045e] group-hover:text-white'>{item.title}</h3>
                    <div>
                    <Link to={item.link}>
                    <button className='px-6 py-3 text-base font-semibold text-white rounded-sm bg-[#03045e] hover:bg-[#0C0E7A] transition-all duration-500'>Get Started</button>
                    </Link>
                    </div>
                    </div>
                </div>
            ))
           } 
        </div>
        </Container>
    </div>
  )
}

export default Services