import styles from "./App.module.css";
import person from "./person";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{person.name}</h1>
      <p className={styles.role}>{person.role}</p>
      <div className={styles.contacts}>
        <p className={styles.contact}>
          Email:{" "}
          <a href={`mailto:${person.email}`} className={styles.contactLink}>
            {person.email}
          </a>
        </p>
        <p className={styles.contact}>
          Telefone:{" "}
          <a href={`tel:${person.phone}`} className={styles.contactLink}>
            {person.phone}
          </a>
        </p>
        <p className={styles.contact}>
          Github:{" "}
          <a href={person.githubUrl} className={styles.contactLink}>
            {person.github}
          </a>
        </p>
        <p className={styles.contact}>
          Linkedin:{" "}
          <a href={person.linkedin} className={styles.contactLink}>
            {person.linkedin}
          </a>
        </p>
        <p className={styles.contact}>
          Idade: <span className={styles.contactInfo}>{person.age}</span>
        </p>
        <p className={styles.contact}>
          Endereço:{" "}
          <span className={styles.contactInfo}>{person.location}</span>
        </p>
      </div>
      <div className={styles.box}>
        <div>
          <h2 className={styles.subtitles}>Tecnologias Principais</h2>
          {person.technologies.map((tech) => (
            <p key={tech.name} className={styles.tech}>
              {tech.name} - {tech.experience}
            </p>
          ))}
        </div>
        <div>
          <h2 className={styles.subtitles}>Educação</h2>
          {person.education.map((item) => (
            <div key={item.name}>
              <p className={styles.educationUniversity}>{item.university}</p>
              <p className={styles.educationName}>{item.name}</p>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.experience}>
        <div className={styles.experienceTitle}>
          <h2 className={styles.subtitles}>Experiência</h2>
          <p className={styles.experienceTotalTime}>
            ({person.totalExperience})
          </p>
        </div>
        <div className={styles.experiences}>
          {person.experiences.map((experience) => (
            <div key={experience.id}>
              <div className={styles.experienceBox}>
                <p className={styles.experienceName}>{experience.name}</p>
                <p className={styles.experienceType}>
                  {experience.contractType}
                </p>
              </div>
              <div className={styles.experienceBox}>
                <p className={styles.experienceRole}>{experience.role}</p>
                <p className={styles.experienceTime}>{experience.time}</p>
              </div>

              {experience.hardSkills.length > 0 && (
                <>
                  <p className={styles.experienceSkillTitle}>Desenvolvido</p>
                  <div className={styles.skillLits}>
                    {experience.hardSkills.map((skill) => (
                      <p key={skill} className={styles.skill}>
                        {skill}
                      </p>
                    ))}
                  </div>
                </>
              )}

              {experience.softSkills.length > 0 && (
                <>
                  <p className={styles.experienceSkillTitle}>Soft Skills</p>
                  <div className={styles.skillLits}>
                    {experience.softSkills.map((skill) => (
                      <p key={skill} className={styles.skill}>
                        {skill}
                      </p>
                    ))}
                  </div>
                </>
              )}

              {experience.references.length > 0 && (
                <>
                  <p className={styles.experienceSkillTitle}>Referências</p>
                  <div className={styles.skillLits}>
                    {experience.references.map((reference) => (
                      <p key={reference} className={styles.reference}>
                        {reference}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
