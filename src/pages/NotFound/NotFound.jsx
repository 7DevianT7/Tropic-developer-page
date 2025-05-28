import { PicNotFound } from "../../assets";
import Header from "../../components/header/Header";
import './notfound.style.css'

const NotFound = () => {
    return (
        <div className="notfound-wrapper">
            <Header
            text='Page not found'
            />
            <PicNotFound />
        </div>
    )
};

export default NotFound;