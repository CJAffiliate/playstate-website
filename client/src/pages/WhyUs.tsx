import { motion } from 'framer-motion';

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-playblack">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="font-space text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="text-playyellow">PLAYSTATE</span>
          </motion.h1>

          <motion.p 
            className="text-playgray text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: 0.2
            }}
          >
            We're a team of marketers, designers, and strategists dedicated to one goal: making your business more profitable through better marketing.
          </motion.p>

          {/* Our approach section */}
          <motion.div 
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="font-space text-2xl md:text-3xl font-bold mb-8 text-center"
              variants={itemVariants}
            >
              Our <span className="text-playyellow">Approach</span>
            </motion.h2>

            <motion.div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 mb-8" variants={itemVariants}>
              <h3 className="font-space text-xl font-bold mb-4">We Don't Just Make Things Look Good</h3>
              <p className="text-playgray mb-4">
                Unlike agencies that prioritize aesthetics over results, every design decision we make is backed by data and conversion principles. 
                We believe beautiful design should also be functional design.
              </p>
              <p className="text-playgray">
                Our process always starts with understanding your audience, their pain points, and what triggers them to take action. 
                Then we craft marketing assets that speak directly to these insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10" variants={itemVariants}>
                <div className="flex items-start mb-4">
                  <div className="bg-playyellow/20 p-3 rounded-lg text-playyellow text-2xl mr-4">
                    <i className='bx bx-target-lock'></i>
                  </div>
                  <h3 className="font-space text-xl font-bold">Results-First Mentality</h3>
                </div>
                <p className="text-playgray">
                  We measure success by the numbers that matter to your business: conversions, sign-ups, sales, and ROI. 
                  Pretty designs mean nothing if they don't drive business growth.
                </p>
              </motion.div>

              <motion.div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10" variants={itemVariants}>
                <div className="flex items-start mb-4">
                  <div className="bg-playyellow/20 p-3 rounded-lg text-playyellow text-2xl mr-4">
                    <i className='bx bx-cycling'></i>
                  </div>
                  <h3 className="font-space text-xl font-bold">Agile Process</h3>
                </div>
                <p className="text-playgray">
                  No lengthy approval processes or bureaucracy. We work in rapid iterations, testing and refining based on real-world performance.
                  This means faster turnaround times and better results.
                </p>
              </motion.div>

              <motion.div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10" variants={itemVariants}>
                <div className="flex items-start mb-4">
                  <div className="bg-playyellow/20 p-3 rounded-lg text-playyellow text-2xl mr-4">
                    <i className='bx bx-line-chart'></i>
                  </div>
                  <h3 className="font-space text-xl font-bold">Continuous Optimization</h3>
                </div>
                <p className="text-playgray">
                  We don't "set it and forget it." Every project includes ongoing monitoring and optimization to ensure your marketing efforts improve over time.
                </p>
              </motion.div>

              <motion.div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10" variants={itemVariants}>
                <div className="flex items-start mb-4">
                  <div className="bg-playyellow/20 p-3 rounded-lg text-playyellow text-2xl mr-4">
                    <i className='bx bx-brain'></i>
                  </div>
                  <h3 className="font-space text-xl font-bold">Strategic Thinking</h3>
                </div>
                <p className="text-playgray">
                  We don't just execute tasks—we think holistically about your marketing ecosystem. How does each piece connect? 
                  What's the customer journey? Where are the friction points?
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Our team */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-space text-2xl md:text-3xl font-bold mb-8 text-center">
              The <span className="text-playyellow">Team</span>
            </h2>

            <p className="text-center text-playgray max-w-2xl mx-auto mb-8">
              We're a tight-knit team of specialists who combine creative thinking with marketing expertise. 
              Each project brings together the perfect mix of skills tailored to your specific needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                <div className="w-24 h-24 rounded-full bg-playyellow/20 flex items-center justify-center text-playyellow text-4xl mx-auto mb-4">
                  <i className='bx bx-palette'></i>
                </div>
                <h3 className="font-space text-xl font-bold mb-2">Creative Team</h3>
                <p className="text-playgray">Designers, copywriters, and visual storytellers who bring your brand to life.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                <div className="w-24 h-24 rounded-full bg-playyellow/20 flex items-center justify-center text-playyellow text-4xl mx-auto mb-4">
                  <i className='bx bx-code-block'></i>
                </div>
                <h3 className="font-space text-xl font-bold mb-2">Technical Team</h3>
                <p className="text-playgray">Developers and technical experts who ensure flawless implementation.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center">
                <div className="w-24 h-24 rounded-full bg-playyellow/20 flex items-center justify-center text-playyellow text-4xl mx-auto mb-4">
                  <i className='bx bx-analyse'></i>
                </div>
                <h3 className="font-space text-xl font-bold mb-2">Strategic Team</h3>
                <p className="text-playgray">Data analysts and marketers who optimize for conversions and growth.</p>
              </div>
            </div>
          </motion.div>

          {/* Call to action */}
          <motion.div 
            className="text-center mt-12 bg-playyellow/10 border border-playyellow/20 p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="font-space text-2xl md:text-3xl font-bold mb-4">Ready to Level Up Your Marketing?</h2>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Let's work together to transform your marketing from a cost center to a revenue generator. No gimmicks, no empty promises—just results.
            </p>
            <button className="inline-flex items-center bg-playyellow text-playblack px-8 py-3 rounded-md font-medium hover:bg-white transition-colors">
              Work With Us <i className='bx bx-right-arrow-alt ml-2'></i>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
