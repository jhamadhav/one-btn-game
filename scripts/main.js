let targetColor = "#7fe5f0";
let containerColor = "#262626";
let fps = 1.2, anim;
let score = 0;
let colors = ["#ff0000", "#ff80ed", "#133337", "#262626", "#7fe5f0", "#420420", "#f7347a", "#5ac18e", "#ff7373"];
const init = () => {
    let clickBtn = document.querySelector("#btn");
    clickBtn.style.borderColor = `hsl(${targetColor},100%,50%)`;
    clickBtn.addEventListener("click", checkColor);
    window.addEventListener("keydown", (e) => {
        console.log(e.key);
        if (e.key == " ") {
            checkColor();
        }
    })
    anim = setInterval(() => {
        changeBg();
    }, 1000 / fps);

}
const checkColor = () => {
    let clickBtn = document.querySelector("#btn");
    if (targetColor == containerColor) {
        score++;
        document.getElementById("score").innerText = `Score : ${score}`;
        targetColor = colors[ran(0, colors.length - 1)];
        clickBtn.style.borderColor = targetColor;
        fps += 0.1;
        clearInterval(anim);
        anim = setInterval(() => {
            changeBg();
        }, 1000 / fps);
    } else {
        alert(`High score : ${score} \nTry again!!`);
        score = 0;
        document.getElementById("score").innerText = `Score : ${score}`;
        fps = 1.2;
        clearInterval(anim);
        anim = setInterval(() => {
            changeBg();
        }, 1000 / fps);
    }
}
const changeBg = () => {
    let bg = document.getElementsByClassName("container")[0];
    containerColor = colors[ran(0, colors.length)];;
    bg.style.background = containerColor;
}

const ran = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min) + min);
}

window.addEventListener("load", init);

