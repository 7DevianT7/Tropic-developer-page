import '../home.style.css'

const OurClientItem = ({ picture, comment, name, company }) => {
    return (
        <div className='our-client-item'>
            {picture}
            <p className='client-comment'>{comment}</p>
            <p className='client-name'>{name}</p>
            <p className='client-company'>{company}</p>
        </div>
    )
};

export default OurClientItem;