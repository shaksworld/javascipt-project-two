const studentData = [
    {
        name: "Esther Howard", 
        studentID : "GIC123456789",
        email : "estherhoward@gmail.com",
        debt : "200,000",
        amountPaid : "30,000",
        status : "Active"

        
    },
    
];

function showStudentTable(studentData){
    // initialize the table rows
    let tblStr = ``;

    // set the table rows if the student data is avalilable
    if(studentData && studentData.length){
        studentData.forEach(val => {
            tblStr += `<tr>
                            <td>${val.name}</td>
                            <td>${val.studentID}</td>
                            <td>${val.email}</td>
                            <td>${val.debt}</td>
                            <td>${val.amountPaid}</td>
                            <td>${val.status}</td>
                            <td><img
                                src="./design resources (2)/edit icon.png"
                                alt="edit-icon"
                                />
                            </td>
                        </tr>`;
        })
    } else {
        tblStr = `<tr>
                    <td colspan="7" style="text-align: center">No student</td>
                </tr>`;
    }

    // show the data on the table
    document.getElementById('studentsTable').innerHTML = tblStr;
}

function showStatusStudents(searchStatus, studentData){
    // filter the students according to the submitted sstatus
    const statusStudents = studentData && studentData.length ?
        studentData.filter(val => val.status == searchStatus) : [];

    // show the students data
    showStudentTable(statusStudents);
}