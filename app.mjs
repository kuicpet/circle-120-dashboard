function startApp() {
  // Dom Elemnts

  // Data -- Students & Tutors

  // Fetch data
  const qty = 60
  const url = `https://fakerapi.it/api/v1/persons?_quantity=${qty}`
  let studentsArray = []
  const fetchData = async () => {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => studentsArray.push(data.data))
        return console.log(studentsArray)
    } catch (error) {
      console.log(error)
    }
  }

  fetchData()
  // Total Students
  const getTotalStudents = () => {
    let totalStudents = studentsArray.length
    return console.log(`Total Number of Students: ${totalStudents}`)
  }
  getTotalStudents()

  // Male Students
  const getTotalMalestudents = () => {}

  // Female Students
  const getTotalMaleStudents = () => {}

  // Min Age
  const getMinStudentsAge = () => {}

  // Max Age
  const getMaxStudentsAge = () => {}

  // Average Age
  const getAvgStudentAge = () => {}

  // Frontend Students
  const getTotalFrontendStudents = () => {}

  // Backend students
  const getTotalBackendStudents = () => {}

  // Cloud Students
  const getTotalCloudstudents = () => {}

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
