const form = document.getElementById("form-assignment");
const imgApproved = '<img src="./images/thumbs-up.png" alt="thumbs-up"/>';
const imgDisapproved =
  '<img src="./images/thumbs-down.png" alt="thumbs-down"/>';
const spanApproved = "<span class='result approved'>Aprovado</span>";
const spanDisapproved = "<span class='result disapproved'>Reprovado</span>";

let lines = "";
const grades = [];
const assignments = [];
const minimumGrade = parseFloat(
  prompt("Insira a sua nota mínima para aprovação: ")
);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addLine();
  updateTable();
  calculateAverage();
});

function addLine() {
  const inputAssignmentName = document.getElementById("assignment-name");
  const inputAssignmentGrade = document.getElementById("assignment-grade");

  if (assignments.includes(inputAssignmentName.value)) {
    alert(`a atividade ${inputAssignmentName.value} já foi inserida.`);
  } else {
    assignments.push(inputAssignmentName.value);
    grades.push(parseFloat(inputAssignmentGrade.value));

    let line = `<tr>`;
    line += `<td> ${inputAssignmentName.value}</td>`;
    line += `<td> ${inputAssignmentGrade.value}</td>`;
    line += `<td>${
      inputAssignmentGrade.value >= minimumGrade ? imgApproved : imgDisapproved
    } </td>`;
    line += `</tr>`;

    lines += line;

    alert(
      `atividade: ${inputAssignmentName.value} - nota: ${inputAssignmentGrade.value}`
    );
  }

  inputAssignmentName.value = "";
  inputAssignmentGrade.value = "";
}

function updateTable() {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = lines;
}

function calculateAverage() {
  let sumGrades = 0;

  for (let i = 0; i < grades.length; i++) {
    sumGrades += grades[i];
  }

  const average = sumGrades / grades.length;
  document.getElementById("average-value").innerHTML = average.toFixed(1);

  document.getElementById("average-result-word").innerHTML =
    average >= minimumGrade ? spanApproved : spanDisapproved;
}
