import './Projects.css';

const Projects = () => {
    return (
        <div className='projects-container'>
            <h1>My Projects</h1>
            <div className='card-container'>
                <div className="site-card">
                    <a
                    href={'http://44.201.225.161:3003/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-link"
                    >
                        <img alt="Memorista" src="/images/Memorista.png"/>
                        <h2>Memorista</h2>
                        <p>Javascript / Express / MongoDB</p>
                    </a>
                    
                </div>
                <div className="site-card">
                    <a
                    href={'https://pageandpicture.duckdns.org/home'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-link"
                    >
                       <img alt="Page & Picture" src="/images/page-picture.png"/>
                       <h2>Page & Picture</h2>
                       <p>React / Django / PostgreSQL</p> 
                    </a>
                    
                </div>
                <div className="site-card">
                    <a
                    href={'http://44.201.225.161:3005/home'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-link"
                    >
                       <img alt="Quotefolio" src="/images/quote.png"/>
                       <h2>Quotefolio</h2>
                       <p>React / Express / MongoDB / Tailwind</p> 
                    </a>
                </div>
                <div className="site-card">
                    <a
                    href={'http://44.201.225.161:3001/home'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-link"
                    >
                       <img alt="Page & Picture" src="/images/Pawsavvy-Photo.png"/>
                       <h2>PawSavvy</h2>
                       <p>React / C# </p> 
                    </a>
                    
                </div>
            </div>
        </div>
    );
};

export default Projects;