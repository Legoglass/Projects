let textBox = document.getElementById("text"); 

class Student {
    constructor(name , address , phone , course){
        this.name = name;
        this.address = address;
        this.phone = phone ; 
        this.course = course;
    }

    getInfo () { 
        return "Name:" + this.name + "<br>" + 
        "Address:" + this.address + "<br>" + 
        "Phone:" + this.phone + "<br>" + 
        "Course:" + this.course +"<br>"
    };
};



 
fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt').then(function (response){
    if(response.status !== 200){
        throw Error("Error while loading the file.")
    }
    return response.text();
}).then(function (text){
    let data = text.trim().split('\n');
    console.log(data);
    const students  = [];

for(let i = 0 ; i < data.length; i += 4){
    const name = data[i].trim();
    const address = data[i + 1].trim();
    const phone = data[i + 2].trim();
    const course = data[i +3].trim();

    const student =  new Student(name , address , phone , course);
    students.push(student);

    const studentDiv = document.createElement("div");
    studentDiv.innerHTML = student.getInfo();
    textBox.appendChild(studentDiv);

    console.log(student)
    
}

}) 