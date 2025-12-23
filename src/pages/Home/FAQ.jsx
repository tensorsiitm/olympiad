import React, { useState } from 'react';
import './FAQ.css'; 
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the Tensors Junior Olympiad?',
      answer: 'The Tensors Junior Olympiad in Science and Technology is an annual competition aimed at inspiring young minds and enhancing their academic skills by providing a platform to compete at a national level. It tests students conceptual understanding, analytical skills, and problem-solving abilities in various subjects.',
    },
    {
      question: 'Who organizes the Tensors Junior Olympiad?',
      answer: 'The Olympiad is organized by Tensors, a non-profit organization founded by students of IIT Madras. Tensors also conducts various social initiatives and campaigns, funded by exams and counselling programs for JEE, KEAM, and JoSAA.',
    },
    {
      question: 'How can students register for the Olympiad?',
      // answer: 'Online Mode: Direct registration by students using the provided link. Parents/students can register and pay online directly. Schools can view registered students data anytime on the portal.\nTraditional Mode: Schools collect fees from students, fill in the details in the attached Excel sheet, and email it to us. Schools can share the attached circular for this mode.',
      answer: 'Students can register for the Olympiad in two ways:\n1. *Online Mode:* Students can register individually through the website.\n2. *Through Schools:* Students can register through their respective schools. To facilitate the Olympiad exam at your school, please reach out to us through the school outreach section on our website.'
    },
    {
       question: 'How can students prepare for the Olympiad?',
       answer: 'Students can prepare for the Olympiad by utilizing the syllabus and mock test papers provided on the website. Additionally, they can make use of online and YouTube resources. Most topics in the listed syllabus will be similar to board syllabus topics.'
    },
    {
      question: 'When is the Olympiad being conducted?',
      answer: 'The Olympiad will be conducted on January 17, 2026. The test paper will be in English.',
    },
    {
      question: 'What is the registration fee?',
      answer: '- *Offline Mode:* Rs. 99/- (Offline registrations are facilitated through schools, and the exam will be conducted at the school in pen-and-paper mode).\n- *Online Mode:* Rs. 399/-',
    },
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-head">
        <h1>FAQs</h1>
      </div>
      <div className="faq-box">
        <div className="faq-image">
          <img src="FAQ.png" alt="FAQ" />
        </div>
        <div id='faq-content' className="faq-content">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question} <span className="arrow">{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
              </div>
              {faq.answer.split('\n').map(line => {
                return <div className="faq-answer">{line}</div>
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
