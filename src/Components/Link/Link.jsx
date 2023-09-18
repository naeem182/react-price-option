

const Link = ({ route }) => {
    return (
        <li className=" mr-8">
            <a href={route.path}></a>{route.name}
        </li>
    )
}

export default Link
