import React, { useState } from 'react';
import './FAQ.css'; 
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
        question:' What is the Tensors Junior Olympiad?',
        answer:'The Tensors Junior Olympiad in Science and Technology is an annual competition aimed at inspiring young minds and enhancing their academic skills by providing a platform to compete at a national level. It tests students conceptual understanding, analytical skills, and problem-solving abilities in various subjects.',
      },
      {
        question:' Who organizes the Tensors Junior Olympiad?',
        answer:'The Olympiad is organized by Tensors, a non-profit organization founded by students of IIT Madras. Tensors also conducts various social initiatives and campaigns, funded by exams and counselling programs for JEE, KEAM, and JoSAA.',
      },
      {
        question:'Is there a mock test available for students?',
        answer:'Yes, registered students will have access to a free mock test to familiarize themselves with the online portal and ensure device compatibility.',
      },
      {
        question:'What is the registration fee?',
        answer:' For Students in India: TBD For Students Outside India: TBD Special Provision: TBD',
      },
      {
        question:' How can students register for the Olympiad?',
        answer:' Online Mode: Direct registration by students using the provided link. Parents/students can register and pay online directly. Schools can view registered students data anytime on the portal. [Add link to Register]Traditional Mode: Schools collect fees from students, fill in the details in the attached Excel sheet, and email it to us. Schools can share the attached circular for this mode.',
      },
      {
        question:'When will the results be announced?',
        answer:'Results will be announced by TBD.',
      },
    
     
 
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
        <div className='FAQHead'><h1>FAQs
            </h1></div>
        <div className='faq-box'>
        <div className="faq-image">
        <img src="FAQ.png" alt="FAQ" />
      </div>
      <div className="faq-content">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question} <span className="arrow">{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
        </div>
     
    </div>
  );
};

export default FAQ;
