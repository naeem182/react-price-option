import PropTypes from 'prop-types'; // ES6

const Link = ({ route }) => {
    return (
        <li className=" mr-8 ">
            <a href={route.path}></a>{route.name}
        </li>
    )
}
Link.PropTypes = {
    route: PropTypes.object
}
export default Link
