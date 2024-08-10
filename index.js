// console.log("text from log")
// window.alert("HI")


// document.getElementById("welcomeHead").textContent = "Hello hello"
// let temp = document.getElementById("projectBlob").style.cssFloat = "left"
// temp = document.getElementById("projectBlob").style.float = "left"

// console.log(temp)
// let temp2 = document.getElementById("projectBlob2").style.cssFloat = "right"
// temp2 = document.getElementById("projectBlob").style.float = "right"
// console.log(temp2)

// return document.getElementById("projectBlob")

//instead of copy and paste into HTML
//and into project blob components


//append new items into blob1
// let pContainer = document.getElementById("blob1")
// let pBlob = document.getElementById("projectBlob")
// let newProject = document.createElement(pBlob)
// let pBlob = document.createElement("projectBlob")

// console.log(pContainer, "container here")
// console.log(pBlob, "project blob")

// let pBlob = document.querySelector("#projectBlob")

// const projectBlob = pBlob.cloneNode(true)
// const projectBlob2 = pBlob.cloneNode(true)
// pContainer.appendChild(projectBlob)

// document.getElementById("blob1").appendChild(projectBlob)
// document.getElementById("blob1").appendChild(projectBlob2)
// document.getElementById("blob1").appendChild(projectBlob)
// document.getElementById("blob1").appendChild(projectBlob)

function createProjectBlob(){
    let pContainer = document.getElementById("blob1");
    let pBlob = document.querySelector("#projectBlob");
    // document.getElementById()
    let tempName = pBlob.cloneNode(true)
    pContainer.appendChild(tempName)
    let newText = tempName.querySelector("#projectText")
    let newTitle = tempName.querySelector("#projectTitle")

    // let setText = newText.textContent 
    // let setTitle = newTitle.textContent
    // newText.textContent = "hello"
    // console.log(tempName)
    // console.log(tempName.getElementById("#projectText"))
    // console.log(tempName.textContent)
    // tempName.textContent = "hello"
    return {newText, newTitle}

    // pContainer.appendChild(tempName)

    // console.log(tempName))
    // console.log(tempName.getElementById("#projectBlob"))
    // pBlob.getElementById("#projectBlob").textContent = "hello"
    // return pBlob.textContent;
    // console.log(tempName.getElementById("#innerBlob"))
    // pBlob.getElementById("#projectText
    // return tempName
}
function setText(project, string){
    project.newText.textContent = string
}
function setTitle(project, string){
    project.newTitle.textContent = string
}


// p1 = createProjectBlob("test2")
// console.log(p1)
// let text = p1.getElementById("innerBlob")
// console.log(p1.getElementById("column left"))

// p1 = "hello"
// p1.
// p1.getElementById("#projectText").textContent = "hello"
// pBlob.textContent = "Hello"

// p1.document.getElementById("projectText").textContent = "Hello"
p2 = createProjectBlob()
// console.log(p2.setText)
// p2.textContent = "hello"
// p2.newText.textContent = "hi"
// p2.newTitle.textContent = "pro"
setTitle(p2, "Bamboo Classification")
setText(p2, `In a group of three, we worked in picture sampling given our environment. I worked on documentation and data collecting. We were restricted due to Blacksburg's
    lack of Bamboo. We were able to accomplishing our goal of 60% accuracy in detecting bamboo. By using a CNN to classify
    not bamboo vs bamboo photos taken in campus and online. Written in Python and resources such as Google Colab to run LLM. `)

// p2.setText = "hello";
// p2.setTitle = "New Project View view";


// pBlob.textContent = "Hello"
p3 = createProjectBlob()
setTitle(p3, "Personal Video Server")

setText(p3, `In a group of 2, were task to deploy website application. I dealt with multi-threads to accomplish multiple users interaction with the web page.
    Consisted of password tokens, HTML fallback, webplayer, and testing done through fuzzy software. Written in C.`)

// p3.textContent = "Hello Again"
// p3.newText.textContent

// p7 = createProjectBlob()
// setTitle(p7, "Multithread program")
// setText(p7, "a new world of threads")
p6 = createProjectBlob()
setTitle(p6, "3D Range-KD Tree")
setText(p6, `Learned about Range and KD Trees took time and reworking and differeniating between 2D vs 3D trees.
    Using Java and test cases to reach and accomplish the hybrid that consists of Query time: O(n1/2 log n), Space complexity: O(n log n), and Construction time: O(n log n).
    Future plan, understanding fractual cascading for  Query time O(n1/2log n) to O(n1/2)`)
p4 = createProjectBlob()
setTitle(p4, "Data Visualization")
setText(p4, `In a team of 3, I was in charge of testing and fixing bugs in our program. Written in Java.
    Unit testing was essential to completing our project. By gathering data such as csv files and displaying through MVC view in Java.`)
p8 = createProjectBlob()
setTitle(p8, "Sand Game/ Particle Simulator")
setText(p8, `First programming game, with the help of Greenfoot, an integrated environment.
    Simplifying game making with Java.
    Topics used included classes, inheritance, polymorphism, and particles!
    The game consisted of values for acid, water, sand, and steel type.
    Looking forward to building and expanding in the future. `)
p5 = createProjectBlob()
setTitle(p5, "Horizontal Wind Turbine")
setText(p5, `Consisted of three subteams, CAD, Prototype, and Matlab team. I took initiative to 
    code for the team. First experience dealing with code. Understanding the formulas for
    wind energy and torque. Getting the results allowed me to produce new implementation in improving energy effiency`)
// p9 = createProjectBlob()
// setTitle(p9, "Sand Game")
// setText(p9, "a new world of games")


// let a = [1, 8, 9, 10, 22, 56, 57]
// function array(b, ...a)
// {
//     console.log(a);
// }
// array(3, 8, 9, 10, 11)


// let data = {name: "java"}
// console.log(delete data)
/**
 * Add button to help user access page 
 */
//data type
//Boolean() | If not defined return false
//Number()  |If not defined returns NaN 
//String() Note; this is the default JS applies |If not defined returns undefined
