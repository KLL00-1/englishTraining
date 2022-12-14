async function getWord() {
  const response = await fetch(
    "https://raw.githubusercontent.com/iuzhakov/English-Russian-vocabulary/master/words.json"
  );
  const responceInfo = await response.json();

  console.log(responceInfo);

  const span = document.getElementById("word");
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  const button1 = document.getElementById("button1");
  const answer = document.getElementById("answer");
  const getAnswer = document.getElementById("getAnswer");

  button.addEventListener("click", function click() {
    index = Math.floor(Math.random() * responceInfo.length);
    span.innerHTML = responceInfo[index].en;
    answer.value = "";
    input.value = "";
  });

  button1.addEventListener("click", () => {
    if (
      responceInfo[index].ru.lastIndexOf(input.value) != -1 &&
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
  setTimeout(() => {
    span.innerHTML =
      "Меня зовут Лев Кочетков! И я приветствую тебя в тренажере по английскому языку";
    span.style.fontSize = "30px";
    span.style.paddingTop = "5%";
  }, 1500);
  setTimeout(() => {
    span.innerHTML = "Нажми 'Новое слово'и тренируй свои знания";
    span.style.fontSize = "30px";
    span.style.paddingTop = "5%";
  }, 5500);
  setTimeout(() => {
    span.innerHTML = "Это база данных содержащая более 8000 слов!";
    span.style.fontSize = "30px";
  }, 8500);
  setTimeout(() => {
    span.innerHTML = "Если не знаешь правильный ответ жми 'Правильный ответ'";
    span.style.fontSize = "30px";
  }, 11500);
  setTimeout(() => {
    span.innerHTML = "Удачи!";
    span.style.fontSize = "45px";
  }, 14500);
}
getWord();
