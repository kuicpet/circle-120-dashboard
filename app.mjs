// Data -- Students & Tutors
import { students, tutors } from './data.mjs'
function startApp() {
  // Dom Elemnts
  let studentTable = document.getElementById('#table')
  let input = document.querySelector('#search')
  let tFirstName = document.querySelector('.first_name')
  let tLastName = document.querySelector('.last_name')
  let tAge = document.querySelector('.age')

  // Total Students
  const getTotalStudents = () => {
    let totalStudents = students.length
    return totalStudents
  }
  getTotalStudents()

  // Male Students
  const getTotalMaleStudents = () => {
    let males = students.filter((item) => item.gender === 'male')
    return males.length
  }
  getTotalMaleStudents()

  // Female Students
  const getTotalFemaleStudents = () => {
    let females = students.filter((item) => item.gender === 'female')
    return females.length
  }
  getTotalFemaleStudents()

  // Min Age
  const getMinStudentsAge = () => {
    let res = students[0].age
    for (let i = 0; i < students.length; i++) {
      res = Math.min(res, students[i].age)
    }
    return res
  }
  getMinStudentsAge()

  // Max Age
  const getMaxStudentsAge = () => {
    let res = students[0].age
    for (let i = 0; i < students.length; i++) {
      res = Math.max(res, students[i].age)
    }
    return res
  }
  getMaxStudentsAge()

  // Average Age
  const getAvgStudentAge = () => {
    let sum = 0
    let ave = 0
    let length = students.length
    for (let i = 0; i < students.length; i++) {
      sum += students[i].age
    }
    ave = sum / length
    return ave
  }
  getAvgStudentAge()

  // Frontend Students
  const getTotalFrontendStudents = () => {
    let frontend = students.filter((item) => item.tracks === 'frontend')
    return frontend
  }
  getTotalFrontendStudents()

  // Backend students
  const getTotalBackendStudents = () => {
    let backend = students.filter((item) => item.tracks === 'backend')
    return backend
  }
  getTotalBackendStudents()

  // Cloud Students
  const getTotalCloudStudents = () => {
    let cloud = students.filter((item) => item.tracks === 'cloud')
    return cloud
  }
  getTotalCloudStudents()

  // Create Table
  const populateTable = () => {
    studentTable.innerHTML = ''
    for (let data of students) {
      let row = studentTable.insertRow(-1)

      let first_name = row.insertCell(0)
      first_name.innerHTML = data.firstname

      let last_name = row.insertCell(0)
      last_name.innerHTML = data.lastname

      let age = row.insertCell(1)
      age.innerHTML = data.age

      let sex = row.insertCell(2)
      sex.innerHTML = data.sex

      let email = row.insertCell(3)
      email.innerHTML = data.email

      let tracks = row.insertCell(4)
      tracks.innerHTML = data.tracks
    }

    filterTable()
  }

  // Filter Table
  const filterTable = () => {
    let filter = input.value
    let rows = studentTable.getElementsByTagName('tr')
    let flag = false

    for (let row of rows) {
      let cells = row.getElementsByTagName('td')
      for (let cell of cells) {
        if (cell.textContent.indexOf(filter) > -1) {
          flag = true
          break
        }
      }
      if (flag) {
        row.style.display = ''
      } else {
        row.style.display = 'none'
      }
      flag = false
    }
  }

  populateTable()

  // Sort Table By First Name
  const sortByFirstName = () => {
    students.sort((a, b) => {
      return a.firstname - b.firstname
    })
    populateTable()
  }

  // Sort Table By Last Name
  const sortByLastName = () => {
    students.sort((a, b) => {
      return a.lastname - b.lastname
    })
    populateTable()
  }

  // Sort Table By Age
  const sortByAge = () => {
    students.sort((a, b) => {
      return a.age - b.age
    })
    populateTable()
  }

  // Event handlers
  input.addEventListener('keyup', (e) => {
    filterTable()
  })

  tFirstName.addEventListener('click', () => {
    sortByFirstName()
  })

  tLastName.addEventListener('click', () => {
    sortByLastName()
  })

  tAge.addEventListener('click', () => {
    sortByAge()
  })
}

// ======= DO NOT EDIT ============== //
export default startApp
// ======= EEND DO NOT EDIT ========= //
