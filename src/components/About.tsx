import { motion } from 'motion/react';
import { Coffee, BookOpen, Code, Heart, School, Folder } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Me from '@/assets/me.jpg';

export function About() {
  const timeline = [
    {
      year: '2022.6 - 至今',
      title: '前端工程師',
      description: [
        '使用React、Next.js框架開發',
        '協同後端工程師開發API整合',
        '打造響應式網頁、SEO及PWA',
        '負責網站前端架構設計與實作',
        '設計並實作前端元件'
      ],
      icon: Code,
    },
    {
      year: '2025.08 – 至今',
      title: '研究助理',
      description: [
        '協助進行「AI於語言學習之應用」研究，聚焦於如何利用 AI 工具輔助教師授課與學生自主學習，展現跨領域整合能力。'
      ],
      icon: Folder,
    },
    {
      year: '2023.10 - 2023.11',
      title: 'React 教學講座講師',
      description: [
        '設計並授課「React 前端開發」課程，學員包含校內外人士。'
      ],
      icon: BookOpen,
    },
    {
      year: '2023.09',
      title: '前端集訓體驗講師',
      description: [
        '主導「網頁設計基礎」課程，將抽象概念轉化為實作案例，幫助初學者快速入門。'
      ],
      icon: BookOpen,
    },
    {
      year: '2022.09 - 2023.06',
      title: '微積分教學助理',
      description: [],
      icon: School,
    },
    {
      year: '2021.09 - 2022.06',
      title: '科學會美宣長',
      description: [],
      icon: Heart,
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-block">
            <span className="text-4xl">☕</span>
          </div>
          <h2 className="text-3xl md:text-4xl">有關於我</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFB7C5] to-[#B8D4C8] rounded-[3rem] blur-3xl opacity-20" />
            <ImageWithFallback
              src={Me}
              alt="Profile"
              className="relative w-full rounded-[3rem] shadow-2xl border-4 border-white dark:border-[#2D1B2E]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                目前正積極朝全端工程師與人工智慧領域發展。
                在學期間參與校內拔尖計畫，負責前端開發與 API 串接，使用 React、Next.js進行專案實作。
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                精通RWD響應式設計與 SEO策略，能有效提升網站效能、使用者體驗與介面互動性。
                同時具有PWA及SSO開發經驗。
                具備良好的問題解決與系統架構設計能力，能獨立規劃並實作前端元件，並與團隊緊密合作以達成專案目標。
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                修習過 MySQL 資料庫、資料結構、Python 與 Java 程式語言，具備實務開發經驗。
                目前正深入學習 AI 領域基礎，並曾以 OpenCV 與 Whisper 技術開發相關專題。🌸
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F0EB]/50 dark:bg-[#4A2E4C]/30 text-sm border border-[#E8DED2]/50">
                <Coffee className="w-4 h-4 text-[#FFB7C5]" />
                網頁設計
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F0EB]/50 dark:bg-[#4A2E4C]/30 text-sm border border-[#E8DED2]/50">
                🌸 旅遊
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F0EB]/50 dark:bg-[#4A2E4C]/30 text-sm border border-[#E8DED2]/50">
                🎧 音樂
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center py-20 px-6">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start group"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB7C5]/20 to-[#B8D4C8]/20 flex items-center justify-center border border-[#E8DED2]/50 dark:border-[#4A2E4C]/50"
                  >
                    <Icon className="w-5 h-5 text-[#FFB7C5]" />
                  </motion.div>
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-px h-56 bg-gradient-to-b from-[#E8DED2] to-transparent dark:from-[#4A2E4C]" />
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs px-3 py-1 rounded-full bg-[#FFB7C5]/10 text-[#FFB7C5] border border-[#FFB7C5]/20">
                      {item.year}
                    </span>
                    <h3 className="text-lg">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <ul>
                      {item.description.map((line, i) => (
                        <li key={i}>
                          {i % 2 == 0 ? '🌸' : '💮'} {line}
                        </li>
                      ))}
                    </ul>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
