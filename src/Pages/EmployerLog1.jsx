import Navbar from '../Components/Navbar'
import '../Styles/EmployerLog.css'
import netflix from '../assets/Frame 34.svg'
import google from '../assets/Frame 34 (1).svg'
import meta from '../assets/Frame 34 (2).svg'
import figma from '../assets/Frame 34 (3).svg'
import twitter from '../assets/Frame 34 (4).svg'
import Section from '../Components/section'

const EmployerLog1 = () => {

    const nav = [
        { id: 1, name: 'Applied Jobs' },
        { id: 2, name: 'Posted Jobs' },
        { id: 3, name: 'Interviews' },
        { id: 4, name: 'Archieved' },
        { id: 5, name: 'Messages' },
    ]

    return (
        <div className='netflix-employer-bg'>
            <Navbar />
            <div className='netflix-'>
                {
                    nav.map((navbar, i) => (
                        <span key={navbar.id} className='netflix-span-list'>
                            <li className='netflix-list'>{navbar.name}</li>
                        </span>
                    ))
                }
            </div>
            <Section
                img={netflix}
                title="User Interface Designer"
                description="Netflix"
                info1="Full-Time"
                info2="Expert"
                info3="Remote"
                info4="$10k/month"
                info5="Posted 2mins ago"
            />
            <Section
                img={google}
                title="Digital Marketer"
                description="Google"
                info1="Full-Time"
                info2="Expert"
                info3="Remote"
                info4="$32k/month"
                info5="Posted 4days ago"
            />
            <Section
                img={meta}
                title="UX Designer"
                description="Meta"
                info1="Full-Time"
                info2="Expert"
                info3="Remote"
                info4="$10k/month"
                info5="Posted 5weeks ago"
            />
            <Section
                img={figma}
                title="Data Analysis"
                description="Figma"
                info1="Full-Time"
                info2="Expert"
                info3="Remote"
                info4="$32k/month"
                info5="posted 3months ago"
            />
            <Section
                img={twitter}
                title="Data Scientist"
                description="X"
                info1="Full-Time"
                info2="Expert"
                info3="Remote"
                info4="$32k/month"
                info5="posted 3months ago"
            />
        </div>


    )
}




export default EmployerLog1