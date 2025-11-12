import { motion } from 'motion/react';
import { Download, Sparkles } from 'lucide-react';
import { SakuraPetals } from './SakuraPetal';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { HashLink } from 'react-router-hash-link';
import File from '@/assets/resume.pdf';
import Me from '@/assets/me.jpg';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      <SakuraPetals />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB7C5]/10 dark:bg-[#FFB7C5]/20 border border-[#FFB7C5]/20"
          >
            <Sparkles className="w-4 h-4 text-[#FFB7C5]" />
            <span className="text-sm">歡迎來到我的個人網站</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl"
            >
              你好，我是
              <span className="text-[#FFB7C5] inline-block">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="inline-block"
                >
                  林筱茜
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-lg"
            >
              我是一位資訊管理系的學生，從事前端網頁開發工程，擅長React、Next.js、scss、API串接等工具與技術。<br />
              🌸目前正積極朝全端工程師與人工智慧領域發展🌸
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="/projects-page"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FFB7C5] to-[#FFC9D6] text-white shadow-lg shadow-[#FFB7C5]/30 cursor-pointer"
            >
              <HashLink to="/projects-page" smooth>
                我的作品
              </HashLink>
            </motion.a>

            <motion.a
              href={File}
              download="林筱茜_履歷.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full border border-[#E8DED2] dark:border-[#4A2E4C] backdrop-blur-sm flex items-center gap-2 hover:border-[#FFB7C5] transition-colors"
            >
              <Download className="w-4 h-4" />
              下載履歷
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFB7C5] to-[#B8D4C8] rounded-full blur-3xl opacity-20" />
            <ImageWithFallback
              src={Me}
              alt="Avatar"
              className="relative w-full max-w-md mx-auto rounded-[3rem] shadow-2xl border-4 border-white dark:border-[#2D1B2E]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
