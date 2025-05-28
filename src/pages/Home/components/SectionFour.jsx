import { PicClientOne, PicClientThree, PicClientTwo } from '../../../assets';
import Header from '../../../components/header/Header';
import '../home.style.css'
import OurClientItem from './OurClientItem';

const SectionFour = () => {

    const clients = [
        {
            id: 1,
            name: 'Kenny McCormick',
            company: 'South Park',
            comment: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
            picture: <PicClientOne />
        },
        {
            id: 2,
            name: 'Eric Cartman',
            company: 'FoundationSouth Park',
            comment: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
            picture: <PicClientTwo />
        },
        {
            id: 3,
            name: 'Chef Jerome McElroy',
            company: 'South Park',
            comment: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
            picture: <PicClientThree />
        }
    ];

    return (
        <div className='home-secFour'>
            <Header
                text='Feedback from Our Client'
            />
            <div className='home-secFour-clients-feedback'>
                {clients.map((client) => {
                    return (
                        <OurClientItem
                            key={client.id}
                            picture={client.picture}
                            comment={client.comment}
                            name={client.name}
                            company={client.company}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default SectionFour;