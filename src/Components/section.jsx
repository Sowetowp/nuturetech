function Section(props) {
    return ( 
        <div className='netflix-border'>
        <div className='netflix-design'>
            <div>
                <h1 className='netflix-active'>Active</h1>
                <span className='netflix-span1'>
                    <img src={props.img} />
                    <span>
                        <h1 className='netflix-h1'>{props.title}</h1>
                        <h2 className='netflix-h2'>{props.description}</h2>
                    </span>
                </span>
                <span className='neflix-span2'>
                    <h3 className='netflix-h3'>{props.info1}</h3>
                    <h3 className='netflix-h3'>{props.info2}</h3>
                    <h3 className='netflix-h3'>{props.info3}</h3>
                </span>
            </div>
            <div>
                <h4 className='netflix-h4'>{props.info4}</h4>
                <h5 className='netflix-h5'>{props.info5}</h5>
            </div>
        </div>
        <hr className='all-hr' />
    </div>
     );
}

export default Section;