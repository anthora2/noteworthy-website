import './MeetUs.css'
import PersonCard from './components/PersonCard'
import image1 from './images/noteworthy_member_1.jpg'
import image2 from './images/noteworthy_member_2.jpg'
import image3 from './images/noteworthy_member_3.jpg'
import image4 from './images/noteworthy_member_4.jpg'
import image5 from './images/noteworthy_member_5.jpg'
import image6 from './images/noteworthy_member_6.jpg'
import image7 from './images/noteworthy_member_7.jpg'
import image8 from './images/noteworthy_member_8.jpg'
import image9 from './images/noteworthy_member_9.jpg'








function MeetUs() {
    return (
        <div>
            <div className='meet-us-outer-div'>
                <h1> MEET THE PEOPLE OF NOTE !</h1>
            </div>
            <div className='meet-us-inner-div'> 
                <PersonCard photo={image1} name={'alex'}/>
                <PersonCard photo={image2} name={'andrew'}/>
                <PersonCard photo={image3} name={'anthonyx'}/>
                <PersonCard photo={image4} name={'athena'}/>
                <PersonCard photo={image5} name={'bhaskar'}/>
                <PersonCard photo={image6} name={'caitlyn'}/>
                <PersonCard photo={image7} name={'chris'}/>
                <PersonCard photo={image8} name={'dell'}/>
                <PersonCard photo={image9} name={'eddie'}/>




            </div>
        </div>
        
    )
}

export default MeetUs;