const { rawListeners } = require("process");
const readline = require(`readline`);

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    r1.question("Who is an artist you would like to study?", (answer) => {
      console.log(`${answer}`)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    r1.question("What does this artist do?", (answer) => {
      console.log(`${answer}`);
      resolve()
    })
  })
}

const question3 = () => {
  return new Promise((resolve, reject) => {
    r1.question("What type of music do you associate with this artist?", (answer) => {
      console.log(`${answer}`)
      resolve()
    })
  })
}

const question4 = () => {
  return new Promise((resolve, reject) => {
    r1.question("What emotion do you feel when thinking about this artist?", (answer) => {
      console.log(`${answer}`)
      resolve()
    })
  })
}

const question5 = () => {
  return new Promise((resolve, reject) => {
    r1. question("What is a colour that reminds you of this artist?", answer => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}


const main = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  await question5()
  r1.close()
}

main()
