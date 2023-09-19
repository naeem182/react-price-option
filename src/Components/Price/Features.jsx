import { AiOutlineCheck } from 'react-icons/ai';
import propTypes from 'prop-types'
const Features = ({ feature }) => {
    return (
        <div className=" my-3 ml-7 flex">
            <AiOutlineCheck className='text-xl font-bold'></AiOutlineCheck>
            {
                feature
            }
        </div>
    )
}
Features.propTypes = {
    feature: propTypes.string
}
export default Features
