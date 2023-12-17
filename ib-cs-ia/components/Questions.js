import { useState, useContext } from 'react';
import { updateUserAnswers } from '@/lib/client';
import { questions } from '@/templates/userTemplate';
import { UserContext } from '@/lib/context';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export default function Questions() {
  const introHeaderVariants = {
    hide: {
        opacity: 0,
        x: -200,
    },
    show1: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            delay: 0.3,
        },
    },
    show2: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.5,
            delay: 0.7
        },
    }
  };
  const { user, username } = useContext(UserContext);
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
      router.push(`/${username}`);
    } else {
      alert('Please answer all questions before submitting.');
    }
  };

  return (
    <section className="d-flex flex-column justify-content-center" style={{height: "80%"}}>
      <div className='text-center mb-4'>
        <motion.h1 initial="hide" whileInView="show1" exit="hide" variants={introHeaderVariants} className='text-black display-2 fw-semibold'>Complete the Form</motion.h1>
        <motion.h3 initial="hide" whileInView="show2" exit="hide" variants={introHeaderVariants} className='text-black mb-4 fs-5'>Please provide your answers below. Each question requires a response to proceed.</motion.h3>
      </div>
      <div className='card d-flex flex-column align-items-center text-center bg-dark' style={{minWidth: "50%", borderRadius: "16px"}}>
        <div className='card-body px-2' >
          <h3 className='card-title text-white my-4'>{questions[currentQuestion]}</h3>
          <hr className="mb-4" style={{width: "100%", color: 'white'}}/>
          <div className='my-2'>
            <div className='d-flex justify-content-between my-3'>
              <span className='text-white mx-3 fs-4'>Disagree</span>
              <span className='text-white mx-3 fs-4'>Agree</span>
            </div>
            <div className='d-flex justify-content-around align-items-end'>
              {[0, 0.2, 0.4, 0.6, 0.8, 1].map(value => (
                <label key={value} className={`btn m-1 btn${userAnswers[currentQuestion] === value ? '' : '-outline'}${value >= 0.5 ? '-success' : '-danger'} ${value === 0.4 || value === 0.6 ? 'btn-sm' : value === 0 || value === 1 ? 'btn-lg' : ''}`} style={{borderRadius: "30%"}}>
                  <input
                    type="radio"
                    name="answer"
                    value={value}
                    checked={userAnswers[currentQuestion] === value}
                    onChange={() => handleAnswerChange(currentQuestion, value)}
                    className='btn-check'
                  />
                  &nbsp;&nbsp;&nbsp;
                </label>
              ))}
            </div>
          </div>
          <hr className="mb-4" style={{width: "100%", color: 'white'}}/>
          <div className='my-3'>
            {currentQuestion !== questions.length - 1 ? 
              <button onClick={handleNextQuestion} disabled={userAnswers[currentQuestion] === null} className='text-white fs-4 link-offset-1'>Next Question</button> :
              <button onClick={handleSubmit} disabled={userAnswers.some(answer => answer === null)} className='text-white fs-4 link-offset-1'>Submit</button>
            }
          </div>
        </div>
      </div>
      <style jsx>{`
          button {
            background: none;
            border: none;
          }
          button:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        `}</style>
    </section>
  );
};

