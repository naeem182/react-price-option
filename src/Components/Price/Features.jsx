import { AiOutlineCheck } from 'react-icons/ai';
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

export default Features
