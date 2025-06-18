import GlobalButton from '../../../components/globalbutton/GlobalButton';
import '../home.style.css'

const NewsPost = ({ title, content }) => {
    return (
        <div className='news-post'>
            <p className='news-post-title'>{title}</p>
            <p className='news-post-content'>{content}</p>
            <GlobalButton
                displayText='Read more'
                extClass='news-post-button'
            />
        </div>
    )
};

export default NewsPost;