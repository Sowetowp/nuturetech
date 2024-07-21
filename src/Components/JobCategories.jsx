import React, { useState } from 'react'
import '../Styles/JobCategories.css'
import marketing from '../assets/Marketing.svg'
import uiux from '../assets/UIUX.svg'
import Finance from '../assets/Finance.svg'
import WebDev from '../assets/WebDev.svg'
import ProjectManagement from '../assets/PM.svg'
import Consulting from '../assets/Consulting.svg'
import Graphic from '../assets/Graphics.svg'
import VideoEditor from '../assets/Video Editor.svg'

const JobCategories = () => {
    const [jobCat, setJobCat] = useState("")
    const [filter, setFilter] = useState('hue-rotate(180deg)')



    // Sample data for job categories
    const Category = [
        { id: 1, name: 'Marketing & Communication', jobs: '58', images: marketing },
        { id: 2, name: 'UI / UX Design', jobs: '120', images: uiux },
        { id: 3, name: 'Finance Management', jobs: '230', images: Finance },
        { id: 4, name: 'Web Development', jobs: '100', images: WebDev },
        { id: 5, name: 'Project Management', jobs: '87', images: ProjectManagement },
        { id: 6, name: 'Business & Consulting', jobs: '23', images: Consulting },
        { id: 7, name: 'Graphic Designer', jobs: '65', images: Graphic },
        { id: 8, name: 'Video Editor', jobs: '120', images: VideoEditor },
    ];


    return (
        <div className='JobCategories'>
            <div className='top-texts'>
                <h5>How to find a Perfect Job</h5>
                <p>Choose Categories</p>
            </div>
            <div className='jobComponent-head'>
                <div className='JobComponent-top'>
                    <div className='JobComponent'>
                        <div className='JobComponent-Inner'>

                            {Category.map(item => (
                                <div style={item.id === jobCat ? {backgroundColor:`#005B00` } : {}} className='Inner2' onClick={()=> setJobCat(item.id)} key={item.id}>

                                    <div className='CategoryIcons'>
                                        <img src={item.images} alt={`Image ${item.id}`} style={{ filter: filter }} onClick={()=> setFilter(item.images)} />
                                    </div>

                                    <div>
                                        <div className='CategoryTexts'>
                                            <h3  style={item.id == jobCat ? {color:`#f8f8f8`} : {}} className='JobTitle'>{item.name}</h3>
                                            <p  style={item.id == jobCat ? {color:`#f8f8f8`} : {}} className='NumberAvailable'>{item.jobs} Jobs Available</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCategories