let activeStep;
let nextStep;
let mainForm = document.querySelector('.form-block');
let allStepButtons = document.querySelectorAll('.buttons--step');
let allReqFields;
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


function showNextStep() {
    console.log('переводим на следующий шаг');
    activeStep = document.querySelector('.step--active');
    nextStep = activeStep.nextElementSibling;
    console.log(nextStep);
    activeStep.classList.remove('step--active');
    nextStep.classList.add('step--active');
}

//надо проверять поля для активных 
function checkReqFields() {
    allReqFields = document.querySelectorAll('.step--active [required]');
    allReqFields.forEach(reqField => {
        if (reqField.value == '') {
            reqField.classList.add('input--error');
            reqField.classList.remove('input--passed');
        } else {
            reqField.classList.remove('input--error');
            reqField.classList.add('input--passed');
        }
    });

    errorsCounter = document.querySelectorAll('.step--active .input--error').length;
    activeStep = document.querySelector('.step--active');

    if (errorsCounter == 0) {
        activeStep.setAttribute('step-passed', 'true');
        showNextStep();
    } else {
        activeStep.setAttribute('step-passed', 'false');
    }
}

allStepButtons.forEach(stepButton => {
    stepButton.addEventListener('click', function () {
        checkReqFields();
    });
});