import { useState, useContext } from 'react';
import { updateUserAnswers } from '@/lib/client';
import { questions } from '@/templates/userTemplate';
import { UserContext } from '@/lib/context';
import { useRouter } from 'next/router';

export default function Questions() {
  const { user } = useContext(UserContext);
  const router = useRouter();

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerChange = (questionIndex, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = value;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    // Check if all questions have been answered
    if (userAnswers.every(answer => answer !== null)) {
      updateUserAnswers(user.uid, userAnswers);
      router.push('/enter');
    } else {
      alert('Please answer all questions before submitting.');
    }
  };

  return (
    <div className='card d-flex flex-column align-items-center text-center p-4' style={{maxWidth: "56rem"}}>
      <h3 className=''>{questions[currentQuestion]}</h3>
      <div className='m-2'>
        <span>Disagree</span>
        {[0, 0.2, 0.4, 0.6, 0.8, 1].map(value => (
          <label key={value} className={`btn m-2 btn${userAnswers[currentQuestion] === value ? '' : '-outline'}${value >= 0.5 ? '-success' : '-danger'} ${value === 0.4 || value === 0.6 ? 'btn-sm' : value === 0 || value === 1 ? 'btn-lg' : ''}`} >
            <input
              type="radio"
              name="answer"
              value={value}
              checked={userAnswers[currentQuestion] === value}
              onChange={() => handleAnswerChange(currentQuestion, value)}
              className='btn-check'
            />
            {value.toFixed(1)}
          </label>
        ))}
        <span>Agree</span>
      </div>

      <div className='mt-2'>
        {currentQuestion !== questions.length - 1 ? 
          <button onClick={handleNextQuestion} disabled={userAnswers[currentQuestion] === null} className='btn btn-primary btn-lg'>Next Question</button> :
          <button onClick={handleSubmit} disabled={userAnswers.some(answer => answer === null)} className='btn btn-success btn-lg'>Submit</button>
        }
      </div>
      
    </div>
  );
};

