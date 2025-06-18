import Header from '../../../components/header/Header';
import '../home.style.css'
import NewsPost from './NewsPost';

const SectionFive = () => {

    const newsPosts = [
        {
            id: 1,
            title: 'Sontag Sustainable Design offers free accessibility audits for nonprofits',
            content: 'This space in for an except or preview of your main article. You can opt to simple add the fisrt paragraph directly, or create a summary or teaser for it.',
        },
        {
            id: 2,
            title: 'What to expect for Global Accessibility Awareness Day 2030',
            content: 'This space in for an except or preview of your main article. You can opt to simple add the fisrt paragraph directly, or create a summary or teaser for it.',
        },
        {
            id: 3,
            title: 'Annual Include Design Challenge Launches on May 18',
            content: 'This space in for an except or preview of your main article. You can opt to simple add the fisrt paragraph directly, or create a summary or teaser for it.',
        }
    ];

    return (
        <div className='home-secFive'>
            <Header
                text='In the News'
            />

            <div className='home-secFive-news'>
                {newsPosts.map((post) => {
                    return (
                        <NewsPost
                            key={post.id}
                            title={post.title}
                            content={post.content}
                        />
                    )
                })}
            </div>

        </div>
    )
};

export default SectionFive;