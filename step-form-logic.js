let form = document.querySelector('.form-block__form');
let popUp = document.querySelector('.steps-form-popup');
let allStepButtons = document.querySelectorAll('.buttons--step');
let manualButton = document.querySelector('#manual-input-button');
let expectationsInput = document.querySelector('[expectations]');
let appendWrapperStepButtons = document.querySelector('.steps-wrapper');
let allSteps = document.querySelectorAll('.step');
let currentStepType;
let errorsCounter;
let activeStep;
let currentStepNumber;
let stepIteratorPlus;

function startManual() {
    currentStepType = 'substep--active';
    activeStep = document.querySelector('.' + currentStepType);
    let allShouldBeRequired = document.querySelectorAll('[should-be-required]');
    allShouldBeRequired.forEach(input => {
        input.setAttribute('required', '');
    });
    activeStep.classList.remove(currentStepType);
    nextStep = activeStep.nextElementSibling;
    nextStep.classList.add(currentStepType);
}

function showNextStep() {
    if (activeStep.getAttribute('out-to') == 'out') {
        activeStep.parentNode.classList.remove('step--active');
        activeStep.parentNode.nextElementSibling.classList.add('step--active');

    } else {
        nextStep = activeStep.nextElementSibling;
        activeStep.classList.remove(currentStepType);
        nextStep.classList.add(currentStepType);
    }
}

function checkStepPassed() {
    allReqFields = document.querySelectorAll('.' + currentStepType + ' [required]');
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
    activeStep = document.querySelector('.' + currentStepType);

    if (errorsCounter == 0) {
        activeStep.setAttribute('step-passed', 'true');
        showNextStep();
    } else {
        activeStep.setAttribute('step-passed', 'false');
    }
}

function checkCurrentStep() {
    let currentStep = document.querySelector('.step--active');


    if (currentStep.getAttribute('step-type') == 'global') {
        currentStepType = 'step--active';
        checkStepPassed();
    }

    if (currentStep.getAttribute('step-type') == 'branch-parent') {
        currentStepType = 'substep--active';
        checkStepPassed();
    }

}

allStepButtons.forEach(stepButton => {
    stepButton.addEventListener('click', function() {
        checkCurrentStep();
    });
});

manualButton.addEventListener('click', function() {
    startManual();
});

expectationsInput.addEventListener('input', function() {
    currentSkipButton = expectationsInput.nextElementSibling.querySelector('.buttons');
    if (expectationsInput.value != '') {
        currentSkipButton.classList.remove('buttons--skip-style');
        currentSkipButton.textContent = 'Next';
    } else {
        currentSkipButton.classList.add('buttons--skip-style');
        currentSkipButton.textContent = 'Skip';
    }
});

//формируем кнопочки шагов
allSteps.forEach(function (elem, index) {
    let stepWindowIndex = (index + 1);

    let clonableStepButton = document.querySelector('.step-button').cloneNode(true);

    if (index == 0) {

    } else {
        clonableStepButton.classList.remove('step-button--active');
        clonableStepButton.classList.remove('step-button--current');
    }

    clonableStepButton.querySelector('.step-button__text').textContent = (index + 1);
    appendWrapperStepButtons.append(clonableStepButton);
});

let allStepNav = document.querySelectorAll('.steps-wrapper .step-button');


function checkStepsNav() {
    allSteps.forEach((step, stepId) => {
        if (step.classList.contains('step--active')) {
            currentStepNumber = stepId;
            
            allStepNav.forEach((stepNav, stepNavId) => {
                stepIteratorPlus = stepId;
                if (stepNavId == stepId) {
                    stepNav.classList.add('step-button--active');
                    while (allStepNav[stepIteratorPlus].nextElementSibling != null) {
                        allStepNav[stepIteratorPlus + 1].classList.remove('step-button--active');
                        stepIteratorPlus = stepIteratorPlus + 1;
                    }
                }
            });
        }
    });
}

allStepNav.forEach((stepNav, stepNavId) => {
    stepNav.addEventListener('click', function() {
        allSteps.forEach(step => {
            step.classList.remove('step--active');
        });
        allSteps.forEach((step, stepId) => {
            if (stepId == stepNavId) {
                step.classList.add('step--active');
            }
        });
    });
});

popUp.addEventListener('click', function() {
    // checkStepsNav();
    setTimeout(checkStepsNav, 200);
});

form.addEventListener('submit', function() {
    appendWrapperStepButtons.classList.add('hide');
})

// const targetNodePopUp = popUp;
// const observerOptionsPopUp = {
//     childList: true,
//     attributes: true,
//     subtree: true
// }
// const observerPopUp = new MutationObserver(checkStepsNav);
// observerPopUp.observe(targetNodePopUp, observerOptionsPopUp);

//когда форма отправлена — прятать навигацию
//когда пользователь выходит из 3-го шага — делать все mustReq поля необязательными. + видимым делать subStep с кнопками