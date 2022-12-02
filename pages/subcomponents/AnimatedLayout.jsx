import { motion } from "framer-motion";

const AnimatedLayout = ({ children, props }) => {
  return (
    <motion.div
      className={props.className || ''}
      id={props.id || ''}
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedLayout;