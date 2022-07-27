import { students, tutors } from './data.mjs'
function startApp() {
  // Dom Elemnts

  // Data -- Students & Tutors

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
  const populateTable = () => {}

  // Filter Table
  const filterTable = () => {}

  // Sort Table By Name
  const sortByName = () => {}

  // Sort Table By Age
  const sortByAge = () => {}

  // Event Handlers
}

// ======= DO NOT EDIT ============== //
export default startApp
// ======= EEND DO NOT EDIT ========= //
