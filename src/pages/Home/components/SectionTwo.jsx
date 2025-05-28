import { PicHomeSectionTwo } from '../../../assets';
import Header from '../../../components/header/Header';
import '../home.style.css'

const SectionTwo = () => {
    return (
        <div className='home-secTwo'>
            <div className='home-secTwo-contant'>
                <Header
                    text='About Our Mission'
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad similique inventore pariatur corrupti cumque maxime, quae deserunt porro necessitatibus esse natus debitis autem maiores. Maxime sequi odio cupiditate assumenda fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quo illo voluptates id, suscipit deleniti error quod magnam. Nihil natus blanditiis repudiandae sequi tempore nam molestias nesciunt consectetur inventore suscipit!</p>
            </div>
            <PicHomeSectionTwo
                extClass='home-secTwo-pic'
            />
        </div>
    )
};

export default SectionTwo;