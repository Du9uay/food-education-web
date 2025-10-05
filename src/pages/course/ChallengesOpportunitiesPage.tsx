import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Warning, TrendingUp, Zap, Target, Shield, RefreshCw, PlayCircle, CheckCircle } from '../../components/Icons';
import CourseNavigation from '../../components/CourseNavigation';

const ChallengesOpportunitiesPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('supply-chain');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 课程内容数据 - 严格按照课程讲义结构
  const sections = [
    {
      id: 'supply-chain',
      title: '原材料采购与供应链管理的挑战',
      icon: '🚚',
      color: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-500/20 to-orange-500/20',
      content: {
        theory: '供应链管理涵盖采购、运输、仓储等多个紧密相连的环节，任何一个环节出现纰漏都可能引发原材料品质的波动。',
        description: '轻食行业中，原材料采购与供应链管理是维系其正常运营的关键环节，然而却面临着诸多严峻挑战。',
        challenges: [
          {
            title: '原材料品质不稳定',
            icon: '📊',
            content: '轻食所依赖的新鲜蔬菜、水果、肉类等食材，其品质受多种因素制约。不同产地、不同季节的蔬菜在口感、营养成分上存在差异。',
            example: '某轻食品牌在春季采购菠菜时，由于南方产地的菠菜和北方产地的菠菜生长周期不同，导致采购的菠菜有的纤维较粗，有的水分含量过高，使得用其制作的菠菜沙拉口感参差不齐，直接影响消费者的食用体验。'
          },
          {
            title: '供应链响应速度迟缓',
            icon: '⚡',
            content: '若供应链响应速度迟缓，无法依据市场需求及时调整原材料采购量，便极易出现食材积压或短缺的状况。',
            example: '当市场对富含Omega-3脂肪酸的亚麻籽轻食需求突然大幅增加时，供应链若不能迅速调配足够的优质亚麻籽食材，不仅会错失抢占市场的先机，还可能导致客户因无法及时获取产品而流失。'
          }
        ]
      }
    },
    {
      id: 'market-competition',
      title: '市场竞争与品牌建设的难点',
      icon: '⚔️',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      content: {
        theory: '市场竞争的核心在于精准满足消费者独特的需求，而差异化竞争策略包含产品差异化、服务差异化等多种形式。',
        description: '在竞争激烈的轻食市场里，众多品牌角逐，企业需凭借差异化的产品与服务方能脱颖而出。',
        sections: [
          {
            title: '市场竞争',
            icon: '🎯',
            content: '就产品差异化来说，有的轻食品牌致力于研发具有特色风味的轻食。',
            examples: [
              '某轻食品牌推出地中海风味的轻食套餐，该套餐包含橄榄油、鹰嘴豆等极具地中海特色的食材，与普通轻食品牌的产品形成明显区别。',
              '某品牌融合亚洲风味，将日式寿司的元素巧妙融入轻食搭配中，推出了独具一格的日式轻食套餐，成功吸引了喜爱多元风味的消费者，从而在激烈的市场竞争中占据了一定的份额。'
            ]
          },
          {
            title: '品牌建设',
            icon: '🏗️',
            content: '品牌建设需通过精准的品牌定位、有效的营销策略以及良好的用户口碑来构建强有力的品牌形象。',
            strategies: [
              {
                name: '品牌定位',
                description: '清晰锁定目标受众',
                example: '部分轻食品牌将自身定位为针对健身人群的专业轻食，着重强调食材的高蛋白、低脂肪等特性，精准地瞄准了健身爱好者这一特定群体。'
              },
              {
                name: '营销策略',
                description: '社交媒体营销是关键手段',
                example: '某轻食品牌通过在小红书、抖音等热门社交媒体平台发布精美的轻食制作视频、用户打卡分享等内容，广泛吸引潜在消费者的关注。'
              },
              {
                name: '用户口碑',
                description: '良好的用户口碑能够带来自发的传播效应',
                example: '一家轻食店，由于提供了优质的食材和贴心周到的服务，顾客在社交媒体上积极主动地进行推荐，使得该品牌的知名度迅速得以提升。'
              }
            ]
          }
        ]
      }
    },
    {
      id: 'consumer-opportunities',
      title: '消费者需求变化带来的机遇',
      icon: '💚',
      color: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/20 to-teal-500/20',
      content: {
        theory: '健康饮食已成为一种社会潮流，消费者愈发关注食材的来源、营养成分等方面。',
        description: '随着消费者健康意识的日益增强，对轻食的需求发生了显著变化，为轻食行业带来了丰富的市场机遇。',
        sections: [
          {
            title: '需求变化',
            icon: '📈',
            content: '越来越多的人开始留意食品中的添加剂含量，更倾向于选择天然、无添加的轻食产品。',
            examples: [
              '消费者在选择轻食时，会仔细查看食材的营养标签，密切关注卡路里、膳食纤维、维生素等含量。',
              '众多上班族为了维持健康状态，会把轻食当作工作餐来选择，他们不仅要求吃得饱，更注重吃得健康。'
            ]
          },
          {
            title: '市场机遇',
            icon: '🚀',
            content: '企业可通过产品创新和服务升级来把握这些机遇。',
            opportunities: [
              {
                type: '产品创新',
                description: '企业能够依据消费者对健康食材的需求，开发全新的轻食品类',
                example: '某轻食品牌推出了以昆虫蛋白为原料的轻食产品，尽管初期可能会引发一定争议，但这是基于消费者对新型健康食材探索的一种创新性尝试。'
              },
              {
                type: '服务升级',
                description: '优化配送服务是关键所在',
                example: '一些轻食品牌与专业的配送公司展开合作，采用保温包装，确保轻食在配送过程中不变质，极大地提升了消费者的用餐体验。'
              },
              {
                type: '会员制度',
                description: '通过实施会员制度等方式，进一步满足消费者个性化的需求',
                example: '为会员提供定制化的轻食套餐推荐，依据会员的健康目标（如增肌、减脂等）来调整菜品搭配，从而提高客户的忠诚度和满意度。'
              }
            ]
          }
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 动态背景 */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-slate-900/50"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* 页面标题 */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8 relative"
              style={{
                background: 'linear-gradient(135deg, #EF4444, #10B981, #8B5CF6)'
              }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Target className="w-12 h-12 text-white" />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-white/30"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                background: 'linear-gradient(135deg, #EF4444, #10B981, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              第五章：轻食行业的挑战与机遇
            </motion.h1>
            
            <motion.p
              className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              剖析轻食行业当下竞争激烈、食材成本波动等挑战，同时指出健康消费趋势带来的发展机遇
            </motion.p>
          </motion.div>

          {/* 导航标签 */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-3 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-slate-300 hover:bg-white/20'
                }`}
                whileHover={{ scale: activeSection === section.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="text-sm md:text-base">{section.title}</span>
              </motion.button>
            ))}
          </motion.div>

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
                  className={`bg-gradient-to-br ${section.bgGradient} backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12`}
                >
                  {/* 标题区域 */}
                  <div className="text-center mb-8">
                    <motion.div
                      className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center text-3xl`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      {section.icon}
                    </motion.div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                      {section.title}
                    </h2>
                    
                    <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed mb-6">
                      {section.content.description}
                    </p>

                    <div className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-400 mb-2">理论基础</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {section.content.theory}
                      </p>
                    </div>
                  </div>

                  {/* 内容区域 */}
                  <div className="space-y-8">
                    {/* 供应链管理挑战部分 */}
                    {section.id === 'supply-chain' && section.content.challenges && (
                      <div className="space-y-6">
                        {section.content.challenges.map((challenge: any, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-2xl">{challenge.icon}</span>
                              <h3 className="text-xl font-bold text-slate-100">{challenge.title}</h3>
                            </div>
                            
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                              {challenge.content}
                            </p>

                            <div className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-4">
                              <h4 className="font-semibold text-amber-400 mb-2 flex items-center gap-2">
                                <PlayCircle className="w-4 h-4" />
                                实际案例
                              </h4>
                              <p className="text-slate-300 text-sm leading-relaxed">
                                {challenge.example}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* 市场竞争与品牌建设部分 */}
                    {section.id === 'market-competition' && section.content.sections && (
                      <div className="space-y-8">
                        {section.content.sections.map((subsection: any, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-2xl">{subsection.icon}</span>
                              <h3 className="text-xl font-bold text-slate-100">{subsection.title}</h3>
                            </div>
                            
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                              {subsection.content}
                            </p>

                            {/* 市场竞争案例 */}
                            {subsection.examples && (
                              <div className="space-y-3">
                                {subsection.examples.map((example: string, idx: number) => (
                                  <div key={idx} className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-4">
                                    <h4 className="font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                                      <CheckCircle className="w-4 h-4" />
                                      成功案例 {idx + 1}
                                    </h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                      {example}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* 品牌建设策略 */}
                            {subsection.strategies && (
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                {subsection.strategies.map((strategy: any, idx: number) => (
                                  <div key={idx} className="bg-slate-800/50 border border-slate-600/30 rounded-lg p-4">
                                    <h4 className="font-semibold text-purple-400 mb-2">{strategy.name}</h4>
                                    <p className="text-slate-400 text-xs mb-2">{strategy.description}</p>
                                    <p className="text-slate-300 text-sm leading-relaxed">{strategy.example}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* 消费者需求变化机遇部分 */}
                    {section.id === 'consumer-opportunities' && section.content.sections && (
                      <div className="space-y-8">
                        {section.content.sections.map((subsection: any, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6"
                          >
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-2xl">{subsection.icon}</span>
                              <h3 className="text-xl font-bold text-slate-100">{subsection.title}</h3>
                            </div>
                            
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                              {subsection.content}
                            </p>

                            {/* 需求变化例子 */}
                            {subsection.examples && (
                              <div className="space-y-3">
                                {subsection.examples.map((example: string, idx: number) => (
                                  <div key={idx} className="bg-emerald-800/30 border border-emerald-600/30 rounded-lg p-4">
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                      {example}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* 市场机遇分类 */}
                            {subsection.opportunities && (
                              <div className="space-y-4">
                                {subsection.opportunities.map((opportunity: any, idx: number) => (
                                  <div key={idx} className="bg-emerald-800/30 border border-emerald-600/30 rounded-lg p-4">
                                    <h4 className="font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                                      <Zap className="w-4 h-4" />
                                      {opportunity.type}
                                    </h4>
                                    <p className="text-slate-400 text-xs mb-2">{opportunity.description}</p>
                                    <p className="text-slate-300 text-sm leading-relaxed">{opportunity.example}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* 学习要点总结 */}
          <motion.section
            className="mt-20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12">
              <motion.div
                className="flex items-center justify-center gap-4 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                  学习要点总结
                </h2>
              </motion.div>
              
              <motion.p
                className="text-lg text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.9, duration: 0.6 }}
              >
                学员能学到分析行业挑战的方法，掌握抓住健康需求等机遇的技巧，学会在挑战中寻找自身发展路径，提升应对轻食行业现状的能力。
              </motion.p>
              
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.1, duration: 0.6 }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <Warning className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">挑战分析能力</h3>
                  <p className="text-slate-300 text-sm">深入理解供应链管理、市场竞争、品牌建设等关键挑战，掌握问题识别与分析方法</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">机遇把握技巧</h3>
                  <p className="text-slate-300 text-sm">识别消费者需求变化带来的发展机遇，学会通过产品创新和服务升级抓住市场机会</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                  <RefreshCw className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">发展路径规划</h3>
                  <p className="text-slate-300 text-sm">在挑战中寻找发展机会，优化产品迎合市场，制定可持续的轻食业务发展策略</p>
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

export default ChallengesOpportunitiesPage;