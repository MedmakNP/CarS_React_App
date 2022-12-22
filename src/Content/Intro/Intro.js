import './intro.css';


const Intro = () => {
    return(
        <div className='intro'>
            <div className='container'>
                <p className='title'>The All-New Series</p>
                <p className='brand'>BMW-GT</p>
                <p className='content-intro'>The BMW 3 Series GT is a fine luxury offering, one with notably more road presence and character than a lot of traditional sedans including BMW’s own 3 Series.</p>
                <button className='btn'>Book Now</button>
                <div className='search-wrap'>
                    <div className='search'>
                        <div className='search-elem-wrap'>
                        <div className='search-elem'>
                           <p className='search-text'>Location</p>
                           <div className='arrow'></div>
                        </div>
                        <div className='search-elem'>
                           <p className='search-text'>Brand Name</p>
                           <div className='arrow'></div>
                        </div>
                        <div className='search-elem'>
                           <p className='search-text'>Select Type</p>
                           <div className='arrow'></div>
                        </div>
                        <div className='search-elem'>
                           <p className='search-text'>Select Models</p>
                           <div className='arrow'></div>
                        </div>
                        <button className='search-btn'>Search Now</button> 
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Intro;