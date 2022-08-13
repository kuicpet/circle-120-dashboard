// Data -- Students & Tutors
import { students, tutors } from './data.mjs'
function startApp() {
  // Dom Elemnts
  let studentTable = document.querySelector('#table')
  let input = document.querySelector('#search')
  let tFirstName = document.querySelector('.first_name')
  let tLastName = document.querySelector('.last_name')
  let tAge = document.querySelector('.age')
  let total = document.querySelector('.total')
  let total_females = document.querySelector('.females')
  let total_males = document.querySelector('.males')
  let total_front = document.querySelector('.front')
  let total_back = document.querySelector('.back')
  let total_cloud = document.querySelector('.cloud')
  let total_devops = document.querySelector('.devops')
  let average_age = document.querySelector('.average_age')
  let min_age = document.querySelector('.min_age')
  let max_age = document.querySelector('.max_age')
  let searchInput = document.querySelector('#search')
  let descBtn = document.querySelector('.desc')
  let ascBtn = document.getElementById('asc')
  

  // Total Students
  const getTotalStudents = () => {
    let totalStudents = students.length
    return total.textContent = totalStudents
  }
  getTotalStudents()

  // Male Students
  const getTotalMaleStudents = () => {
    let males = students.filter((item) => item.gender === 'male')
    let no = males.length
    return total_males.textContent = no
  }
  getTotalMaleStudents()

  // Female Students
  const getTotalFemaleStudents = () => {
    let females = students.filter((item) => item.gender === 'female')
    let no = females.length
    return total_females.textContent = no
  }
  getTotalFemaleStudents()

  // Min Age
  const getMinStudentsAge = () => {
    let res = students[0].age
    for (let i = 0; i < students.length; i++) {
      res = Math.min(res, students[i].age)
    }
    return min_age.textContent = res
  }
  getMinStudentsAge()

  // Max Age
  const getMaxStudentsAge = () => {
    let res = students[0].age
    for (let i = 0; i < students.length; i++) {
      res = Math.max(res, students[i].age)
    }
    return max_age.textContent = res
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
    return average_age.textContent = Math.trunc(ave)
  }
  getAvgStudentAge()

  // Frontend Students
  const getTotalFrontendStudents = () => {
    let frontend = students.filter((item) => item.tracks === 'frontend')
    let no = frontend.length
    return total_front.textContent = no
  }
  getTotalFrontendStudents()

  // Backend students
  const getTotalBackendStudents = () => {
    let backend = students.filter((item) => item.tracks === 'backend')
    let no = backend.length
    return total_back.textContent = no
  }
  getTotalBackendStudents()

  // Cloud Students
  const getTotalCloudStudents = () => {
    let cloud = students.filter((item) => item.tracks === 'cloud')
    let no = cloud.length
    return total_cloud.textContent = no
  }
  getTotalCloudStudents()
  
  // Cloud Students
  const getTotaldevOpsStudents = () => {
    let devops = students.filter((item) => item.tracks === 'devops')
    let no = devops.length
    return total_devops.textContent = no
  }
  getTotaldevOpsStudents()

  // Create Table
  const populateTable = () => {
    studentTable.innerHTML = ''
    for (let data of students) {
      let row = studentTable.insertRow(-1)

      let sn = row.insertCell(0)
      sn.innerHTML = data.id

      let first_name = row.insertCell(1)
      first_name.innerHTML = data.firstname

      let last_name = row.insertCell(2)
      last_name.innerHTML = data.lastname

      let age = row.insertCell(3)
      age.innerHTML = data.age

      let gender = row.insertCell(4)
      gender.innerHTML = data.gender

      let email = row.insertCell(5)
      email.innerHTML = data.email

      let tracks = row.insertCell(6)
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
      return a.firstname > b.firstname
    })
    populateTable()
  }
  // sort in ascending order
const ascSort = () => {
  students.sort((a, b) => {
    return a.firstname > b.firstname
  })
  populateTable()
}
// sort in descending order
 const descSort = () => {
  students.sort((a, b) => {
    return a.firstname > b.firstname
  }).reverse()
  populateTable()
 }

  // Sort Table By Last Name
  const sortByLastName = () => {
    students.sort((a, b) => {
      return a.lastname > b.lastname
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
  searchInput.addEventListener('keyup', (e) => {
    e.preventDefault()
    filterTable()
  })

  descBtn.addEventListener('click', (e) => {
    e.preventDefault()
    descSort()
  })

  ascBtn.addEventListener('click', (e) => {
    e.preventDefault()
    ascSort()
  })
  
  tFirstName.addEventListener('click', (e) => {
    e.preventDefault()
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
