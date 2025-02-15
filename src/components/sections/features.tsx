
import { Book, Calendar, MessageCircle, Search } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Find the Right Match",
    description:
      "Post your requirements and get matched with qualified tutors in your area.",
  },
  {
    icon: Calendar,
    title: "Book Demo Classes",
    description:
      "Schedule and attend free demo classes before making a commitment.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    description:
      "Chat directly with tutors to discuss your learning needs and goals.",
  },
  {
    icon: Book,
    title: "Quality Education",
    description:
      "Learn from experienced tutors who are passionate about teaching.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've simplified the process of finding and connecting with tutors.
            Here's what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
