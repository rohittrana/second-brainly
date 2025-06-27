import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials({ id }: { id?: string }) {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechGrowth Inc.",
      image: "",
      rating: 5,
      text: "Working with this team has transformed our online presence completely. The attention to detail and customer service is unmatched. Highly recommend!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Small Business Owner",
      company: "Chen's Bistro",
      image: "",
      rating: 5,
      text: "Our website redesign exceeded all expectations. Sales have increased 30% since launch and customers love the new user-friendly interface."
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "CEO",
      company: "Innovate Solutions",
      image: "",
      rating: 4,
      text: "Professional, responsive, and incredibly talented. They managed to capture our brand essence perfectly and delivered ahead of schedule!"
    }
  ];

  return (
    <section
      id={id}
      className="py-16 px-4 bg-transparent bg-cover bg-center bg-no-repeat font-['Inter']"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-gray-900 drop-shadow-sm font-['Playfair_Display']">
            What Our Clients Say
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people are saying about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-md p-6 flex flex-col h-full border-2 border-purple-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-purple-300"
                  />
                ) : (
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=8b5cf6&color=fff&size=64`}
                    alt={`${testimonial.name} avatar`}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-purple-300"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-lg text-purple-800 font-['Poppins']">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < testimonial.rating ? "#FFD700" : "none"}
                    color={i < testimonial.rating ? "#FFD700" : "#D1D5DB"}
                  />
                ))}
              </div>

              <p className="text-gray-800 italic flex-grow">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
