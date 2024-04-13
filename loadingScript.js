// custom javascript

const hints = [
  "This is a hint.",
  "This is another hint.",
  "This is yet another hint."
];

function displayHint() {
  console.log("loaded hint");
  const hintText = document.getElementById("loading-hint");
  const randomIndex = Math.floor(Math.random() * hints.length);
      
  hintText.innerHTML = hints[randomIndex]
        .split("")
        .map(letter => {
          console.log(letter);
          return `<span>` + letter + `</span>`;
        })
        .join("");

      Array.from(hintText.children).forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("wavy");
        }, index * 100);
      });

}