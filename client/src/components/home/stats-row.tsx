import { motion } from 'framer-motion';

export const StatsRow = () => {
  const stats = [
    { value: "24h", label: "Response Time" },
    { value: "100%", label: "Client Retention" },
    { value: "3x", label: "Faster Delivery" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
          <div className="text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}; 