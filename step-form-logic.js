let allStepButtons = document.querySelectorAll('.buttons--step');
let currentStepType;
let errorsCounter;
let activeStep;


function showNextStep() {
    if (activeStep.getAttribute('out-to') == 'out') {
        console.log('надо выйти обратно');
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