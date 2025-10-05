import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, Target, BarChart, CheckCircle, ArrowRight, Package } from '../../components/Icons';
import CourseNavigation from '../../components/CourseNavigation';

const IndustryOverviewPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('definition');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 主要内容区域数据 - 按照课程讲义详细内容
  const sections = [
    {
      id: 'definition',
      title: '轻食行业定义与发展历程',
      icon: TrendingUp,
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'bg-gradient-to-br from-emerald-500/20 to-teal-600/20',
      content: {
        subtitle: '从欧美贵族下午茶到现代健康餐饮的华丽转身',
        description: '轻食行业是指以提供低热量、低脂肪、高纤维、高蛋白等为核心特征的餐饮业态。其起源与演变有着清晰的脉络。',
        theory: '轻食行业从传统的欧美贵族文化逐步演变为现代健康餐饮业态，体现了消费者对健康生活方式的追求。',
        details: {
          origin: {
            title: '欧美起源',
            content: '最初欧美贵族的下午茶是精致的甜点、小蛋糕等，主要是一种休闲社交的方式，注重食品的精致外观和口感享受。随着全球健康理念的逐步传播，现代轻食逐渐从这种传统形式中演变而来，更加聚焦于食材的天然属性与营养均衡。',
            example: '欧美一些健康餐厅开始提供由新鲜蔬菜、全麦面包、优质蛋白质（如烤鸡胸肉）搭配而成的餐食，这类餐食热量适中，营养搭配合理，成为现代轻食的典型代表。'
          },
          domestic: {
            title: '国内发展',
            content: '近年来在中国市场兴起与扩展。随着国内经济的快速发展和人们生活节奏的加快，越来越多的人开始关注健康饮食。以一线城市为例，像北京、上海等，涌现出大量的轻食店。',
            example: '以"某家轻食"品牌为例，该品牌最初在上海开设第一家门店，主打健康、便捷的轻食理念。通过社交媒体宣传和线下体验，迅速吸引了注重健康的白领群体。随后，该品牌逐步向其他一线城市扩张，并向二线城市渗透，如成都、杭州等，满足了不同地区消费者对健康轻食的需求，从而推动了轻食行业在国内的广泛扩展。'
          }
        }
      }
    },
    {
      id: 'market',
      title: '轻食消费趋势与市场规模分析',
      icon: BarChart,
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-indigo-600/20',
      content: {
        subtitle: '2023年国内代餐轻食市场规模超过1600亿元',
        description: '这一庞大的市场规模彰显了轻食行业在国内的蓬勃发展态势。市场规模快速增长的背后有诸多驱动因素。',
        theory: '轻食市场的快速增长体现了消费升级趋势和健康理念的普及，预示着巨大的发展潜力。',
        details: {
          currentScale: {
            title: '当前市场规模',
            content: '2023年国内代餐轻食市场规模超过1600亿元，这一庞大的市场规模彰显了轻食行业在国内的蓬勃发展态势。',
            drivers: [
              {
                factor: '健康意识提升',
                description: '消费者健康意识的大幅提升是关键。随着人们对自身健康关注度的提高，认识到合理饮食对身体健康的重要性，愿意为健康的食品付费。'
              },
              {
                factor: '生活节奏加快',
                description: '现代生活节奏加快，很多人没有充足时间准备复杂的餐食，代餐轻食的便捷性成为吸引消费者的重要因素。'
              }
            ],
            example: '在电商平台上，某知名代餐轻食品牌的月销售额可达数千万元，其产品通过线上销售，快速送达消费者手中，满足了忙碌人群的饮食需求。'
          },
          futureGrowth: {
            title: '未来增长预期',
            content: '预计未来五年年均增速达30%，这一增长预期基于多方面因素。',
            factors: [
              {
                aspect: '理念普及',
                description: '健康理念将进一步普及，更多的消费者会将轻食纳入日常饮食选择。'
              },
              {
                aspect: '供应链完善',
                description: '轻食行业的供应链会不断完善，产品种类将更加丰富，能够满足不同消费者的多样化需求。'
              }
            ],
            example: '未来会有更多针对特定人群（如健身人群、糖尿病患者等）的细分轻食产品推出，进一步拓展市场空间，推动市场规模持续扩大。'
          }
        }
      }
    },
    {
      id: 'consumers',
      title: '消费者画像与需求分析',
      icon: Users,
      color: 'from-purple-400 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-pink-600/20',
      content: {
        subtitle: '女性、白领、新一线城市居民构成核心消费群体',
        description: '精准洞察消费者需求，为产品定位与营销策略提供重要依据。',
        theory: '深入理解消费者画像与需求特征，是制定精准营销策略和产品定位的基础。',
        details: {
          mainGroups: {
            title: '主要消费群体',
            groups: [
              {
                type: '女性群体',
                description: '女性是轻食的主要消费群体之一。这是因为女性普遍更加关注身材管理，希望通过合理饮食来保持良好的体型，轻食的低热量、低脂肪特性正好契合她们的需求。',
                characteristics: ['关注身材管理', '注重健康饮食', '占比超65%']
              },
              {
                type: '白领群体',
                description: '白领群体也是重要的消费群体，他们工作繁忙，经常需要在外就餐，而轻食的便捷性和健康性正好符合他们的需求。',
                characteristics: ['工作繁忙', '需要便捷用餐', '注重健康'],
                example: '很多白领在工作日会选择通过外卖平台订购轻食，既节省时间又能保证饮食健康。'
              },
              {
                type: '新一线城市居民',
                description: '新一线城市居民是因为新一线城市经济发达，消费观念先进，对健康生活方式的追求更为强烈。',
                characteristics: ['消费观念先进', '经济发达', '追求健康生活'],
                example: '以成都为例，当地消费者对轻食的接受度很高，众多轻食店在成都迅速开设并受到欢迎。'
              }
            ]
          },
          preferences: {
            title: '消费偏好分析',
            content: '消费者高度关注低糖、低脂、高纤维、高蛋白等健康特性。',
            categories: [
              {
                feature: '低糖',
                description: '很多消费者在选择饮品和甜点时会倾向于低糖的选项，避免摄入过多的糖分导致肥胖、糖尿病等健康问题。',
                example: '某轻食品牌推出的低糖水果沙拉，选用低糖水果搭配酸奶，受到很多注重健康的消费者喜爱。'
              },
              {
                feature: '低脂',
                description: '消费者在选择肉类食材时，会更倾向于鸡胸肉、鱼肉等低脂的蛋白质来源。',
                example: '某轻食店的烤鸡胸肉套餐，因低脂高蛋白受到健身人群的青睐。'
              },
              {
                feature: '高纤维',
                description: '体现在对蔬菜、全麦食品等富含纤维食物的喜爱，这些食物有助于肠道健康。',
                example: '包含大量蔬菜的轻食套餐很受欢迎。'
              },
              {
                feature: '高蛋白',
                description: '健身人群会特别注重摄入高蛋白的食物来补充肌肉所需营养。',
                example: '轻食中的鸡胸肉、豆类等都是高蛋白的良好来源，某健身人士常订购的轻食套餐就以高蛋白的鸡胸肉和豆类为主要食材。'
              }
            ]
          }
        }
      }
    }
  ];

  // 统计数据 - 基于课程讲义
  const stats = [
    {
      icon: Package,
      number: '1600+',
      unit: '亿元',
      label: '2023年市场规模',
      color: 'from-emerald-400 to-teal-500',
      description: '国内代餐轻食市场规模'
    },
    {
      icon: TrendingUp,
      number: '30',
      unit: '%',
      label: '年均增速预期',
      color: 'from-blue-400 to-indigo-500',
      description: '未来五年年均增长率'
    },
    {
      icon: Users,
      number: '65',
      unit: '%',
      label: '女性消费占比',
      color: 'from-purple-400 to-pink-500',
      description: '女性群体消费比例'
    },
    {
      icon: Target,
      number: '4',
      unit: '大',
      label: '核心健康特性',
      color: 'from-rose-400 to-red-500',
      description: '低糖低脂高纤维高蛋白'
    }
  ];

  // 发展里程碑
  const milestones = [
    {
      year: '起源期',
      title: '欧美贵族下午茶',
      description: '精致甜点小蛋糕，休闲社交方式，注重外观与口感',
      icon: '🏛️',
      color: 'from-amber-400 to-orange-500'
    },
    {
      year: '演变期',
      title: '健康理念传播',
      description: '聚焦食材天然属性与营养均衡，现代轻食概念形成',
      icon: '🌱',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      year: '兴起期',
      title: '中国市场扩展',
      description: '一线城市快速发展，"某家轻食"品牌成功案例',
      icon: '🚀',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      year: '成熟期',
      title: '市场规模化发展',
      description: '1600亿市场规模，年均30%增速，产业化运营',
      icon: '⭐',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 动态背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* 页面标题区域 */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 mb-8 relative"
              style={{
                background: 'linear-gradient(135deg, #10B981, #059669, #047857)',
                borderRadius: '50%'
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* 中心对称的装饰环 */}
              <motion.div
                className="absolute inset-2 border-2 border-white/20 rounded-full"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* 对称的装饰点 - 上下 */}
              <motion.div
                className="absolute top-1 left-1/2 w-2 h-2 bg-emerald-300/60 rounded-full"
                style={{ transform: 'translateX(-50%)' }}
                animate={{ 
                  scale: [1, 1.5, 1], 
                  opacity: [0.6, 1, 0.6] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1 left-1/2 w-2 h-2 bg-emerald-300/60 rounded-full"
                style={{ transform: 'translateX(-50%)' }}
                animate={{ 
                  scale: [1, 1.5, 1], 
                  opacity: [0.6, 1, 0.6] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              {/* 对称的装饰点 - 左右 */}
              <motion.div
                className="absolute left-1 top-1/2 w-2 h-2 bg-teal-300/60 rounded-full"
                style={{ transform: 'translateY(-50%)' }}
                animate={{ 
                  scale: [1, 1.5, 1], 
                  opacity: [0.6, 1, 0.6] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute right-1 top-1/2 w-2 h-2 bg-teal-300/60 rounded-full"
                style={{ transform: 'translateY(-50%)' }}
                animate={{ 
                  scale: [1, 1.5, 1], 
                  opacity: [0.6, 1, 0.6] 
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />

              {/* 中心图标 */}
              <TrendingUp className="w-12 h-12 text-white z-10 relative" />
              
              {/* 中心对称的脉动光环 */}
              <motion.div
                className="absolute inset-0 rounded-full bg-white/10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                background: 'linear-gradient(135deg, #10B981, #3B82F6, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              第一章：轻食行业全景概览
            </motion.h1>
            
            <motion.p
              className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              全面展现轻食行业全景，了解市场规模、发展态势与消费者特征。学会分析行业竞争状况，把握轻食行业整体框架。
            </motion.p>
          </motion.div>

          {/* 统计数据展示 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">
              行业核心数据一览
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center relative overflow-hidden">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <motion.div
                      className="text-4xl font-bold text-slate-100 mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, type: "spring" }}
                    >
                      {stat.number}
                      <span className="text-2xl text-slate-300 ml-1">{stat.unit}</span>
                    </motion.div>
                    
                    <p className="text-slate-300 font-medium mb-2">{stat.label}</p>
                    <p className="text-slate-400 text-sm">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 发展历程时间线 */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">
              行业发展历程
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 h-full">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center text-2xl`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {milestone.icon}
                    </motion.div>
                    
                    <div className="text-center">
                      <div className="text-sm font-bold text-emerald-400 bg-emerald-400/20 px-3 py-1 rounded-full mb-3 inline-block">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-bold text-slate-100 mb-3">{milestone.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 主要内容区域 */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center text-slate-100 mb-12">
              深度解析核心板块
            </h2>
            
            {/* 导航标签 */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <section.icon className="w-5 h-5 inline mr-2" />
                  {section.title}
                </motion.button>
              ))}
            </div>

            {/* 内容展示区域 */}
            <AnimatePresence mode="wait">
              {sections.map((section) => (
                activeSection === section.id && (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className={`${section.bgColor} rounded-3xl p-8 md:p-12 backdrop-blur-lg border border-white/20`}
                  >
                    <div className="text-center mb-8">
                      <motion.div
                        className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center`}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <section.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
                        {section.content.subtitle}
                      </h3>
                      
                      <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
                        {section.content.description}
                      </p>

                      <div className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-400 mb-2">理论基础</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {section.content.theory}
                        </p>
                      </div>
                    </div>

                    {/* 详细内容展示 */}
                    <div className="space-y-8">
                      {Object.entries(section.content.details).map(([key, detail]: [string, any], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
                        >
                          <h4 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            {detail.title}
                          </h4>
                          
                          <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            {detail.content}
                          </p>

                          {detail.example && (
                            <div className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-4 mb-4">
                              <h5 className="font-semibold text-amber-400 mb-2">实际案例</h5>
                              <p className="text-slate-300 text-sm leading-relaxed">
                                {detail.example}
                              </p>
                            </div>
                          )}

                          {detail.drivers && (
                            <div className="space-y-3">
                              {detail.drivers.map((driver: any, idx: number) => (
                                <div key={idx} className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-4">
                                  <h5 className="font-semibold text-emerald-400 mb-2">{driver.factor}</h5>
                                  <p className="text-slate-300 text-sm leading-relaxed">{driver.description}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {detail.factors && (
                            <div className="space-y-3">
                              {detail.factors.map((factor: any, idx: number) => (
                                <div key={idx} className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-4">
                                  <h5 className="font-semibold text-blue-400 mb-2">{factor.aspect}</h5>
                                  <p className="text-slate-300 text-sm leading-relaxed">{factor.description}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {detail.groups && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {detail.groups.map((group: any, idx: number) => (
                                <div key={idx} className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-4">
                                  <h5 className="font-semibold text-purple-400 mb-2">{group.type}</h5>
                                  <p className="text-slate-300 text-sm leading-relaxed mb-3">{group.description}</p>
                                  <div className="space-y-1">
                                    {group.characteristics.map((char: string, charIdx: number) => (
                                      <div key={charIdx} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                        <span className="text-slate-400 text-xs">{char}</span>
                                      </div>
                                    ))}
                                  </div>
                                  {group.example && (
                                    <div className="mt-3 p-2 bg-slate-700/50 rounded text-xs text-slate-300">
                                      <strong>案例：</strong>{group.example}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {detail.categories && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {detail.categories.map((category: any, idx: number) => (
                                <div key={idx} className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-4">
                                  <h5 className="font-semibold text-rose-400 mb-2">{category.feature}</h5>
                                  <p className="text-slate-300 text-sm leading-relaxed mb-2">{category.description}</p>
                                  <div className="p-2 bg-slate-700/50 rounded text-xs text-slate-300">
                                    <strong>案例：</strong>{category.example}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </motion.section>

          {/* 行动号召区域 */}
          <motion.section
            className="mt-20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-slate-100 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.6 }}
              >
                开启轻食行业探索之旅
              </motion.h2>
              
              <motion.p
                className="text-lg text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.6, duration: 0.6 }}
              >
                掌握行业全景，洞察发展趋势，了解消费者特征，为您的轻食事业奠定坚实的理论基础和实践指导
              </motion.p>
              
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.8, duration: 0.6 }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">行业认知</h3>
                  <p className="text-slate-300 text-sm">从贵族文化到大众消费的演进历程，理解轻食行业的本质特征</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <BarChart className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">市场洞察</h3>
                  <p className="text-slate-300 text-sm">1600亿市场规模及30%年增长率，把握巨大商业机遇</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">消费者理解</h3>
                  <p className="text-slate-300 text-sm">女性、白领、新一线城市居民的需求特征与消费偏好</p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* 课程导航区域 */}
          <motion.section
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            <CourseNavigation />
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default IndustryOverviewPage;