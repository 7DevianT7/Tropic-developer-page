import mytechlogo from './mytechlogo.png'
import homesectionone from './Leroy-jenkins.webp'
import homesectiontwo from './pngimg.com - south_park_PNG12.png'
import work1 from './legendary-leeroy-jenkins-1668062618.jpg'
import work2 from './work3.jpg'
import work3 from './S10E8-Thumbnail.webp'
import client1 from './client1.jpg'
import client2 from './client2.jpg'
import client3 from './client3.jpg'
import notfound from './tumblr_l82imby06j1qdw2puo1_1280.jpg'

const MyTechLogo = ({ extClass }) => {
    return <img className={extClass} src={mytechlogo} />
}

const PicHomeSectionOne = ({ extClass }) => {
    return <img className={extClass} src={homesectionone} />
}

const PicHomeSectionTwo = ({ extClass }) => {
    return <img className={extClass} src={homesectiontwo} />
}

const PicWorkOne = ({ extClass }) => {
    return <img className={extClass} src={work1} />
}

const PicWorkTwo = ({ extClass }) => {
    return <img className={extClass} src={work2} />
}

const PicWorkThree = ({ extClass }) => {
    return <img className={extClass} src={work3} />
}

const PicClientOne = ({ extClass }) => {
    return <img className={extClass} src={client1} />
}

const PicClientTwo = ({ extClass }) => {
    return <img className={extClass} src={client2} />
}

const PicClientThree = ({ extClass }) => {
    return <img className={extClass} src={client3} />
}

const PicNotFound = ({ extClass }) => {
    return <img className={extClass} src={notfound} />
}


export {
    MyTechLogo,
    PicHomeSectionOne,
    PicHomeSectionTwo,
    PicWorkOne,
    PicWorkTwo,
    PicWorkThree,
    PicClientOne,
    PicClientTwo,
    PicClientThree,
    PicNotFound
}