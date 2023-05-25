import { useRef } from "react";
import Close from '../img/Close.svg'

function Notification(){
    const notRef = useRef(null)
    return (
        <div ref={notRef} className='not'>
            <p>This Project was made by <a href="https://github.com/amza-web">Amza Omiteru</a> and designed by <a href="https://www.codewell.cc/challenges/yelpcamp-by-colt-steele--6144c7c8a383e41090a3d84b">Codewell</a></p>
            <button onClick={()=>{notRef.current.remove()}}>
                <img src={Close} alt="Close Button" />
            </button>
        </div>
    )
}
export default Notification;