
function Image(props) {
    const imagePath = require(`${props.src}`);

    return (
        <img src={imagePath} alt={props.alt}/>
    )
}
export default Image;