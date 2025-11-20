import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonialData = [
  {
    quote: 'I filled my passport application in just 2 minutes! This app is a lifesaver. So simple and fast.',
    author: 'Priya S.',
    source: 'Student, Delhi'
  },
  {
    quote: 'Incredibly helpful for senior citizens like me. The voice feature is a blessing. No more confusion with complex forms.',
    author: 'Rajesh K.',
    source: 'Retired Officer, Mumbai'
  },
  {
    quote: 'As a small business owner, I have to deal with a lot of paperwork. Janta Sahara has saved me countless hours.',
    author: 'Anjali M.',
    source: 'Entrepreneur, Bangalore'
  }
];

function Testimonials() {
  return (
    <div className="testimonials-section">
      <motion.h2 
        className="testimonials-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        Loved by Citizens Across India
      </motion.h2>
      <div className="testimonials-grid">
        {testimonialData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <div className="testimonial-author-info">
              <span className="testimonial-author">⭐ {testimonial.author}</span>
              <span className="testimonial-source">{testimonial.source}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
