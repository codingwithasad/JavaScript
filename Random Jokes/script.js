let jokesfunc=()=>{
    let jokes=["Who’s the coolest person in the hospital? The ultra sound guy.","You and I will be friends forever because at this point, you know too much.","Thanks for being my best friend and always going along with my worst ideas.","Why isn’t your nose 12 inches long? Because then it would be a foot.","You’ve seen how crazy I am and you still choose to be my friend. Thanks for being the realest","I saw a driver texting and driving. It made me so mad I threw my beer at him"]

let index=Math.floor(Math.random()*jokes.length)
document.getElementById("joke").innerHTML=jokes[index]
}
