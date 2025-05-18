import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials({ id }: { id?: string }) {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechGrowth Inc.",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Working with this team has transformed our online presence completely. The attention to detail and customer service is unmatched. Highly recommend!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Small Business Owner",
      company: "Chen's Bistro",
      image: "", // Missing image to trigger fallback
      rating: 5,
      text: "Our website redesign exceeded all expectations. Sales have increased 30% since launch and customers love the new user-friendly interface."
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "CEO",
      company: "Innovate Solutions",
      image: "/api/placeholder/64/64",
      rating: 4,
      text: "Professional, responsive, and incredibly talented. They managed to capture our brand essence perfectly and delivered ahead of schedule!"
    }
  ];

  return (
    <section
      id={id}
      className="py-16 px-4 bg-[url('/cartoon-bg.svg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">What Our Clients Say</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
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
              className="bg-white rounded-3xl shadow-xl p-6 flex flex-col h-full border-2 border-purple-200"
            >
              <div className="flex items-center mb-4">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-purple-300"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full mr-4 bg-purple-300 text-white flex items-center justify-center text-lg font-semibold border-2 border-purple-300">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg text-purple-800">{testimonial.name}</h3>
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
