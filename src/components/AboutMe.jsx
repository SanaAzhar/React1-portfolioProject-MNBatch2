function AboutMe() {
function showName() {
console.log("Sana Azhar")
}

return (
  <section>
  <h2>About Me</h2>
  <p>I am a Software Engineering graduate and an aspiring full stack developer.</p>
  <button onClick={showName}>Click Me</button>
  </section>

)
}

export default AboutMe
