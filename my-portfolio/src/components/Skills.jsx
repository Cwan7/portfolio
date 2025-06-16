import 'devicon/devicon.min.css';
import './Skills.css';

const Skills = () => {
  const skillLinks = {
    HTML5: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    React: 'https://react.dev/',
    JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'Node.js': 'https://nodejs.org/',
    Express: 'https://expressjs.com/',
    MongoDB: 'https://www.mongodb.com/',
    PostgreSQL: 'https://www.postgresql.org/',
    Python: 'https://www.python.org/',
    TypeScript: 'https://www.typescriptlang.org/',
    jQuery: 'https://jquery.com/',
    'Tailwind CSS': 'https://tailwindcss.com/',
    C: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
  };

  return (
    
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="icon-container">
          <div className="skill-item">
            <a
              href={skillLinks.HTML5}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">HTML5</span>
              <i className="devicon-html5-plain"></i>
            </a>
          </div>
          <div className="skill-item">
            <a
              href={skillLinks.React}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">React</span>
              <i className="devicon-react-original"></i>
            </a>
          </div>
          <div className="skill-item">
            <a
              href={skillLinks.JavaScript}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">JavaScript</span>
              <i className="devicon-javascript-plain"></i>
            </a>
          </div>
          <div className="skill-item">
            <a
              href={skillLinks['Node.js']}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">Node.js</span>
              <i className="devicon-nodejs-line"></i>
            </a>
          </div>
          <div className="skill-item">
            <a
              href={skillLinks.Express}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">Express</span>
              <i className="devicon-express-original"></i>
            </a>
          </div>
          <div className="skill-item">
            <a
              href={skillLinks.MongoDB}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">MongoDB</span>
              <i className="devicon-mongodb-plain"></i>
            </a>
          </div>
          <div className="skill-item">
            <a
              href={skillLinks.PostgreSQL}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">PostgreSQL</span>
              <i className="devicon-postgresql-plain"></i>
            </a>
          </div>
          <div className="skill-item">
            <a
              href={skillLinks.Python}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">Python</span>
              <i className="devicon-python-plain"></i>
            </a>
          </div>
          <div className="skill-item">
            <a
              href={skillLinks.TypeScript}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">TypeScript</span>
              <i className="devicon-typescript-plain"></i>
            </a>
          </div>
          <div className="skill-item">
            <a
              href={skillLinks.jQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">jQuery</span>
              <i className="devicon-jquery-plain"></i>
            </a>
          </div>
          <div className="skill-item">
            <a
              href={skillLinks['Tailwind CSS']}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">Tailwind CSS</span>
              <i className="devicon-tailwindcss-original"></i>
            </a>
          </div>
          <div className="skill-item">
            <a
              href={skillLinks.C}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="skill-description">C#</span>
              <i className="devicon-csharp-plain"></i>
            </a>
          </div>
        </div>
      </div>
    
 
);
};

export default Skills;