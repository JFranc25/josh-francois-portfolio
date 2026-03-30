import { motion } from "framer-motion";

export default function App() {
  return (
    <div>
      <h1>TEST</h1>

      <motion.div
        animate={{ x: 300 }}
        transition={{ duration: 1 }}
        style={{
          width: 100,
          height: 100,
          background: "red"
        }}
      />
    </div>
  );
}