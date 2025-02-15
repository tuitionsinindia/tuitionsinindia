
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Gradient Spotlight */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] bg-primary/30 rounded-full blur-[128px] animate-spotlight" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Find Your Perfect Tutor in{" "}
            <span className="text-primary">Minutes</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 mb-12">
            Connect with qualified tutors across India. Post your requirements or start
            teaching today. Quality education is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              I'm a Student
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              I'm a Tutor
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
