import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css'; // Include your custom styles

const Testimonials = () => {
  const testimonialsData = [
    {
      rating: '⭐️⭐️⭐️⭐️⭐️',
      review:
        'Amazing service! The team went above and beyond my expectations. Will definitely recommend.',
      client: '- John Door',
    },
    {
      rating: '⭐️⭐️⭐️⭐️⭐️',
      review:
        'Great service! I felt like they cared and did not take advantage. Would recommend to anyone.',
      client: '- Rebecca Doe',
    },
    {
      rating: '⭐️⭐️⭐️⭐️⭐️',
      review:
        'They took care of my transmission isssues when other places would not. Great place great service',
      client: '- Mark Docker',
    },
    {
      rating: '⭐️⭐️⭐️⭐️⭐️',
      review:
        'I dont go anywhere else, Max auto repair always comes through from regular maintenance to major issue.',
      client: '- James Loe',
    },
    // Add similar objects for other reviews
  ];

  return (
    <div className="testimonial" data-testid="testimonials">
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <div className="rating">{testimonial.rating}</div>
          <p className="review">"{testimonial.review}"</p>
          <p className="client">{testimonial.client}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
