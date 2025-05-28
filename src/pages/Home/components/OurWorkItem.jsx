import '../home.style.css'

const OurWorkItem = ({ picture, title }) => {
    return (
        <div className='ourworkitem'>
            {picture}
            <h4>{title}</h4>
        </div>
    )
};

export default OurWorkItem;