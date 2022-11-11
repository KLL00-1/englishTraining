async function getWord() {
  const response = await fetch(
    "https://raw.githubusercontent.com/iuzhakov/English-Russian-vocabulary/master/words.json"
  );
  const responceInfo = await response.json();

  const span = document.getElementById("word");
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  const button1 = document.getElementById("button1");
  const answer = document.getElementById("answer");
  const getAnswer = document.getElementById("getAnswer");

  button.addEventListener("click", function click() {
    index = Math.floor(Math.random() * 8028);
    span.innerHTML = responceInfo[index].en;
    answer.value = "";
    input.value = "";
  });

  button1.addEventListener("click", () => {
    if (
      responceInfo[index].ru.search(input.value) == length &&
      input.value != ""
    ) {
      span.innerHTML = "Верно!";
      span.classList.add("good");
      setTimeout(() => {
        span.innerHTML = responceInfo[index].en;
        span.classList.remove("good");
      }, 2000);
    } else if (responceInfo[index].ru.search(input.value) != length) {
      span.innerHTML = "Неверно!";
      span.classList.add("shake");
      setTimeout(() => {
        span.innerHTML = responceInfo[index].en;
        span.classList.remove("shake");
      }, 2000);
    }
  });
  getAnswer.addEventListener("click", () => {
    answer.value = responceInfo[index].ru;
  });
