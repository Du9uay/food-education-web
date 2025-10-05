import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, FoodGrowth, Users, Package, Shield, Target } from './Icons';

interface CourseChapter {
  id: string;
  title: string;
  subtitle: string;
  path: string;
  icon: React.ComponentType<any>;
  color: string;
}

const courseChapters: CourseChapter[] = [
  {
    id: 'industry-overview',
    title: '第一章：行业全景概览',
    subtitle: '轻食行业发展历程与市场分析',
    path: '/course/industry-overview',
    icon: FoodGrowth,
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 'business-models',
    title: '第二章：商业模式解析',
    subtitle: '轻食行业商业模式深度分析',
    path: '/course/business-models',
    icon: Target,
    color: 'from-purple-400 to-purple-600'
  },
  {
    id: 'compliance',
    title: '第三章：合规运营管理',
    subtitle: '食品安全与法规要求',
    path: '/course/compliance',
    icon: Shield,
    color: 'from-red-400 to-red-600'
  },
  {
    id: 'branding-strategy',
    title: '第四章：品牌策略构建',
    subtitle: '轻食品牌定位与营销策略',
    path: '/course/branding-strategy',
    icon: Users,
    color: 'from-orange-400 to-orange-600'
  },
  {
    id: 'challenges-opportunities',
    title: '第五章：挑战与机遇',
    subtitle: '行业发展趋势与未来展望',
    path: '/course/challenges-opportunities',
    icon: FoodGrowth,
    color: 'from-cyan-400 to-cyan-600'
  }
];

interface CourseNavigationProps {
  className?: string;
}

const CourseNavigation: React.FC<CourseNavigationProps> = ({ className = '' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // 找到当前页面在课程中的位置
  const currentIndex = courseChapters.findIndex(chapter => chapter.path === location.pathname);
  const currentChapter = currentIndex >= 0 ? courseChapters[currentIndex] : null;
  const prevChapter = currentIndex > 0 ? courseChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < courseChapters.length - 1 ? courseChapters[currentIndex + 1] : null;

  // 特殊处理第一章和第五章的导航
  const isFirstChapter = location.pathname === '/course/industry-overview';
  const isLastChapter = location.pathname === '/course/challenges-opportunities';

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className={`${className}`}>
      {/* 当前章节信息 */}
      {currentChapter && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3">
            <currentChapter.icon className="w-5 h-5 text-white" />
            <span className="text-white font-medium">{currentChapter.title}</span>
          </div>
        </motion.div>
      )}

      {/* 导航卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* 上一章/返回职业发展 */}
        {(prevChapter || isFirstChapter) && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4 }}
            className="group cursor-pointer"
            onClick={() => handleNavigation(isFirstChapter ? '/careers' : prevChapter!.path)}
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 transition-all duration-300 group-hover:bg-white/20">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowLeft className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-400 mb-1">{isFirstChapter ? '返回' : '上一章'}</p>
                  <h3 className="text-lg font-semibold text-white truncate group-hover:text-emerald-300 transition-colors">
                    {isFirstChapter ? '职业发展' : prevChapter!.title}
                  </h3>
                  <p className="text-sm text-slate-300 truncate">
                    {isFirstChapter ? '探索轻食行业职业机会' : prevChapter!.subtitle}
                  </p>
                </div>
                <div className={`w-3 h-8 rounded-full bg-gradient-to-b ${isFirstChapter ? 'from-blue-400 to-blue-600' : prevChapter!.color} opacity-70`}></div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 下一章/前往课程总结 */}
        {(nextChapter || isLastChapter) && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ y: -4 }}
            className="group cursor-pointer"
            onClick={() => handleNavigation(isLastChapter ? '/course-summary' : nextChapter!.path)}
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 transition-all duration-300 group-hover:bg-white/20">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-8 rounded-full bg-gradient-to-b ${isLastChapter ? 'from-cyan-400 to-cyan-600' : nextChapter!.color} opacity-70`}></div>
                <div className="flex-1 min-w-0 text-right">
                  <p className="text-sm text-slate-400 mb-1">{isLastChapter ? '前往' : '下一章'}</p>
                  <h3 className="text-lg font-semibold text-white truncate group-hover:text-emerald-300 transition-colors">
                    {isLastChapter ? '课程总结' : nextChapter!.title}
                  </h3>
                  <p className="text-sm text-slate-300 truncate">
                    {isLastChapter ? '回顾与总结所学内容' : nextChapter!.subtitle}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>


    </div>
  );
};

export default CourseNavigation;