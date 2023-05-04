let userChoices = document.querySelectorAll('.user-instance .hands');
let instances = ['rock', 'paper', 'scissor'];
let computerOutput = document.getElementById('computer-output');
let computerResult = document.getElementById('computer');
let game = document.getElementById('game')
let c = 0, u = 0;
let useResult = document.getElementById('you');
userChoices.forEach(useChoice => {
    // location.reload();
    useChoice.addEventListener('click', (event) => {
        let randomNumber = Math.floor(Math.random() * 3);
        let computerChoice = instances[randomNumber];

        //Rock Section by user
        if (computerChoice === "scissor" && useChoice.classList.contains('rock')) {
            useResult.innerHTML = `You : ${++u}`
            computerOutput.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
            document.getElementById('prompts').innerHTML = `<h1>You Win</h1>`;
        } else if (computerChoice === "paper" && useChoice.classList.contains('rock')) {
            computerResult.innerHTML = `Computer : ${++c}`;
            computerOutput.innerHTML = `<i class=" fa-regular fa-hand"></i>`;
            document.getElementById('prompts').innerHTML = `<h1>You Loose</h1>`;
        } else if (computerChoice === 'rock' && useChoice.classList.contains('rock')) {
            document.getElementById('prompts').innerHTML = `<h1>Draw</h1>`;
            computerOutput.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
        }

        // Scissor section by User
        else if (computerChoice === "paper" && useChoice.classList.contains('scissor')) {
            useResult.innerHTML = `You : ${++u}`;
            document.getElementById('prompts').innerHTML = `<h1>You Win!</h1>`;
            computerOutput.innerHTML = `<i class=" fa-regular fa-hand"></i>`;
        } else if (computerChoice === 'rock' && useChoice.classList.contains('scissor')) {
            computerResult.innerHTML = `Computer : ${++c}`;
            document.getElementById('prompts').innerHTML = `<h1>You Loose!</h1>`;
            computerOutput.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;

        } else if (computerChoice === 'scissor' && useChoice.classList.contains('scissor')) {
            document.getElementById('prompts').innerHTML = `<h1>Draw</h1>`;
            computerOutput.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
        }
        // paper section by user
        else if (computerChoice === "paper" && useChoice.classList.contains('paper')) {
            document.getElementById('prompts').innerHTML = `<h1>Draw</h1>`;
            computerOutput.innerHTML = `<i class=" fa-regular fa-hand"></i>`;
        } else if (computerChoice === 'rock' && useChoice.classList.contains('paper')) {
            useResult.innerHTML = `You : ${++u}`
            document.getElementById('prompts').innerHTML = `<h1>You Win!</h1>`;
            computerOutput.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
        } else if (computerChoice === 'scissor' && useChoice.classList.contains('paper')) {
            computerResult.innerHTML = `Computer : ${++c}`
            document.getElementById('prompts').innerHTML = `<h1>You Loose!</h1>`;
            computerOutput.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
        }
        setTimeout(() => {
            // document.getElementById('prompts').innerHTML = '';
            computerOutput.innerHTML = ""
        }, 1000);

    })
})
