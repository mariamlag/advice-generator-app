 const advice = document.getElementById('advice');
 const answer = document.getElementById('answer');
  const click = document.getElementById('click_icon');


click.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
  .then(Response => Response.json())
  .then(data => {
  advice.textContent = `ADVICE #${data.slip.id}`;
  answer.textContent = `"${data.slip.advice}"`;
  })
});










