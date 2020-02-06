import React from 'react';
import { ReactComponent as LoaderIcon} from '../styles/tail-spin.svg'


const Loader = ({children, menu})=>{
    return (
        <div className="loader">
        <div className="loader-inner">
        <LoaderIcon/>
        </div>

        </div>
    )
}

export default Loader