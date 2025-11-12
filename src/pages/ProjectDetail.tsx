import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../lib/data/projectsData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ExternalLink, ListChecks, Award, BookOpen, Code, ChevronLeft, GalleryVertical } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

export default function ProjectsDetail() {
  const { id } = useParams();
  const [theme, setTheme] = useState<'light' | 'sakura'>('light');

  const project = projects[Number(id) - 1];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'sakura' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'sakura') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'sakura' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'sakura') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FEFEFE] dark:bg-gradient-to-br dark:from-[#2D1B2E] dark:via-[#1A0F1B] dark:to-[#2D1B2E] text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="py-20 px-6 text-center min-h-[70vh] flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8" // 增加間距
          >
            <span className="text-4xl">😢</span>
            <h2 className="text-3xl md:text-4xl">專案不存在</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">抱歉，我們找不到您要的專案。</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/projects-page"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FFB7C5] to-[#FFC9D6] text-white shadow-lg shadow-[#FFB7C5]/30 cursor-pointer text-sm"
              >
                返回專案列表
              </Link>
            </motion.div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  const { icon, title, description, image, tags, link, outcome, responsibilities, showcase } = project;

  return (
    <div className="min-h-screen bg-[#FEFEFE] dark:bg-gradient-to-br dark:from-[#2D1B2E] dark:via-[#1A0F1B] dark:to-[#2D1B2E] text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* 將 padding 移至 main，並使用 max-w-6xl */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          className="space-y-16" // 增加區塊間的垂直距離
          initial={{ opacity: 0, y: 20 }} // 統一使用 y: 20
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <ImageWithFallback
                src={image}
                alt={title}
                className="relative w-full h-auto rounded-[2rem] shadow-2xl border-4 border-white dark:border-[#2D1B2E]"
              />
            </motion.div>

            <div className="space-y-8">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-4xl">{icon ? icon : '🌸'}</span>
                <h2 className="text-3xl md:text-4xl mt-3">
                  {title}
                </h2>
              </motion.div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#FFB7C5]/20 to-[#FFB7C5]/40 border border-[#E8DED2]/50 dark:border-[#4A2E4C]/50"
                  >
                    <BookOpen className="w-6 h-6 text-[#FFB7C5]" />
                  </motion.div>
                  <h3 className="text-2xl">專案簡介</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              </div>

              {tags && tags.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#C5A3FF]/20 to-[#C5A3FF]/40 border border-[#E8DED2]/50 dark:border-[#4A2E4C]/50"
                    >
                      <Code className="w-6 h-6 text-[#C5A3FF]" />
                    </motion.div>
                    <h3 className="text-2xl">使用技術</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#F5F0EB]/50 dark:bg-[#4A2E4C]/30 text-xs border border-[#E8DED2]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {link && (
                <div className="space-y-4 pt-2">
                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#FFB7C5] to-[#FFC9D6] text-white shadow-lg shadow-[#FFB7C5]/30 cursor-pointer text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    瀏覽網站
                  </motion.a>
                </div>
              )}
            </div>
          </div>

          {/* 2. 專案成果 */}
          {outcome && outcome.length > 0 && (
            <div className="space-y-4 pt-8">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#B8D4C8]/20 to-[#B8D4C8]/40 border border-[#E8DED2]/50 dark:border-[#4A2E4C]/50"
                >
                  <Award className="w-6 h-6 text-[#B8D4C8]" />
                </motion.div>
                <h3 className="text-2xl">專案成果</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {outcome.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-[#B8D4C8] pt-1">🌸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* 3. 負責項目 */}
          {responsibilities && responsibilities.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#FFD6A5]/20 to-[#FFD6A5]/40 border border-[#E8DED2]/50 dark:border-[#4A2E4C]/50"
                >
                  <ListChecks className="w-6 h-6 text-[#FFD6A5]" />
                </motion.div>
                <h3 className="text-2xl">負責項目</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {responsibilities.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-[#FFD6A5] pt-1">🌸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {showcase && showcase.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#FFB7C5]/20 to-[#FFB7C5]/40 border border-[#E8DED2]/50 dark:border-[#4A2E4C]/50"
                >
                  <GalleryVertical className="w-6 h-6 text-[#FFB7C5]" />
                </motion.div>
                <h3 className="text-2xl">專案展示</h3>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {showcase.map((imgSrc, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/3">
                        <div className="p-1">
                          <ImageWithFallback
                            src={imgSrc}
                            alt={`${title} showcase ${index + 1}`}
                            className="w-full h-auto aspect-video object-cover rounded-2xl border-2 border-white/50 dark:border-[#2D1B2E]/50"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-[-1rem] top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-[-1rem] top-1/2 -translate-y-1/2" />
                </Carousel>
              </motion.div>
            </div>
          )}
        </motion.div>
      </main>

      {/* 返回按鈕 */}
      <motion.div
        className="text-center pb-20 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="/projects-page"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#E8DED2] dark:border-[#4A2E4C] backdrop-blur-sm hover:border-[#FFB7C5] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          返回專案列表
        </Link>
      </motion.div>

      <Footer />
    </div>
  );
}