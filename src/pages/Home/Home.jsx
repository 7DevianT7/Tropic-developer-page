import SectionFour from './components/SectionFour';
import SectionOne from './components/SectionOne';
import SectionThree from './components/SectionThree';
import SectionTwo from './components/SectionTwo';
import './home.style.css'

const Home = () => {
    return (
        <div className='home-wrapper'>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    )
};

export default Home;