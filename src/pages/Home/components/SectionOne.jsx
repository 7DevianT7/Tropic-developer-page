import { PicHomeSectionOne } from '../../../assets';
import GlobalButton from '../../../components/globalbutton/GlobalButton';
import Header from '../../../components/header/Header';
import '../home.style.css'

const SectionOne = () => {
    return (
        <div className='home-secOne'>
            <PicHomeSectionOne
                extClass='home-secOne-pic'
            />
            <div className='home-secOne-contant'>
                <Header
                    text='We are learning React'
                />
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nam cupiditate quisquam sint.</h3>
                <GlobalButton
                    displayText='Click here'
                />
            </div>
        </div>
    )
};

export default SectionOne;