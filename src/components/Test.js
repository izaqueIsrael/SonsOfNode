import React, { useState } from 'react';
import { questions } from '@/utils/constants'; // Supondo que questions é um array de objetos como o exemplo que você forneceu.
import { askRobomatic } from '@/utils/api';

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null),
  );
  const [hasStarted, setHasStarted] = useState(false);
  const [hasEnd, setHasEnd] = useState(false);
  const [results, setResults] = useState(null);

  const handleAskRobomatic = async () => {
    try {
      const result = await askRobomatic(
        'What is the area of ​​a triangle with base 10 and height 5?',
      );
      console.log(result);
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
    }
  };

  const handleStartTest = () => {
    setHasStarted(true);
  };

  const handleOptionChange = (e) => {
    const answers = [...userAnswers];
    answers[currentQuestion] = e.target.value;
    setUserAnswers(answers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctAnswersCount = 0;
    const feedbacks = [];

    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        correctAnswersCount++;
      } else {
        feedbacks.push({
          question: questions[index].question,
          feedback: questions[index].feedback,
        });
      }

      setResults({
        correctAnswersCount: correctAnswersCount,
        feedbacks: feedbacks,
      });
      setHasEnd(true);
    });

    console.log(
      `Você acertou ${correctAnswersCount} de ${questions.length} perguntas.`,
    );
    feedbacks.forEach((item) => {
      console.log(`Questão: ${item.question}`);
      console.log(`Feedback: ${item.feedback}`);
    });
  };

  return (
    <section className="test">
      <div className="test__container">
        <h2 className="title article__title">Prototipo</h2>
        {!hasStarted ? (
          <div>
            <button
              className="button header__button  article__text test__button"
              onClick={handleStartTest}
            >
              Clique Aqui Para Iniciar o teste
            </button>
          </div>
        ) : (
          <>
            <p className="text article__text test__text">
              {questions[currentQuestion].question}
            </p>
            {questions[currentQuestion].options.map((option, index) => (
              <div className="test__questions" key={index}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={userAnswers[currentQuestion] === option}
                  onChange={handleOptionChange}
                  className="text"
                />
                <label className="text test__text">{option}</label>
              </div>
            ))}
            <div className="test__button-group">
              {currentQuestion !== 0 && (
                <button
                  className="button header__button test__button"
                  onClick={handlePrevious}
                >
                  Anterior
                </button>
              )}
              {currentQuestion === questions.length - 1 ? (
                <button
                  className="button header__button test__button"
                  onClick={handleSubmit}
                >
                  Concluir
                </button>
              ) : (
                <button
                  className="button header__button test__button"
                  onClick={handleNext}
                >
                  Próximo
                </button>
              )}
            </div>
          </>
        )}
      </div>
      {hasEnd && (
        <div className="results">
          <p className="subtitle article__subtitle test__text">
            Você acertou {results.correctAnswersCount} de {questions.length}{' '}
            perguntas.
          </p>
          {results.feedbacks.map((item, index) => (
            <div key={index}>
              <strong className="subtitle article__subtitle test__text">
                Questão:{' '}
              </strong>{' '}
              <p className="text article__text test__text">{item.question}</p>
              <strong className="subtitle article__subtitle test__text">
                Feedback:{' '}
              </strong>{' '}
              <p className="text article__text test__text">{item.feedback}</p>
            </div>
          ))}
        </div>
      )}
      {/* <h2>OLá</h2>
      <button
        onClick={() => handleAskRobomatic('How many languages do you speak?')}
      >
        Click Here
      </button> */}
    </section>
  );
};

export default Test;
