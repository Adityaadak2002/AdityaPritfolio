import React from 'react'

function Backend() {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Backend Developer</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bxs-data'></i>

            <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bxl-mongodb' ></i>

            <div>
                <h3 className="skills__name">MongoDB</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bxl-nodejs' ></i>

            <div>
                <h3 className="skills__name">Express.js</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>
        </div>

        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bxl-python'></i>

            <div>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Basic</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bxl-firebase' ></i>

            <div>
                <h3 className="skills__name">Firebase</h3>
                <span className="skills__level">Basic</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bxl-github' ></i>

            <div>
                <h3 className="skills__name">GitHub</h3>
                <span className="skills__level">Basic</span>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Backend
