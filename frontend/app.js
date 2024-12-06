document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch("http://localhost:3000/api/patients");
      const patients = await response.json();
  
      const patientsDiv = document.getElementById("patients");
      patients.forEach((patient) => {
        const patientElement = document.createElement("p");
        patientElement.textContent = `${patient.name}, Age: ${patient.age}`;
        patientsDiv.appendChild(patientElement);
      });
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  });
  