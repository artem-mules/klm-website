let appendWrapperStepButtons = document.querySelector('.steps-wrapper');
let allSteps = document.querySelectorAll('.step');

//формируем кнопочки шагов
allSteps.forEach(function(elem, index) {
    let stepWindowIndex = (index+1);

    let clonableStepButton = document.querySelector('.step-button').cloneNode(true);

    if (index == 0) {
        
    } else {
        clonableStepButton.classList.remove('step-button--active');
        clonableStepButton.classList.remove('step-button--current');
    }

    clonableStepButton.querySelector('.step-button__text').textContent = (index+1);
    appendWrapperStepButtons.append(clonableStepButton);
});


//отрабатываем клик по шагам