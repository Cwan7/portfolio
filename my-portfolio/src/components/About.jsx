import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <h1>My Journey</h1>
            <div className="my-info">
              My journey in the professional world began at LFX Filmworks in 
              Denver, CO, where I served as a Project Designer from May 2022 
              to the present. In this role, I crafted detailed blueprints for 
              large-scale festival booths for major food and beverage companies
               using tools like AutoCAD, SketchUp, and Aspire. This experience 
               honed my precision, problem-solving, and ability to deliver 
               functional designs under pressure, skills that laid a strong 
               foundation for my next chapter.  
            </div>
            <div className="icons-container">
                <img
                alt="blueprints" src="images/blueprint-light.png"
                />
                <img
                alt="arrow" src="images/right-arrow.png"
                />
                <img
                alt="coding" src="images/coding.png"
                />
            </div>
            <div className="my-info">
                Driven by a growing interest in technology and a desire to 
                expand my skill set, I transitioned into software engineering 
                by enrolling in a Full-Stack Software 
                Engineering bootcamp and receiving my certificate in May 2025. 
                This intensive program equipped me with proficiency in various
                 frameworks, databases and API integration. Through
                  hands-on projects, I enhanced my problem-solving 
                  capabilities and teamwork skills, bridging my design 
                  background with a new passion for coding.
                <br></br>
                I’m excited to continue 
                growing in this dynamic field.
            </div>
        </div>
    );
};
export default About;