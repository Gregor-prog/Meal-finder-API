// getting HTML elements

let input = document.querySelector("input")
let btn = document.querySelector("button")
let pic = document.querySelector("img")
let howto = document.querySelector("#howto")
let recipe = document.querySelector("#stuff")
let tag = document.querySelector("#name")

btn.addEventListener("click", doSomething)

async function doSomething(){
    console.log(input.value)
    let damn = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    const data = await damn.json()
    let {meals} = data;
    let [meal] = meals
    tag.textContent = meal["strMeal"]
    pic.src = meal["strMealThumb"]
    howto.textContent = meal["strInstructions"]
    
    for (let i = 0; i < 21; i++) {
        let ingrediets = meal[`strIngredient${i}`]
        let quantity = meal[`strMeasure${i}`]

        if(meal[`strIngredient${i}`] == null || meal[`strMeasure${i}`] == null || meal[`strMeasure${i}`] == ""  || meal[`strIngredient${i}`] == ""){

        }
        else{
            recipe.innerHTML += `<p>${ingrediets}   ${quantity} </p>`
        }
    }
}

