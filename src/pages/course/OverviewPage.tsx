import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from '../../components/Icons';
import { Leaf, Business, Compliance, Branding, Growth } from '../../components/FoodIcons';
import CourseNavigation from '../../components/CourseNavigation';

const OverviewPage: React.FC = () => {
  const knowledgePoints = [
    {
      id: 1,
      title: '轻食行业全景概览',
      subtitle: 'Light Food Industry Overview',
      description: '全面展现轻食行业全景，让学员知晓轻食行业的市场规模、发展态势等。学会分析行业竞争状况，把握轻食行业整体框架，深入理解轻食行业的市场布局，为后续学习商业模式筑牢基础。',
      icon: Leaf,
      color: 'from-fresh-green-500 to-mint-green-500',
      highlights: [
        '市场规模超1600亿元',
        '未来五年年均增速30%',
        '核心消费群体特征分析',
        '行业发展态势与趋势'
      ],
      skills: [
        '掌握轻食行业定义与演进历程',
        '了解国内轻食行业兴起脉络',
        '分析女性、白领、新一线城市居民等核心消费群体',
        '建立专业的行业认知框架'
      ]
    },
    {
      id: 2,
      title: '轻食店铺商业模式解析',
      subtitle: 'Business Model Analysis',
      description: '聚焦轻食店铺商业模式，讲解如何定位目标受众，设计产品组合与定价策略，搭建营销推广渠道。学会通过线上线下结合吸引顾客，构建可持续的盈利模式。',
      icon: Business,
      color: 'from-vitality-orange-500 to-lemon-yellow-500',
      highlights: [
        '四大商业模式解析',
        '目标客群精准定位',
        '线上线下一体化运营',
        '可持续盈利模式构建'
      ],
      skills: [
        '深入剖析餐厅、电商、外卖、组合等商业模式',
        '掌握场景体验营造与多元化营销',
        '学会线上平台运营与成本控制',
        '建立多模式协同拓展盈利机制'
      ]
    },
    {
      id: 3,
      title: '轻食店铺合规经营要点',
      subtitle: 'Compliance Management',
      description: '重点讲解轻食店铺合规经营要点，学习办理营业执照、食品经营许可证等证照要求，掌握食材采购储存加工的卫生标准，确保合法合规运营。',
      icon: Compliance,
      color: 'from-natural-blue-500 to-fresh-green-500',
      highlights: [
        '《食品安全法》严格遵循',
        '食品经营许可证办理',
        '完善食品安全管理体系',
        '员工培训与规范操作'
      ],
      skills: [
        '熟知轻食店铺合法合规运营要求',
        '掌握食品原料可追溯与生产标准',
        '学会办理各类经营证照流程',
        '建立食品安全管理与自查体系'
      ]
    },
    {
      id: 4,
      title: '轻食品牌的定位与差异化策略',
      subtitle: 'Brand Positioning & Differentiation',
      description: '聚焦轻食品牌的定位与差异化策略，学习如何精准确定目标受众，剖析市场找到独特定位点，通过产品特色、服务体验等打造差异化，提升品牌竞争力。',
      icon: Branding,
      color: 'from-soft-pink-500 to-vitality-orange-500',
      highlights: [
        '精准目标受众定位',
        '独特市场定位点发现',
        '产品特色差异化设计',
        '品牌竞争力提升策略'
      ],
      skills: [
        '掌握品牌全案战略设计方法',
        '学会市场竞争分析与定位',
        '建立差异化品牌发展蓝图',
        '提升品牌在轻食市场的独特性'
      ]
    },
    {
      id: 5,
      title: '轻食行业的挑战与机遇',
      subtitle: 'Challenges & Opportunities',
      description: '剖析轻食行业竞争激烈、食材成本波动等挑战，同时指出健康消费趋势带来的发展机遇。学会在挑战中寻找发展路径，提升应对轻食行业现状的能力。',
      icon: Growth,
      color: 'from-mint-green-500 to-natural-blue-500',
      highlights: [
        '行业挑战深度剖析',
        '健康消费趋势机遇',
        '成本优化策略制定',
        '市场机遇精准把握'
      ],
      skills: [
        '分析轻食行业当前挑战与痛点',
        '识别健康消费趋势带来的机遇',
        '掌握在挑战中寻找发展路径的方法',
        '提升应对行业现状的专业能力'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
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
            <Leaf className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-bold text-slate-100 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            课程内容概述
            <motion.span 
              className="block text-2xl font-normal text-vitality-orange-500 mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              轻食行业全景与商业模式核心知识点
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            本板块涵盖轻食行业的五大核心知识领域，从行业全景概览到挑战机遇分析，
            构建完整的轻食行业认知体系，为后续深入学习奠定坚实基础。
          </motion.p>
        </motion.div>

        {/* 知识点列表 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {knowledgePoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.id}
                variants={itemVariants}
                className="cyber-card p-8 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
                  borderColor: "rgba(34, 197, 94, 0.4)"
                }}
              >
                {/* 背景装饰 */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${point.color} opacity-10 rounded-bl-full`}></div>
                
                <div className="relative z-10">
                  {/* 标题区域 */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-r ${point.color} rounded-lg flex items-center justify-center mr-6 shadow-lg`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 15,
                          boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)"
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-sm font-bold text-fresh-green-500 mr-3">
                            知识点 {point.id}
                          </span>
                          <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded-full">
                            核心模块
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-100 mb-1">
                          {point.title}
                        </h3>
                        <p className="text-vitality-orange-500 text-sm font-medium">
                          {point.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 描述 */}
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {point.description}
                  </p>

                  {/* 核心亮点与技能 */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* 核心亮点 */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-100 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-fresh-green-500 rounded-full mr-2"></span>
                        核心亮点
                      </h4>
                      <div className="space-y-3">
                        {point.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center text-slate-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + index * 0.1 + idx * 0.05, duration: 0.4 }}
                          >
                            <CheckCircle className="w-4 h-4 text-fresh-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* 学习技能 */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-100 mb-4 flex items-center">
                        <span className="w-2 h-2 bg-vitality-orange-500 rounded-full mr-2"></span>
                        学习技能
                      </h4>
                      <div className="space-y-3">
                        {point.skills.map((skill, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start text-slate-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 + idx * 0.05, duration: 0.4 }}
                          >
                            <ArrowRight className="w-4 h-4 text-vitality-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 学习建议 */}
        <motion.div 
          className="cyber-card rounded-2xl p-8 mt-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: 1.5, 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            boxShadow: "0 30px 60px rgba(0, 0, 0, 0.4)",
            borderColor: "rgba(34, 197, 94, 0.4)"
          }}
        >
          {/* 背景动画 */}
          <motion.div
            className="absolute inset-0 opacity-10"
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
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-slate-100 mb-6">
              学习建议与指引
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              建议按照知识点顺序循序渐进学习，每个模块都是后续学习的重要基础。
              理论学习与实践应用相结合，深度理解轻食行业的发展规律和商业逻辑。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="cyber-button rounded-xl font-semibold transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                开始第一个知识点
              </motion.button>
              <motion.button
                className="cyber-button-secondary rounded-xl font-semibold transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                下载学习资料
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* 课程导航区域 */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
        >
          <CourseNavigation />
        </motion.div>
      </div>
    </div>
  );
};

export default OverviewPage;