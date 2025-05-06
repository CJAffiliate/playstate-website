import { motion, useScroll, useTransform } from 'framer-motion';
import { PixelText } from '@/components/ui/pixel-text';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Link } from 'wouter';
import HeroSection, { FloatingIconConfig } from '@/components/ui/HeroSection';
import WorkWithUsModal from '@/components/layout/WorkWithUsModal';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const whyUsHeroIcons: FloatingIconConfig[] = [
  { iconClass: 'bx bx-target-lock', colorClass: 'text-playyellow', sizeClass: 'text-3xl', positionClass: 'absolute top-[10%] left-[15%]' },
  { iconClass: 'bx bx-trending-up', colorClass: 'text-white', sizeClass: 'text-2xl', positionClass: 'absolute top-[10%] left-[40%]', delayClass: 'floating-icon-delay-1' },
  { iconClass: 'bx bx-bullseye', colorClass: 'text-playyellow', sizeClass: 'text-4xl', positionClass: 'absolute top-[10%] right-[20%]', delayClass: 'floating-icon-delay-2' },
  { iconClass: 'bx bx-rocket', colorClass: 'text-white', sizeClass: 'text-3xl', positionClass: 'absolute top-[35%] left-[10%]', delayClass: 'floating-icon-delay-3' },
];

export default function WhyUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const [isWorkWithUsModalOpen, setIsWorkWithUsModalOpen] = useState(false);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <main ref={containerRef} className="bg-playblack">
      {/* Hero Section with Parallax */}
      <motion.div 
        style={{ opacity, scale }}
        className="h-screen relative flex items-center justify-center overflow-hidden"
      >
        <HeroSection
          heading="WHY PLAYSTATE"
          subheading="We're not another agency. We're the operators behind marketing systems that scale — fast, clean, and without fluff."
          floatingIcons={whyUsHeroIcons}
          pixelTextClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-playyellow tracking-tight font-bold whitespace-nowrap"
        />
      </motion.div>

      {/* 1. Broken Agency Model Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container-width py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <PixelText text="THE PROBLEM" className="text-playyellow" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                The Agency Model is Broken
              </h2>
              <p className="text-gray-400 text-lg">
                Traditional agencies are built for retainers, not results. You get layers of middlemen, slow launches, and recycled playbooks.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                      <i className="bx bx-time text-2xl text-red-500"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Weeks to Launch</h3>
                      <p className="text-gray-400">Multiple approval layers slow everything down</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                      <i className="bx bx-user text-2xl text-red-500"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Account Managers</h3>
                      <p className="text-gray-400">Middlemen who don't understand your business</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                      <i className="bx bx-copy-alt text-2xl text-red-500"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Template Work</h3>
                      <p className="text-gray-400">Recycled strategies that don't move the needle</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Operator Model Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
        <div className="container-width py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6 order-2 lg:order-1">
              <PixelText text="THE SOLUTION" className="text-playyellow" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                The Playstate Model
              </h2>
              <p className="text-gray-400 text-lg">
                We're operators who've been in your shoes. We build fast, iterate faster, and care about results because we've been on your side.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative order-1 lg:order-2">
              <div className="relative bg-black/40 backdrop-blur-sm border border-playyellow/20 rounded-xl p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-playyellow/20 to-transparent"></div>
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-playyellow/20 flex items-center justify-center">
                      <i className="bx bx-rocket text-2xl text-playyellow"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Direct Access</h3>
                      <p className="text-gray-400">Work directly with the operator, no middlemen</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-playyellow/20 flex items-center justify-center">
                      <i className="bx bx-bolt text-2xl text-playyellow"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Fast Execution</h3>
                      <p className="text-gray-400">Launch in days, not weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-playyellow/20 flex items-center justify-center">
                      <i className="bx bx-bulb text-2xl text-playyellow"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Custom Strategy</h3>
                      <p className="text-gray-400">Tailored solutions for your specific needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Workflow Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-pattern opacity-10"></div>
        <div className="container-width py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <PixelText text="THE PROCESS" className="text-playyellow" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                What It's Like to Work With Us
              </h2>
            </motion.div>

            {/* Sprint Timeline */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full relative z-10">
                {[
                  {
                    title: "Slack: Direct Access",
                    description: "Real-time updates, instant feedback, zero delays",
                    icon: "bx-message-dots",
                    visual: (
                      <div className="w-full">
                        <div className="flex items-start gap-2 mb-2">
                          <div className="w-7 h-7 rounded-full bg-playyellow flex items-center justify-center text-black font-bold text-xs">P</div>
                          <div className="bg-[#181818] rounded-lg px-3 py-2 max-w-[180px] border border-playyellow/20 shadow-[0_2px_8px_0_rgba(255,221,51,0.08)]">
                            <div className="text-white text-sm leading-tight">All good. Just pushed the new version.</div>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-7 h-7 rounded-full bg-playyellow flex items-center justify-center text-black font-bold text-xs opacity-0">P</div>
                          <div className="bg-[#181818] rounded-lg px-3 py-2 max-w-[180px] border border-playyellow/20 shadow-[0_2px_8px_0_rgba(255,221,51,0.08)]">
                            <div className="text-white text-sm leading-tight">Let me know if you want to test a new CTA.</div>
                          </div>
                        </div>
                      </div>
                    )
                  },
                  {
                    title: "Loom: Every Move Explained",
                    description: "Clear breakdowns, no mystery, full transparency",
                    icon: "bx-video",
                    visual: (
                      <div className="w-full flex flex-col items-center">
                        <div className="relative aspect-video w-full bg-[#181818] rounded-lg overflow-hidden border border-playyellow/20 shadow-[0_2px_8px_0_rgba(255,221,51,0.08)] flex items-center justify-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-playyellow/80 flex items-center justify-center">
                            <i className="bx bx-play text-2xl text-black"></i>
                          </div>
                          <div className="absolute bottom-2 left-4 right-4 h-1 bg-gray-700 rounded-full">
                            <div className="h-full w-1/3 bg-playyellow rounded-full"></div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-300 text-center mt-1 leading-tight">Walkthrough: Hero layout changes + CRO tweaks</div>
                      </div>
                    )
                  },
                  {
                    title: "Fast Shipping",
                    description: "From idea to live in days, not weeks",
                    icon: "bx-rocket",
                    visual: (
                      <div className="w-full flex flex-col items-center">
                        <div className="w-full flex items-center gap-2 mb-2">
                          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-playyellow rounded-full w-5/6 transition-all duration-500"></div>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-playyellow flex items-center justify-center">
                            <i className="bx bx-check text-black text-lg"></i>
                          </div>
                        </div>
                        <div className="text-xs text-gray-300 text-center leading-tight">Landing page live. Link below.</div>
                        <div className="text-xs text-playyellow text-center mt-1 leading-tight">Deployed in 3 days.</div>
                      </div>
                    )
                  },
                  {
                    title: "Iteration",
                    description: "Daily improvements based on real data",
                    icon: "bx-line-chart",
                    visual: (
                      <div className="w-full flex flex-col items-center px-4 md:px-8">
                        <div className="flex items-end gap-2 h-16 w-full mb-2">
                          <div className="flex-1 flex justify-center">
                            <div className="w-full max-w-[40px] h-6 bg-gray-700 rounded-t-lg"></div>
                          </div>
                          <div className="flex-1 flex justify-center">
                            <div className="w-full max-w-[40px] h-10 bg-gray-700 rounded-t-lg"></div>
                          </div>
                          <div className="flex-1 flex justify-center relative">
                            <div className="w-full max-w-[40px] h-14 bg-playyellow rounded-t-lg relative">
                              <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-playyellow text-xs px-2 py-1 rounded shadow-lg border border-playyellow/40 whitespace-nowrap font-sans flex items-center gap-1">
                                <i className="bx bx-up-arrow-alt text-playyellow"></i> CTR up 14%
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex justify-center">
                            <div className="w-full max-w-[40px] h-8 bg-gray-700 rounded-t-lg"></div>
                          </div>
                          <div className="flex-1 flex justify-center">
                            <div className="w-full max-w-[40px] h-12 bg-gray-700 rounded-t-lg"></div>
                          </div>
                        </div>
                        <div className="text-xs text-gray-300 text-center leading-tight">since yesterday's hook change</div>
                      </div>
                    )
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="relative flex flex-col items-center h-full motion-safe:transition-all motion-safe:duration-300"
                  >
                    {/* Icon Anchor on Timeline */}
                    <div className="z-20 mb-2">
                      <div className="w-12 h-12 rounded-full bg-black border-4 border-playyellow shadow-[0_0_16px_4px_rgba(255,221,51,0.3)] flex items-center justify-center -mb-6">
                        <i className={`bx ${step.icon} text-playyellow text-2xl`}></i>
                      </div>
                    </div>
                    <motion.div
                      tabIndex={0}
                      className="bg-black/60 backdrop-blur-sm border-2 border-playyellow/40 rounded-xl p-6 w-full shadow-[0_0_24px_4px_rgba(255,221,51,0.08)] flex flex-col items-center min-h-[340px] h-full outline-none overflow-hidden"
                      whileHover={{ scale: 1.035, boxShadow: '0 0 32px 0 rgba(255,221,51,0.18)' }}
                      whileFocus={{ scale: 1.035, boxShadow: '0 0 32px 0 rgba(255,221,51,0.18)' }}
                    >
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 text-center font-sans leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 text-center leading-snug">
                        {step.description}
                      </p>
                      <div className="w-full flex-1 flex items-end justify-center">
                        {step.visual}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sprint Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { value: "24h", label: "Response Time" },
                { value: "3-5d", label: "First Ship" },
                { value: "Daily", label: "Updates" }
              ].map((stat, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-playyellow mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Real Wins Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-wave-pattern opacity-10"></div>
        <div className="container-width py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-16"
          >
            <motion.div variants={fadeInUp} className="text-center space-y-4">
              <PixelText text="THE RESULTS" className="text-playyellow" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Real Wins, Real Numbers
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { stat: "3x", label: "Faster Launch Time" },
                { stat: "2.5x", label: "ROI Increase" },
                { stat: "85%", label: "Cost Reduction" }
              ].map((item, index) => (
                <div key={index} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                  <div className="text-5xl font-bold text-playyellow mb-2">{item.stat}</div>
                  <div className="text-gray-400">{item.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-playyellow/20 flex items-center justify-center">
                    <i className="bx bx-quote-alt-left text-2xl text-playyellow"></i>
                  </div>
                  <div>
                    <p className="text-gray-300 text-lg mb-4">
                      "Playstate transformed our marketing. What used to take weeks now takes days. The direct access to operators who actually care about results is game-changing."
                    </p>
                    <div className="font-bold text-white">Sarah Chen</div>
                    <div className="text-gray-400">CMO, TechStart</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container-width py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <PixelText text="READY TO SCALE?" className="text-playyellow" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Let's Build Something Amazing
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                No fluff. No middlemen. Just fast, effective marketing systems that scale.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <button 
                onClick={() => setIsWorkWithUsModalOpen(true)}
                className="cta-button bg-playyellow text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-white transition-all duration-300"
              >
                Start the Conversation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work With Us Modal */}
      {isWorkWithUsModalOpen && (
        <WorkWithUsModal onClose={() => setIsWorkWithUsModalOpen(false)} />
      )}
    </main>
  );
} 