let p1Display = document.querySelector('#p1Display')
let p2Display = document.querySelector('#p2Display')
const p1Btn = document.querySelector('#p1-btn')
const p2Btn = document.querySelector('#p2-btn')
const resetBtn = document.querySelector('#reset-btn')

let inputPlayUpTo = document.querySelector('#play-to')
const submitBtn = document.querySelector('#submitBtn')
const num = document.querySelector('#to')

p1Score = 0;
p2Score = 0;
winningScore = 3;
isGameOver = false;
num.textContent = 3;

inputPlayUpTo.value = 3;


p1Btn.addEventListener("click", () => {
      if (!isGameOver) {
            p1Score += 1;
            p1Display.textContent = p1Score;

            if (p1Score === winningScore) {
                  isGameOver = true;
                  p1Display.classList.add('winner');
                  p2Display.classList.add('loser');
                  p1Btn.disabled = true;
                  p2Btn.disabled = true;

                  if (p1Score === winningScore) {
                        setTimeout(() => {
                              alert(`Player 1 wines 🎉🎉🎉`)
                        }, 200);
                        
                  }
            }
      }
      

});

p2Btn.addEventListener('click', () => {
      if (!isGameOver) {
            p2Score += 1;
            p2Display.textContent = p2Score;
            if (p2Score === winningScore) {
                  isGameOver = true;
                  p2Display.classList.add('winner');
                  p1Display.classList.add('loser');
                  p1Btn.disabled = true;
                  p2Btn.disabled = true;

                  if (p2Score === winningScore) {
                        setTimeout(() => {
                              alert(`Player 2 wines 🎉🎉🎉`)
                        }, 200);
                        
                  }
            }
      }
});

inputPlayUpTo.addEventListener('input', () => {
      winningScore = parseInt(inputPlayUpTo.value)
      num.textContent = winningScore;
})

resetBtn.addEventListener('click', reset)


function reset() {
      p1Score = 0;
      p2Score = 0;
      isGameOver = false;
      p1Display.textContent = 0;
      p2Display.textContent = 0;
      p1Display.classList.remove('winner', 'loser');
      p2Display.classList.remove('winner', 'loser');
      p1Btn.disabled = false;
      p2Btn.disabled = false;
      num.textContent = 3;
      inputPlayUpTo.value = 3;
      winningScore = 3
}