
import Notiflix from 'notiflix';

const onFormClick = document.querySelector('.form');

const value = {
  firstDelay: 0,
  stepDelay: 0,
  delayTimer: 0,
  amountDelay: 0,
};

onFormClick.addEventListener('submit', getFormData);

function getFormData(e) {
  e.preventDefault();
  console.dir(e.target);
  value.firstDelay = +e.target[0].value;
  value.stepDelay = +e.target[1].value;
  value.amountDelay = +e.target[2].value;
  clickButton(e);
}

function clickButton(e) {
  e.preventDefault();
  value.delayTimer = value.firstDelay;
 
  for (let i = 0; i < value.amountDelay; i +=1) {
       setTimeout(() => {
      createPromise((i+1),  value.delayTimer + (value.stepDelay * i))
        .then((i, delay) => {
          Notiflix.Notify.info(i, delay);
        })
      .catch((i, delay) => {
        Notiflix.Notify.info(i, delay);
        })
      }, value.delayTimer + (value.stepDelay * i) );
   }
}
  function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
         } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }
    );
 }

