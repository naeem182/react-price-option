import propTypes from 'prop-types'
import Features from './Features'

const PriceOption = ({ option }) => {
    const { name, price, features } = option

    return (
        <div className=' bg-blue-500 p-5 text-white rounded-md'>
            <h2 className='text-center'>
                <span className=' text-3xl'>{price}</span>
                <span className=' text-3xl'>/month</span>
            </h2>
            <h2 className=' text-2xl text-center'>{name}</h2>
            <div>
                {
                    features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                }
            </div>
        </div>
    )
}
PriceOption.propTypes = {
    Option: propTypes.object
}
export default PriceOption
