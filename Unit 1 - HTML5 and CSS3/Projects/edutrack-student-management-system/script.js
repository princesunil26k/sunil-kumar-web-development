let students = JSON.parse(localStorage.getItem("students")) || [];
let editIndex = -1;

const studentId = document.getElementById("studentId");
const studentName = document.getElementById("studentName");
const course = document.getElementById("course");
const semester = document.getElementById("semester");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const addBtn = document.getElementById("addBtn");

const studentTable = document.getElementById("studentTable");
const studentCount = document.getElementById("studentCount");
const searchBox = document.getElementById("searchBox");

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function updateCount() {
    studentCount.textContent = students.length;
}

function clearForm() {
    studentId.value = "";
    studentName.value = "";
    course.value = "";
    semester.value = "";
    email.value = "";
    phone.value = "";
}

function renderStudents() {

    studentTable.innerHTML = "";

    students.forEach((student, index) => {

        studentTable.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>${student.semester}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>
                <button onclick="editStudent(${index})">
                    Edit
                </button>

                 <button onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

    updateCount();
}

addBtn.addEventListener("click", () => {

    if (
        studentId.value === "" ||
        studentName.value === ""
    ) {
        alert("Please enter Student ID and Name");
        return;
    }

    const student = {
        id: studentId.value,
        name: studentName.value,
        course: course.value,
        semester: semester.value,
        email: email.value,
        phone: phone.value
    };

    if(editIndex === -1){

        students.push(student);

    }
    else{

        students[editIndex] = student;

        editIndex = -1;

     addBtn.textContent = "Add Student";
    }

    saveStudents();
    renderStudents();
    clearForm();
});

function deleteStudent(index) {

    if (confirm("Delete this student?")) {

        students.splice(index, 1);

        saveStudents();
        renderStudents();
    }
}

function generateStudents() {

    const names = [
        "Sunil",
        "Rahul",
        "Priya",
        "Ananya",
        "Ravi",
        "Kiran",
        "Sneha",
        "Arjun",
        "Pooja",
        "Vikas",
        "Deepa",
        "Rohit",
        "Asha",
        "Nikhil",
        "Manoj",
        "Divya",
        "Harsha",
        "Neha",
        "Akash",
        "Varun"
    ];

    students = [];

    names.forEach((name, index) => {

        students.push({
            id: "BCA" + (1001 + index),
            name: name,
            course: "BCA",
            semester: Math.floor(Math.random() * 6) + 1,
            email: name.toLowerCase() + "@gmail.com",
            phone: "900000" + (100 + index)
        });

    });

    saveStudents();
    renderStudents();

    alert("20 Demo Students Added Successfully!");
}

function searchStudents() {

    const keyword =
        searchBox.value.toLowerCase();

    studentTable.innerHTML = "";

    students.forEach((student,index)=>{

        if(

            student.name
                .toLowerCase()
                .includes(keyword)

            ||

            student.id
                .toLowerCase()
                .includes(keyword)

        ){

            studentTable.innerHTML += `
            <tr>

                <td>${student.id}</td>

                <td>${student.name}</td>

                <td>${student.course}</td>

                <td>${student.semester}</td>

                <td>${student.email}</td>

                <td>${student.phone}</td>

                <td>
                     <button onclick="editStudent(${index})">
                        Edit
                     </button>

                    <button onclick="deleteStudent(${index})">
                        Delete
                     </button>
                </td>

            </tr>
            `;
        }

    });

}

searchBox.addEventListener(
    "keyup",
    searchStudents
);

renderStudents();

function editStudent(index) {

    const student = students[index];

    studentId.value = student.id;
    studentName.value = student.name;
    course.value = student.course;
    semester.value = student.semester;
    email.value = student.email;
    phone.value = student.phone;

    editIndex = index;

    addBtn.textContent = "Update Student";
}