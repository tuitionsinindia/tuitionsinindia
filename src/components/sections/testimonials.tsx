
export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied students and tutors who have found their perfect match on our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Priya Sharma",
              role: "Parent",
              content: "Found an excellent math tutor for my daughter. The demo class feature helped us make the right choice.",
            },
            {
              name: "Rahul Kumar",
              role: "Student",
              content: "The platform made it easy to find a qualified tutor in my area. My grades have improved significantly.",
            },
            {
              name: "Anjali Verma",
              role: "Tutor",
              content: "This platform has helped me connect with students who are eager to learn. The scheduling system is very convenient.",
            },
          ].map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <p className="text-gray-600 mb-4">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
