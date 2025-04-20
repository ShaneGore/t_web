import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-teal-500" />
          ) : (
            <Plus className="h-5 w-5 text-teal-500" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "What is hormone replacement therapy for women?",
      answer: "Hormone replacement therapy (HRT) for women is a treatment used to supplement the body with hormones that are no longer being produced in sufficient quantities. It's commonly used to treat symptoms of menopause, perimenopause, and other hormonal imbalances that can affect women at various life stages."
    },
    {
      question: "At what age should women consider hormone therapy?",
      answer: "There is no specific age when women should consider hormone therapy, as hormonal changes can occur at different times. Many women experience perimenopause in their 40s, while menopause typically occurs in the late 40s to early 50s. However, younger women may also experience hormonal imbalances due to stress, health conditions, or genetic factors. We recommend consulting with our specialists to determine if hormone therapy is right for you based on your symptoms and medical history."
    },
    {
      question: "How long does it take to see results from hormone therapy?",
      answer: "Most women begin to notice improvements in symptoms within 2-3 weeks of starting treatment, with more significant benefits appearing after 3 months. The full effects of hormone optimization typically manifest by 6 months of consistent treatment. However, individual responses vary based on your unique body chemistry, starting hormone levels, and specific symptoms."
    },
    {
      question: "Is hormone therapy safe for women with a family history of breast cancer?",
      answer: "Safety considerations for hormone therapy must be evaluated on an individual basis, especially for women with a family history of breast cancer. Our medical team conducts thorough risk assessments and may recommend specific types of hormone therapy or alternative treatments that minimize potential risks. During your consultation, we'll review your complete medical history and discuss appropriate options for your specific situation."
    },
    {
      question: "What types of hormone therapy do you offer for women?",
      answer: "We offer several forms of hormone therapy, including bioidentical hormone pellets, creams, patches, and oral medications. The type recommended for you will depend on your specific symptoms, hormone levels, lifestyle, and preferences. Our medical team will work with you to determine the most effective delivery method for your unique needs."
    },
    {
      question: "Will my insurance cover hormone therapy treatments?",
      answer: "Coverage for hormone therapy varies widely depending on your insurance provider, specific plan, and the diagnosed medical condition. Some plans cover hormone therapy for specific diagnosed conditions, while others may consider it elective. Our team works with you to determine potential coverage and offers flexible payment options to make treatment accessible regardless of insurance status."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our women's hormone therapy services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions about our women's hormone therapy services?
          </p>
          <a
            href="#consultation"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-teal-500 text-white font-medium transition-all hover:bg-teal-600 hover:shadow-lg"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;