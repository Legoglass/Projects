function checkAndSetRadioState(radioInput, storageKey, optionValue) {
  const savedOption = localStorage.getItem(storageKey);
  if (savedOption === optionValue) {
    radioInput.checked = true;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw Error("Error while reading file.");
      }
      return response.json();
    })
    .then(function (data) {
      const quizQuestions = data.quiz;

      for (const questionKey in quizQuestions) {
        if (quizQuestions.hasOwnProperty(questionKey)) {
          const questionData = quizQuestions[questionKey];

          document.body.innerHTML += `<h2>${questionData.question}</h2>`;

          for (let i = 0; i < questionData.options.length; i++) {
            const optionValue = questionData.options[i];
            const storageKey = `${questionKey}_${i}`;

            document.body.innerHTML += `
              <label>
                <input type="radio" name="${questionKey}" value="${optionValue}" data-storage-key="${storageKey}">
                ${optionValue}
              </label><br>
            `;
          }
        }
      }
      setTimeout(function () {
        for (const questionKey in quizQuestions) {
          if (quizQuestions.hasOwnProperty(questionKey)) {
            const questionData = quizQuestions[questionKey];

            for (let i = 0; i < questionData.options.length; i++) {
              const optionValue = questionData.options[i];
              const storageKey = `${questionKey}_${i}`;

              const radioInput = document.querySelector(`input[name="${questionKey}"][value="${optionValue}"]`);

              checkAndSetRadioState(radioInput, storageKey, optionValue);

              radioInput.addEventListener('change', function () {
                console.log('Change event triggered');
                localStorage.setItem(storageKey, optionValue);
              });
            }
          }
        }
      }, 100);
    })
    .catch(function (err) {
      console.log("Error fetching data:", err);
    });
});
