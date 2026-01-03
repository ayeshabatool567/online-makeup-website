const faqs = [
  {
    question: "How do I book a consultation?",
    answer: "You can book a consultation by calling us at (555) 123-4567 or filling out the contact form above with \"Book Consultation\" as the subject.",
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day return policy for all unused and unopened products. Simply contact our support team to initiate a return.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes! We offer virtual beauty consultations via video call. Perfect for personalized skincare advice from the comfort of your home.",
  },
  {
    question: "Do you offer group workshops?",
    answer: "Absolutely! We host group beauty workshops for parties, corporate events, and bridal showers. Contact us for custom packages.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Quick answers to common questions
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-2xl shadow-card"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {faq.question}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
