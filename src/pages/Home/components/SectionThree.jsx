import { PicWorkOne, PicWorkThree, PicWorkTwo } from '../../../assets';
import Header from '../../../components/header/Header';
import '../home.style.css'
import OurWorkItem from './OurWorkItem';

const SectionThree = () => {

    const works = [
        {
            id: 1,
            picture: <PicWorkOne />,
            title: 'Creating Accessible Web apps'
        },
        {
            id: 2,
            picture: <PicWorkTwo />,
            title: 'Creating Accessible Web apps'
        },
        {
            id: 3,
            picture: <PicWorkThree />,
            title: 'Creating Accessible Web apps'
        }
    ];

    return (
        <div className='home-secThree'>
            <div className='home-secThree-title'>
                <Header
                    text='Our Work'
                />
                <p>From small start-ups to multinational corporations, we've helped our client create more inclusive digital ecosystems for employees, clients and audiences alike.</p>
            </div>
            <div className='home-secThree-works'>
                {works.map((work) => {
                    return (
                        <OurWorkItem
                            key={work.id}
                            picture={work.picture}
                            title={work.title}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default SectionThree;