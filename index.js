const questions = [
    "What have I learned?",
    "What upset me?",
    "What could have I done better?",
    "What made me happy?",
    "How many people have I helped today?"
]


const ask = (index = 0) => {
    process.stdout.write(questions[index] + `\n\n\n\n`)
}

ask()

const answers = []

process.stdin.on('data', data => {
    answers.push(data.toString().trim() + '\n')
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }

})