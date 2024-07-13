import Section from "../Components/section"
import Navbar from "../Components/Navbar"
import google from '../assets/Frame 34 (1).svg'
import meta from '../assets/Frame 34 (2).svg'
import figma from '../assets/Frame 34 (3).svg'


const EmployerLog2 = () => {
    const nav = [
        { id: 1, name: 'Applied Jobs' },
        { id: 2, name: 'Posted Jobs' },
        { id: 3, name: 'Interviews' },
        { id: 4, name: 'Archieved' },
        { id: 5, name: 'Messages' },
    ]
    return (
        <div className="netflix-employer-bg"> 
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
                img={google}
                title="Digital Marketer"
                description="Google"
                info1="Full-Time"
                info2="Expert"
                info3="Remote"
                info4="$32k/month"
                info5="Archived 4days ago"
            />
            <Section
                img={meta}
                title="UX Designer"
                description="Meta"
                info1="Full-Time"
                info2="Expert"
                info3="Remote"
                info4="$10k/month"
                info5="Archived 5weeks ago"
            />
            <Section
                img={figma}
                title="Data Analysis"
                description="figma"
                info1="Full-Time"
                info2="Expert"
                info3="Remote"
                info4="$32k/month"
                info5="Archived 3months ago"
            />
        </div>
        
    )
}

export default EmployerLog2







