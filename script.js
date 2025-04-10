document.addEventListener('DOMContentLoaded', function() {
    
    const respostasCorretas = {
        q1: 'b', 
        q2: 'b',
        q3: 'c',
        q4: 'a',
        q5: 'a',
        q6: 'b', 
        q7: 'a', 
        q8: 'b', 
        q9: 'b', 
        q10: 'b',
        q11: 'b', 
        q12: 'b', 
        q13: 'b', 
        q14: 'a', 
        q15: 'b',
        q16: 'a', 
        q17: 'b', 
        q18: 'b'
    };

    const botaoSubmit = document.getElementById('botaoSubmit');
    const resultsDiv = document.getElementById('resultados');
    const scoreDisplay = document.getElementById('score');
    const respostasCorretasDiv = document.getElementById('respostasCorretas');

    // Função que mostra as perguntas respondids
    function todasRespondidas() {
        const questionGroups = Object.keys(respostasCorretas);
        return questionGroups.every(question => {
            return document.querySelector(`input[name="${question}"]:checked`) !== null;
        });
    }

    botaoSubmit.addEventListener('click', function() {
        // Checa se todas perguntas foram respondidas
        if (!todasRespondidas()) {
            alert('Please answer all questions before submitting.');
            return;
        }

        let score = 0;
        let feedback = '';
        const totalQuestions = Object.keys(respostasCorretas).length;

        for (const question in respostasCorretas) {
            const questionNumber = question.substring(1);
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            
            if (selectedOption.value === respostasCorretas[question]) {
                score++;
                feedback += `<p class="correct">Question ${questionNumber}: Correct!</p>`;
            } else {
                feedback += `<p class="incorrect">Question ${questionNumber}: Incorrect. Correct answer is ${respostasCorretas[question]}</p>`;
            }
        }

        scoreDisplay.textContent = `You got ${score} out of ${totalQuestions} questions correct!`;
        respostasCorretasDiv.innerHTML = feedback;
        resultsDiv.classList.remove('hidden');
        
        // Scroll to results
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    });

    // Adiciona uma coloração nas perguntas que não foram respondidas
    function marcarNaoRespondidas() {
        const questionGroups = Object.keys(respostasCorretas);
        questionGroups.forEach(question => {
            const questionElement = document.querySelector(`input[name="${question}"]`).closest('.question');
            if (!document.querySelector(`input[name="${question}"]:checked`)) {
                questionElement.style.border = '2px solid #ff9800';
                questionElement.style.backgroundColor = '#fff3e0';
            } else {
                questionElement.style.border = '';
                questionElement.style.backgroundColor = '';
            }
        });
    }

    botaoSubmit.addEventListener('mouseover', marcarNaoRespondidas);
});