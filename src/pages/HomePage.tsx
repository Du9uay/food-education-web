import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Settings, Network, Camera, Film, Video, Edit3, Clapperboard, TrendingUp, Lightbulb, ChevronRight, Building2, Briefcase, Rocket, Trophy, Sparkles, CheckCircle, Brain, Cpu, Zap, FoodAI } from '../components/Icons';
import { Leaf, Business, Compliance, Branding, Growth, Nutrition, Target, BookOpen, Users, Award } from '../components/FoodIcons';
import DigitalAvatarPlayer from '../components/DigitalAvatarPlayer';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = '轻食行业全景与商业模式解析';
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // 打字机效果
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  // 滚动动画控制
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // 六大板块导航
  const courseBlocks = [
    {
      title: '第一板块：课程内容概述',
      description: '了解轻食行业全景概览、商业模式解析、合规经营、品牌定位与挑战机遇',
      icon: BookOpen,
      path: '/course/overview',
      color: 'from-fresh-green-500 to-mint-green-500',
      delay: 0.1
    },
    {
      title: '第二板块：课程学习目标',
      description: '掌握5大学习目标，建立轻食行业专业认知框架与实践技能',
      icon: Target,
      path: '/objectives',
      color: 'from-vitality-orange-500 to-lemon-yellow-500',
      delay: 0.2
    },
    {
      title: '第三板块：涉及岗位',
      description: '了解轻食产品研发师、品牌策划、品牌运营、店长等4大核心岗位',
      icon: Users,
      path: '/careers',
      color: 'from-natural-blue-500 to-fresh-green-500',
      delay: 0.3
    },
    {
      title: '第四板块：课程内容详解',
      description: '深入学习轻食行业五大核心知识模块的理论与实践',
      icon: Business,
      path: '/course/detailed',
      color: 'from-soft-pink-500 to-vitality-orange-500',
      delay: 0.4
    },
    {
      title: '第五板块：课程内容总结',
      description: '梳理核心理论、前沿知识点与关键操作技能',
      icon: Award,
      path: '/course-summary',
      color: 'from-mint-green-500 to-natural-blue-500',
      delay: 0.5
    },
    {
      title: '第六板块：课堂测试',
      description: '通过互动测试检验学习成果，巩固理论知识',
      icon: Nutrition,
      path: '/course-test',
      color: 'from-lemon-yellow-500 to-soft-pink-500',
      delay: 0.6
    }
  ];

  // 五大课程章节
  const courseModules = [
    {
      title: '一. 轻食行业全景概览',
      description: '全面展现轻食行业全景，了解市场规模、发展态势等。学会分析行业竞争状况，把握轻食行业整体框架，深入理解轻食行业的市场布局，为后续学习商业模式筑牢基础。',
      icon: Leaf,
      path: '/course/industry-overview',
      color: 'from-fresh-green-500 to-mint-green-500',
      delay: 0.1
    },
    {
      title: '二. 轻食店铺商业模式解析',
      description: '深入解析轻食店铺商业模式，学习如何定位目标受众，设计产品组合与定价策略，搭建营销推广渠道。掌握线上线下结合吸引顾客的方法，构建可持续的盈利模式。',
      icon: Business,
      path: '/course/business-models',
      color: 'from-vitality-orange-500 to-lemon-yellow-500',
      delay: 0.2
    },
    {
      title: '三. 轻食店铺合规经营要点',
      description: '学习轻食店铺合规经营要点，掌握营业执照、食品经营许可证等证照办理要求，了解食材采购储存加工的卫生标准，掌握食品安全把控技巧，确保合法合规运营。',
      icon: Compliance,
      path: '/course/compliance',
      color: 'from-natural-blue-500 to-fresh-green-500',
      delay: 0.3
    },
    {
      title: '四. 轻食品牌的定位与差异化策略',
      description: '学习如何精准确定目标受众，剖析市场找到独特定位点。掌握通过产品特色、服务体验等打造差异化的技巧，让品牌在轻食市场中独树一帜，提升品牌竞争力。',
      icon: Branding,
      path: '/course/branding-strategy',
      color: 'from-soft-pink-500 to-vitality-orange-500',
      delay: 0.4
    },
    {
      title: '五. 轻食行业的挑战与机遇',
      description: '剖析轻食行业竞争激烈、食材成本波动等挑战，同时指出健康消费趋势带来的发展机遇。学会在挑战中寻找发展路径，提升应对轻食行业现状的能力。',
      icon: Growth,
      path: '/course/challenges-opportunities',
      color: 'from-mint-green-500 to-natural-blue-500',
      delay: 0.5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  const cardHover = {
    scale: 1.02,
    y: -8,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 30
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto relative overflow-visible">
        {/* 主标题区域 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ y }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-fresh-green-500 to-mint-green-500 rounded-full mb-6 shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              boxShadow: "0 15px 40px rgba(34, 197, 94, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            <Leaf className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-fresh-green-500"
              >
                |
              </motion.span>
            </span>
            <motion.span 
              className="block text-2xl font-normal text-vitality-orange-500 mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              营养配餐与新营养经济店铺经营专业核心课程
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-food-dark-100/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            深入学习轻食行业全景与商业模式，掌握店铺经营、品牌定位、合规运营等核心技能，
            培养具备轻食产品研发、品牌策划、店铺运营和市场分析能力的专业人才。
          </motion.p>
        </motion.div>

        {/* 新增大标题：为什么要学习这节课 */}
        <motion.section
          className="mb-16 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-fresh-green-500 via-vitality-orange-500 to-lemon-yellow-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            为什么要学习这门课
          </motion.h1>
          <motion.p
            className="text-lg text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            从更贴合市场的行业、企业、岗位角度为你一一分析
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-fresh-green-500 to-vitality-orange-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* 数字人播放器1 - 为什么要学习这门课 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqXCNXjvpD.mov"
            position={{ top: 0, right: '-16rem' }}
          />
        </motion.section>

        {/* 第一部分：为什么要关注行业 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-fresh-green-500 to-mint-green-500 rounded-2xl mr-6 shadow-fresh-green">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-food-dark-100">为什么要关注行业？</h2>
              <p className="text-vitality-orange-500 mt-2">抓住行业趋势，掌握核心技能，快速进入高薪职位</p>
            </div>
          </motion.div>

          {/* 主内容区 - 大卡片 */}
          <motion.div
            className="glass-effect p-12 relative overflow-hidden mb-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-主图.jpeg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 装饰性背景元素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fresh-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-lemon-yellow-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* 原因与现状 - 全宽展示 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-fresh-green-500">行业现状与机遇</span>
                </h3>

                {/* 四个核心数据点 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {/* 千亿级市场规模 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-fresh-green-500/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-1.　原因与现状：-人口健康问题加剧.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-8 h-8 text-fresh-green-500 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">人口健康问题加剧</h4>
                    <p className="text-white/90 text-sm">
                      随着慢性病、肥胖症、糖尿病等健康问题的不断增加，越来越多的人开始关注自己的饮食和健康管理。现在，互联网公司、金融企业和制造业等都开始引入<span className="font-bold text-vitality-orange-500">专业的营养管理服务</span>
                    </p>
                  </motion.div>

                  {/* 可观的盈利空间 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-fresh-green-500/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-1.　原因与现状：-可观的盈利空间.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="w-8 h-8 text-fresh-green-500 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">可观的盈利空间</h4>
                    <p className="text-white/90 text-sm">
                      营养配餐行业不仅能帮助个人改善健康，<span className="font-bold text-fresh-green-500">营养餐服务的毛利率普遍高于传统餐饮行业，可以达到50%以上</span>。此外，为企业提供定制化健康服务的毛利率也非常可观
                    </p>
                  </motion.div>

                  {/* 岗位需求爆发 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-fresh-green-500/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-1.　原因与现状：-岗位需求爆发.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Film className="w-8 h-8 text-fresh-green-500 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">岗位需求爆发</h4>
                    <p className="text-white/90 text-sm">
                      在大企业和一些服务行业中，也在招聘医疗机构和健康中心的营养人才，<span className="font-bold text-fresh-green-500">越来越多的互联网公司、餐饮连锁、保险公司等也开始招聘营养师、健康管理师</span>
                    </p>
                  </motion.div>

                  {/* 餐饮行业向健康餐饮转型 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-fresh-green-500/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-1.　原因与现状：-餐饮行业向健康餐饮转型.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Network className="w-8 h-8 text-fresh-green-500 mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">餐饮行业向健康餐饮转型</h4>
                    <p className="text-white/90 text-sm">
                      传统餐饮行业正在转向健康餐饮，尤其是在快餐、外卖、企业餐等领域。企业需要<span className="text-fresh-green-500 font-bold">专门的营养师来设计符合健康需求的餐单</span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* 结果导向 - 分为两列 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-vitality-orange-500">发展机遇</span>
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* 对企业而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-fresh-green-500/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-2.　结果导向- 对企业来说.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(34, 197, 94, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Target className="w-10 h-10 text-fresh-green-500 mr-3" />
                      <h4 className="text-2xl font-bold text-fresh-green-500">对企业来说</h4>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      通过专业的营养干预和健康管理服务，企业能够<span className="font-bold text-fresh-green-500">降低员工医疗成本、提高员工生产力</span>、提升员工的忠诚度与幸福感，最终推动企业的长远发展。
                    </p>
                  </motion.div>

                  {/* 对学生而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-fresh-green-500/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业？-2.　结果导向-对学生来说.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(34, 197, 94, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Users className="w-10 h-10 text-fresh-green-500 mr-3" />
                      <h4 className="text-2xl font-bold text-fresh-green-500">对学生来说</h4>
                    </div>
                    <p className="text-white text-lg leading-relaxed">
                      通过学习营养配餐与健康管理技能，毕业后学生<span className="font-bold text-fresh-green-500">能迅速进入员工健康管理、营养配餐和健康产品研发等岗位</span>，薪资起点较高，薪资和职位晋升空间显著增长。
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 数字人播放器2 - 为什么要关注行业 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIZ3eHjP3p.mov"
            position={{ top: 380, right: '-16rem' }}
          />
        </motion.section>

        {/* 第二部分：为什么要分清企业类型 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20 relative"
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-fresh-green-500 to-vitality-orange-500 rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要分清企业类型？</h2>
              <p className="text-vitality-orange-500 mt-2">精准定位企业类型，快速找到最适合自己的职业发展道路</p>
            </div>
          </motion.div>

          {/* 主内容区 - 阶梯式企业类型布局 */}
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* 上游企业 */}
              <motion.div
                className="relative max-w-3xl mr-auto ml-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-fresh-green-500 to-vitality-orange-500 rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Building2 className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-fresh-green-500/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-1. 上游.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-fresh-green-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-fresh-green-500">上游企业</h3>
                        <span className="text-fresh-green-500/60 text-sm font-semibold">技术与基础</span>
                      </div>
                      <p className="text-white/90 text-base mb-6">提供食品与健康管理所需的"硬件"和技术基础，支持企业营养服务的实现</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white/80 text-sm">营养分析与配餐技术公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white/80 text-sm">食品研发企业</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white/80 text-sm">食品设备与技术供应商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white/80 text-sm">营养与健康咨询公司</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ChevronRight className="w-10 h-10 text-fresh-green-500/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 中游企业 */}
              <motion.div
                className="relative max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-fresh-green-500 to-vitality-orange-500 rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Camera className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-fresh-green-500/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-2. 中游.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-fresh-green-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-fresh-green-500">中游企业</h3>
                        <span className="text-fresh-green-500/60 text-sm font-semibold">服务提供商</span>
                      </div>
                      <p className="text-white/90 text-base mb-6">核心是服务提供商，负责将上游资源整合成具体的营养服务方案，提供给最终客户</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white/80 text-sm">营养配餐公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white/80 text-sm">健康管理公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white/80 text-sm">团餐配送公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white/80 text-sm">保险公司健康管理部门</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <ChevronRight className="w-10 h-10 text-fresh-green-500/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 下游企业 */}
              <motion.div
                className="relative max-w-3xl ml-auto mr-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-fresh-green-500 to-vitality-orange-500 rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Users className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-fresh-green-500/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/二、为什么要分清企业类型？-3. 中游.jpeg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: -10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-fresh-green-500/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-fresh-green-500">下游企业</h3>
                        <span className="text-fresh-green-500/60 text-sm font-semibold">终端应用</span>
                      </div>
                      <p className="text-white/90 text-base mb-6">面向最终的消费者或企业客户，推动营养服务的实际应用，直接创造健康价值与商业机会</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white/80 text-sm">医疗与养老机构</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white/80 text-sm">零售与电商平台</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white/80 text-sm">消费者</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-fresh-green-500/10 to-vitality-orange-500/10 rounded-2xl border border-fresh-green-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-fresh-green-500 text-lg font-semibold text-center">
              分清企业类型，明确发展方向，快速找到适合自己的高薪岗位
            </p>
          </motion.div>

          {/* 数字人播放器3 - 为什么要分清企业类型 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIZ3eHWgsS.mov"
            position={{ top: 200, right: '-16rem' }}
          />
        </motion.section>

        {/* 第三部分：关于岗位你该知道的是 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-fresh-green-500 to-vitality-orange-500 rounded-2xl mr-6">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">关于岗位你该知道的是</h2>
              <p className="text-vitality-orange-500 mt-2">精准定位岗位，掌握营养健康管理核心技能，成为行业急需的专业人才</p>
            </div>
          </motion.div>

          {/* 岗位分类卡片 */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {/* 前期策划 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-fresh-green-500/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是（一）-有哪些岗位？-1. 营养健康方案设计.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-fresh-green-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-fresh-green-500 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-fresh-green-500 ml-3">营养健康方案设计</h3>
                </div>
                <p className="text-white/80 text-sm mb-4">负责设计营养与健康干预方案，确保方案能够满足不同客户（企业、个人等）的健康需求</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">营养师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">健康管理顾问</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">个性化营养配餐师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 营养健康配餐实施 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-fresh-green-500/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是（一）-有哪些岗位？-2. 营养健康配餐实施.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-fresh-green-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-fresh-green-500 rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-fresh-green-500 ml-3">营养健康配餐实施</h3>
                </div>
                <p className="text-white/80 text-sm mb-4">负责根据设计的营养方案，将其转化为实际可执行的配餐与饮食服务</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">营养配餐专员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">企业健康餐主管</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">健康餐配送员</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 效果评估 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-fresh-green-500/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是（一）-有哪些岗位？-3. 效果评估.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-fresh-green-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-fresh-green-500 rounded-xl flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-fresh-green-500 ml-3">效果评估</h3>
                </div>
                <p className="text-white/80 text-sm mb-4">负责对健康管理方案的效果进行评估与数据分析，优化方案</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">数据分析师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">营养效果评估师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">健康管理数据专家</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 健康管理支持 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-fresh-green-500/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/三、关于岗位你该知道的是（一）-有哪些岗位？-4. 健康管理支持.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-fresh-green-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-fresh-green-500 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-fresh-green-500 ml-3">健康管理支持</h3>
                </div>
                <p className="text-white/80 text-sm mb-4">为客户提供持续的技术支持和营养管理服务，确保健康管理方案的长期有效性</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">健康管理专员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">客户服务专员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-fresh-green-500" />
                    <span className="text-white/90 text-sm">营养师助理</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 普遍要求与待遇 */}
          <motion.div
            className="glass-effect p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-fresh-green-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-fresh-green-500 mb-6 text-center">行业要求与待遇</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-fresh-green-500/20 to-vitality-orange-500/20 border border-fresh-green-500/30">
                  <div className="text-2xl font-bold text-fresh-green-500 mb-2">门槛要求</div>
                  <p className="text-white/80 text-sm">企业更看重实际操作能力和解决实际问题的能力，特别是营养方案设计、健康数据分析、配餐与健康管理的经验</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-fresh-green-500/20 to-vitality-orange-500/20 border border-fresh-green-500/30">
                  <div className="text-2xl font-bold text-fresh-green-500 mb-2">7K+</div>
                  <p className="text-white/80 text-sm">行业平均薪资在7K+，对于具备营养配餐经验和健康管理技能的应聘者，薪资水平可高达8K-12K</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-fresh-green-500/20 to-vitality-orange-500/20 border border-fresh-green-500/30">
                  <div className="text-2xl font-bold text-fresh-green-500 mb-2">跨行业机会</div>
                  <p className="text-white/80 text-sm">健康管理技能不仅限于食品行业，学员可在互联网、医疗、保险等多个行业找到适合自己的岗位</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 数字人播放器4 - 关于岗位你该知道的是 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIZ3eHyiNQ.mov"
            position={{ top: 200, right: '-16rem' }}
          />
        </motion.section>

        {/* 第四部分：通过学习，你能学到什么 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-fresh-green-500 to-vitality-orange-500 rounded-2xl mr-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">通过学习，你能学到什么？</h2>
              <p className="text-vitality-orange-500 mt-2">掌握营养健康管理核心技能，轻松应对行业挑战，成就职业高薪之路</p>
            </div>
          </motion.div>

          {/* 主内容区 - 课程大纲和技能 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* 课程核心内容卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fresh-green-500/10 to-cyan-600/10 p-8 border border-fresh-green-500/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（一）单元课程目录.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fresh-green-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-fresh-green-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-fresh-green-500">核心课程内容</h3>
                </div>

                <div className="space-y-4">
                  {/* 营养健康管理基础 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-fresh-green-500 font-semibold text-base">营养健康管理基础</span>
                    <div className="text-white/80 text-sm mt-2 space-y-1">
                      <p>• 从科学饮食到健康管理的核心技能（2节）</p>
                      <p>• 个性化营养干预设计：量体裁衣，定制专属健康餐单（3节）</p>
                      <p>• 慢性病营养干预方法：科学干预，助力健康管理（2节）</p>
                      <p>• 让健康成为美味，食谱设计从此不再枯燥（1节）</p>
                    </div>
                  </div>

                  {/* 营养配餐与健康管理 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-fresh-green-500 font-semibold text-base">营养配餐与健康管理</span>
                    <div className="text-white/80 text-sm mt-2 space-y-1">
                      <p>• 企业健康餐方案设计方案（1节）</p>
                      <p>• 营养餐标准化与个性化定制（2节）</p>
                      <p>• 应对银发经济，掌握适老化营养管理技能（1节）</p>
                      <p>• 从健康食品到市场推广，打造企业营养品牌（1节）</p>
                    </div>
                  </div>

                  {/* 健康数据分析与优化 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-fresh-green-500 font-semibold text-base">健康数据分析与优化</span>
                    <div className="text-white/80 text-sm mt-2 space-y-1">
                      <p>• 用数据解锁健康管理新局面（1节）</p>
                      <p>• 营养效果评估与反馈机制，提高客户满意度（2节）</p>
                      <p>• AI助力精准分析健康数据（1节）</p>
                    </div>
                  </div>

                  {/* 营养管理案例与企业应用 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-fresh-green-500 font-semibold text-base">营养管理案例与企业应用</span>
                    <div className="text-white/80 text-sm mt-2 space-y-1">
                      <p>• 企业营养管理服务案例分析（2节）</p>
                      <p>• 从理论到实践，个性化健康方案的成功经验（1节）</p>
                      <p>• 解析热门营养产品的研发与市场应用（1节）</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 实战技能卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-vitality-orange-500/10 to-fresh-green-500/10 p-8 border border-vitality-orange-500/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（二）本节课课程内容.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-vitality-orange-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-fresh-green-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-fresh-green-500">本单元课程重点</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-fresh-green-500" />
                      <span className="text-fresh-green-500 font-semibold text-base">学习营养学原理及其在现代健康管理中的应用</span>
                    </div>
                    <p className="text-white/80 text-sm">掌握营养学基础知识，了解如何将理论应用到实际健康管理工作中</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-fresh-green-500" />
                      <span className="text-fresh-green-500 font-semibold text-base">为企业员工或客户设计定制化的健康餐食方案</span>
                    </div>
                    <p className="text-white/80 text-sm">学会根据不同需求设计个性化营养配餐方案</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-fresh-green-500" />
                      <span className="text-fresh-green-500 font-semibold text-base">运用AI和数据分析技术，优化健康管理与营养方案</span>
                    </div>
                    <p className="text-white/80 text-sm">掌握现代化工具和技术，提升工作效率和专业水平</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="w-5 h-5 text-fresh-green-500" />
                      <span className="text-fresh-green-500 font-semibold text-base">将营养干预与企业健康管理实际需求相结合</span>
                    </div>
                    <p className="text-white/80 text-sm">学习如何将营养干预与企业健康管理实际需求相结合，提供可行的解决方案</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 案例分析和工具应用 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 涉及到的大型案例 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fresh-green-500/10 to-vitality-orange-500/10 p-8 border border-fresh-green-500/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（三）涉及到的大型案例.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fresh-green-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-fresh-green-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-fresh-green-500">涉及到的大型案例</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-fresh-green-500" />
                      <span className="text-fresh-green-500 font-semibold text-base">中邮科技员工健康餐定制方案</span>
                    </div>
                    <p className="text-white/80 text-sm">为企业员工设计定制化营养配餐方案，提升员工健康水平</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-fresh-green-500" />
                      <span className="text-fresh-green-500 font-semibold text-base">顺丰健康营养服务项目案例</span>
                    </div>
                    <p className="text-white/80 text-sm">大型企业健康管理服务的实施流程与效果评估</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 涉及到 AI 工具教学 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fresh-green-500/10 to-vitality-orange-500/10 p-8 border border-fresh-green-500/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/四、通过学习，你能学到什么？-（四）涉及到AI工具教学.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fresh-green-500/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-fresh-green-500 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-fresh-green-500">涉及到 AI 工具教学</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <FoodAI className="w-5 h-5 text-fresh-green-500" />
                      <span className="text-fresh-green-500 font-semibold text-base">FoodAI</span>
                    </div>
                    <p className="text-white/90 text-sm mt-1">通过AI分析用户的健康数据，自动生成个性化的饮食方案和健康食谱</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-fresh-green-500" />
                      <span className="text-fresh-green-500 font-semibold text-base">NutriSystem AI</span>
                    </div>
                    <p className="text-white/90 text-sm mt-1">利用AI分析用户的健康需求与生活习惯，自动生成符合营养学标准的饮食方案</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-fresh-green-500" />
                      <span className="text-fresh-green-500 font-semibold text-base">EatLove</span>
                    </div>
                    <p className="text-white/90 text-sm mt-1">基于用户的健康需求与偏好，自动优化菜单内容，生成健康饮食方案</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-fresh-green-500" />
                      <span className="text-fresh-green-500 font-semibold text-base">HealthifyMe</span>
                    </div>
                    <p className="text-white/90 text-sm mt-1">通过AI分析和跟踪用户的饮食习惯、卡路里消耗等数据，提供个性化的健康饮食推荐</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 数字人播放器5 - 通过学习你能学到什么 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIZ3eHOWo5.mov"
            position={{ top: 300, right: '-16rem' }}
          />
        </motion.section>

        {/* 第五部分：岗位晋升路径 */}
        <motion.section className="mb-20 relative" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div
            className="bg-gradient-to-r from-fresh-green-500/10 to-vitality-orange-500/10 rounded-3xl p-8 border border-fresh-green-500/20"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-10 h-10 text-fresh-green-500" />
              <h2 className="text-3xl font-bold text-white">岗位晋升路径</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gradient-to-br from-fresh-green-500/10 to-cyan-500/10 rounded-2xl p-6 border border-fresh-green-500/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-fresh-green-500 mb-2">初级职位</div>
                <div className="text-3xl font-bold text-white mb-4">7K-10K</div>
                <div className="text-vitality-orange-500 text-sm">
                  <div>营养师助理</div>
                  <div>健康餐配送员</div>
                  <div>客户服务专员</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-vitality-orange-500/10 to-lemon-yellow-500/10 rounded-2xl p-6 border border-vitality-orange-500/20 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-vitality-orange-500 mb-2">中级职位</div>
                <div className="text-3xl font-bold text-white mb-4">10K-15K</div>
                <div className="text-lemon-yellow-500 text-sm">
                  <div>营养配餐专员</div>
                  <div>健康管理专员</div>
                  <div>数据分析师</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-fresh-green-500/10 to-mint-green-500/10 rounded-2xl p-6 border border-fresh-green-500/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-fresh-green-500 mb-2">高级职位</div>
                <div className="text-3xl font-bold text-white mb-4">15K+</div>
                <div className="text-vitality-orange-500 text-sm">
                  <div>营养师/健康管理顾问</div>
                  <div>企业健康餐主管</div>
                  <div>营养效果评估师</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </motion.section>

        {/* 职业发展页面标题 - 带动画 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-fresh-green-500 to-vitality-orange-500 rounded-full mb-6 shadow-lg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2
            }}
            whileHover={{
              scale: 1.1,
              rotate: 360,
              boxShadow: "0 15px 40px rgba(34, 197, 94, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-5xl font-bold text-food-dark-100 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            职业发展
            <motion.span
              className="block text-2xl font-normal text-vitality-orange-500 mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              轻食行业核心岗位技能要求
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl text-food-dark-100/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            掌握轻食行业四大核心岗位的专业技能，培养产品研发、品牌策划、运营管理和店铺经营能力，开启轻食行业职业发展之路。
          </motion.p>
        </motion.div>

        {/* 职业发展路径 */}
        <motion.section
          className="mb-20 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            四大核心岗位
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {[
              {
                title: '轻食产品研发师',
                subtitle: 'Light Food Product Developer',
                skills: [
                  { name: '轻食行业战略洞察', desc: '分析行业发展趋势与商业模式，制定前瞻性产品研发战略。', highlight: true },
                  { name: '爆款产品设计方法论', desc: '运用市场数据驱动设计逻辑，打造符合消费趋势的创新型轻食。' },
                  { name: '饮品与小食创新开发', desc: '建立多品类研发体系，通过风味组合创新提升产品线竞争力。' },
                  { name: '科学配方架构设计', desc: '平衡营养成分与工艺参数，构建安全稳定的配方体系。' },
                  { name: '生产工艺质量管控', desc: '监控生产关键控制点，实现产品标准化与品质稳定性。' },
                  { name: '产品人群定位与风险规避', desc: '基于人群生理特征制定适用方案，规避健康风险隐患。' },
                  { name: '功能性成分应用验证', desc: '通过实验数据验证成分实际功效，支撑产品宣称的科学依据。' }
                ],
                color: 'from-fresh-green-500 to-mint-green-500',
                icon: '🌿'
              },
              {
                title: '品牌策划师',
                subtitle: 'Brand Strategy Planner',
                skills: [
                  { name: '品牌全案战略设计', desc: '整合市场定位与竞争策略，构建差异化品牌发展蓝图。' },
                  { name: '品牌视觉识别系统构建', desc: '开发符合品牌调性的视觉符号体系，强化消费者认知度。' },
                  { name: '轻食行业商业趋势应用', desc: '转化行业洞察为品牌机会点，指导战略决策实施。', highlight: true },
                  { name: '成分科学叙事开发', desc: '挖掘成分科技内涵，构建具有传播力的产品故事体系。' },
                  { name: '品牌导向型配方设计', desc: '将品牌理念融入配方开发，实现产品力与品牌价值统一。' },
                  { name: '生产流程品牌价值转化', desc: '提炼生产工艺中的品质亮点，转化为品牌信任状。' },
                  { name: '目标客群精准定位策略', desc: '建立人群画像与场景矩阵，指导品牌沟通策略制定。' },
                  { name: '品牌安全合规保障', desc: '预判法规风险点，建立品牌安全防护机制。' }
                ],
                color: 'from-vitality-orange-500 to-lemon-yellow-500',
                icon: '🎨'
              },
              {
                title: '品牌运营师',
                subtitle: 'Brand Operations Manager',
                skills: [
                  { name: '私域流量生态运营', desc: '构建用户分层运营模型，实现私域用户生命周期价值最大化。' },
                  { name: '短视频全域引流', desc: '设计平台定制化内容策略，打通公域到私域的流量转化路径。' },
                  { name: '直播分销体系搭建', desc: '整合达人矩阵与分销机制，建立品效合一的直播销售网络。' },
                  { name: '本地化平台深度运营', desc: '策划区域场景化营销活动，提升品牌地域渗透率。' },
                  { name: '智慧门店数字化系统', desc: '部署IoT设备与数据中台，驱动门店运营决策智能化。' },
                  { name: '品牌视觉营销应用', desc: '统一多触点视觉输出，强化消费者品牌记忆度。' },
                  { name: '行业趋势运营决策', desc: '基于行业动向动态调整运营策略，保持市场敏锐度。', highlight: true },
                  { name: '产品科学背书运营', desc: '将成分科技转化为消费沟通语言，增强产品信任感。' }
                ],
                color: 'from-natural-blue-500 to-fresh-green-500',
                icon: '📱'
              },
              {
                title: '店长',
                subtitle: 'Store Manager',
                skills: [
                  { name: '轻食行业趋势与商业模式分析', desc: '深入了解轻食行业的发展趋势和商业模式，为店铺运营提供战略指导。', highlight: true },
                  { name: '私域客户忠诚度管理', desc: '建立会员分级服务体系，提升客户复购率与黏性。' },
                  { name: '短视频本地化引流', desc: '制作地域特色内容，吸引周边3公里目标客群到店。' },
                  { name: '门店直播销售转化', desc: '策划门店场景化直播，实现线上流量向线下销量的转化。' },
                  { name: '区域平台客群拓展', desc: '运营本地生活平台店铺，精准获取区域消费人群。' },
                  { name: '门店视觉系统落地', desc: '确保终端陈列与品牌标准高度统一，提升消费体验。' },
                  { name: '店铺运营战略执行', desc: '解码总部战略为门店执行方案，保障运营目标达成。' }
                ],
                color: 'from-soft-pink-500 to-vitality-orange-500',
                icon: '🏪'
              }
            ].map((career, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
              >
                {/* 主卡片容器 */}
                <motion.div
                  className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-food-dark-100/20 rounded-3xl overflow-hidden p-8 h-full"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 30px 60px rgba(34, 197, 94, 0.3)",
                    borderColor: "rgba(34, 197, 94, 0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* 动态背景光效 */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br ${career.color} opacity-20 blur-3xl`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* 顶部装饰条 */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${career.color}`}></div>

                  {/* 岗位头部信息 */}
                  <div className="relative z-10 mb-8">
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${career.color} rounded-2xl shadow-2xl mb-4`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-4xl">{career.icon}</span>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-food-dark-100 to-food-dark-100/80 mb-2">
                      {career.title}
                    </h3>
                    <p className="text-vitality-orange-500 font-medium tracking-wider uppercase text-sm">
                      {career.subtitle}
                    </p>
                  </div>

                  {/* 技能展示区域 - 显示所有技能 */}
                  <div className="relative z-10 space-y-3">
                    {career.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="relative"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6 + index * 0.2 + skillIndex * 0.1, duration: 0.4 }}
                      >
                        <motion.div
                          className={`p-4 rounded-2xl transition-all duration-300 ${
                            skill.highlight
                              ? 'bg-gradient-to-r from-fresh-green-500/20 to-mint-green-500/10 border border-fresh-green-400/30'
                              : 'bg-white/5 border border-food-dark-100/10 hover:bg-white/10'
                          }`}
                          whileHover={{
                            x: 10,
                            boxShadow: skill.highlight
                              ? "0 10px 30px rgba(34, 197, 94, 0.2)"
                              : "0 10px 30px rgba(0, 0, 0, 0.1)"
                          }}
                        >
                          <div className="flex items-center gap-3">
                            {skill.highlight ? (
                              <motion.div
                                className="w-8 h-8 bg-gradient-to-br from-fresh-green-500 to-mint-green-500 rounded-full flex items-center justify-center flex-shrink-0"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              >
                                <CheckCircle className="w-5 h-5 text-white" />
                              </motion.div>
                            ) : (
                              <div className="w-2 h-2 bg-vitality-orange-500 rounded-full flex-shrink-0 animate-pulse"></div>
                            )}
                            <div className="flex-1">
                              <h4 className="font-bold text-food-dark-100 text-sm mb-1">
                                {skill.name}
                              </h4>
                              <p className="text-xs text-food-dark-100/70 leading-relaxed">
                                {skill.desc}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* 角标装饰 */}
                  <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${career.color} opacity-10 rounded-tl-full`}></div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* 数字人播放器6 - 职业发展 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYIZ3eHn88h.mov"
            position={{ top: 200, right: '-16rem' }}
          />
        </motion.section>

        {/* 学习路径指引 - 弹簧动画 */}
        <motion.div 
          className="cyber-card rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 30px 60px -12px rgba(34, 197, 94, 0.3)",
            borderColor: "rgba(34, 197, 94, 0.3)"
          }}
        >
          {/* 背景动画粒子效果 */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.h2 
            className="text-3xl font-bold text-white mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            开始你的轻食行业学习之旅
          </motion.h2>
          
          <motion.p 
            className="text-xl text-food-dark-100/80 mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            按照六大板块系统学习，从课程概述到实战测试，循序渐进掌握轻食行业经营精髓。
          </motion.p>
          
          <motion.div 
            className="flex justify-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 30px rgba(34, 197, 94, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/objectives"
                className="cyber-button rounded-xl font-semibold transition-all duration-300 shadow-lg inline-block bg-gradient-to-r from-fresh-green-500 to-vitality-orange-500 hover:from-fresh-green-600 hover:to-vitality-orange-600"
              >
                查看学习目标
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;