const user = {
  name: "Nico",
  lastname: "Franco",
  age: 28,
  nickname: "NicoCodev",
  skills: ["HTML", "CSS", "JavaScript", "React", "NodeJS"],
  address: {
    street: "Calle 123",
    city: "Medellin",
    country: "Colombia",
  },
  gender: "male",
  isMarried: false,
  isWorking: true,
  getFullName: function () {
    return `${this.name} ${this.lastname}`;
  },
  getAge: function () {
    return this.age;
  },
  getSkills: function () {
    return this.skills;
  },
  getAddress: function () {
    return this.address;
  },
};

const portfolio = [
  {
    name: "Project 1",
    description: "This is the description for project 1",
    url: "https://project1.com",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Project 2",
    description: "This is the description for project 2",
    url: "https://project2.com",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    name: "Project 3",
    description: "This is the description for project 3",
    url: "https://project3.com",
    technologies: ["HTML", "CSS", "JavaScript", "React", "NodeJS"],
  },
  {
    name: "Project 4",
    description: "This is the description for project 4",
    url: "https://project4.com",
    technologies: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "MongoDB"],
  },
  {
    name: "Project 5",
    description: "This is the description for project 5",
    url: "https://project5.com",
    technologies: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "MongoDB"],
  },
  {
    name: "Project 6",
    description: "This is the description for project 6",
    url: "https://project6.com",
    technologies: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "MongoDB"],
  },
  {
    name: "Project 7",
    description: "This is the description for project 7",
    url: "https://project7.com",
    technologies: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "MongoDB"],
  },
  {
    name: "Project 8",
    description: "This is the description for project 8",
    url: "https://project8.com",
    technologies: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "MongoDB"],
  },
  {
    name: "Project 9",
    description: "This is the description for project 9",
    url: "https://project9.com",
    technologies: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "MongoDB"],
  },
];

user.portfolio = portfolio;

let output = "";

for (let i = 0; i < user.portfolio.length; i++) {
  output += `<li>${portfolio[i].name}</li>`;
}

document.getElementById("portfolio").innerHTML = output;

let commentsData = "";

fetch("/user.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // Crear un nuevo elemento 'div'
    const userDataElement = document.createElement("h1");

    // Establecer el contenido del nuevo elemento con el nombre del usuario
    userDataElement.innerHTML = [data.name, data.age];

    // Obtener el primer hijo del cuerpo (si hay alguno)
    const firstChild = document.body.firstChild;

    // Insertar el nuevo elemento antes del primer hijo
    document.body.insertBefore(userDataElement, firstChild);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((data) => {
    // Use the data retrieved from the user.json file
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      commentsData += `<li>${data[i].email} - ${data[i].name}</li>`;
    }
    document.getElementById("comments").innerHTML = commentsData;
  })
  .catch((error) => {
    // Handle any errors that occur during the fetch request
    console.error("Error:", error);
  });
