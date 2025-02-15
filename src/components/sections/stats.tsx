
export const Stats = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-primary">10K+</h3>
            <p className="text-gray-600">Active Students</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-primary">5K+</h3>
            <p className="text-gray-600">Qualified Tutors</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-primary">50K+</h3>
            <p className="text-gray-600">Classes Completed</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-primary">95%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};
