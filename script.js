document.addEventListener('DOMContentLoaded', function() {
    
    const respostasCorretas = {
        q1: 'b', 
        q2: 'b',
        q3: 'c',
        q4: 'a',
        q5: 'a',
    };

    const botaoSubmit = document.getElementById('botaoSubmit');
    const resultsDiv = document.getElementById('resultados');
    const scoreDisplay = document.getElementById('score');
    const respostasCorretasDiv = document.getElementById('respostasCorretas');

 botaoSubmit.addEventListener('click', function() {
        let score = 0;
        let feedback = '';
        const totalQuestions = Object.keys(respostasCorretas).length;

        for (const question in respostasCorretas) {
            const questionNumber = question.substring(1);
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            
            if (selectedOption) {
                if (selectedOption.value === respostasCorretas[question]) {
                    score++;
                    feedback += `<p class="correct">Question ${questionNumber}: Correct!</p>`;
                } else {
                    feedback += `<p class="incorrect">Question ${questionNumber}: Incorrect. Correct answer is ${respostasCorretas[question]}</p>`;
                }
            } else {
                feedback += `<p class="incorrect">Question ${questionNumber}: Not answered. Correct answer is ${respostasCorretas[question]}</p>`;
            }
        }

        scoreDisplay.textContent = `You got ${score} out of ${totalQuestions} questions correct!`;
        respostasCorretasDiv.innerHTML = feedback;
        resultsDiv.classList.remove('hidden');
    });
});