
class Student {
    constructor(name , address , phone , course){
        this.name = name;
        this.address = address;
        this.phone = phone ; 
        this.course = course;
    }

    getInfo () { 
        return "Name:" + this.name + "\n" + 
        "Address:" + this.address + "\n" + 
        "Phone:" + this.phone + "\n" + 
        "Course:" + this.course +"\n"
    };
};

var Student1 = new Student("Jhon" ,  "2757 Neuport Lane"  , "770-361-6192" , "Mathematics")
var Student2 = new Student("Bob" ,  "4925 Clark Street"  , "631-243-6909" , "Geography")
var Student3 = new Student("Bella" ,  "3395 Laurel Lee"  , "651-894-5160" , "Physics")

console.log((Student2.getInfo()) , (Student1.getInfo()) ,  (Student3.getInfo()));


