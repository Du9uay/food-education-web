import React from 'react';
import { motion } from 'framer-motion';
import { Branding, Target, Wellness, Analytics } from '../../components/FoodIcons';
import CourseNavigation from '../../components/CourseNavigation';

const BrandingStrategyPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);

  // 品牌定位策略
  const brandingStrategies = [
    {
      id: "targeting",
      title: "目标消费群体细分与定位",
      icon: Target,
      overview: "通过精确的市场细分，找到品牌的目标消费群体，并制定针对性的品牌定位策略。",
      details: [
        {
          category: "细分维度分析",
          items: [
            {
              name: "年龄维度",
              description: "青少年群体追求新奇口味体验，注重社交分享价值；中老年群体更加注重营养均衡和健康功效",
              examples: ["青少年：彩虹沙拉、网红造型轻食", "中老年：营养搭配碗、低钠健康餐"]
            },
            {
              name: "性别维度", 
              description: "女性消费者侧重身材管理与美容养颜；男性消费者注重能量补充和饱腹感",
              examples: ["女性：低卡美容沙拉、胶原蛋白轻食", "男性：高蛋白能量碗、饱腹感套餐"]
            },
            {
              name: "职业维度",
              description: "上班族需要便捷快速的用餐解决方案；自由职业者更注重环境体验和产品品质",
              examples: ["上班族：30分钟快送套餐", "自由职业：精致堂食体验"]
            }
          ]
        },
        {
          category: "精准定位案例",
          items: [
            {
              name: "都市白领定位",
              description: "定位为'都市白领的健康快捷午餐首选'，针对25-35岁办公室工作人群",
              examples: ["与外卖平台深度合作，保证30分钟内送达", "推出工作日午餐套餐优惠", "在商务区设立快取点"]
            },
            {
              name: "健身人群定位",
              description: "定位为'健身达人的营养补给站'，突出高蛋白、低脂肪的营养特点",
              examples: ["邀请知名健身教练推荐产品", "在健身房周边设置体验店", "提供营养成分详细标注"]
            }
          ]
        }
      ]
    },
    {
      id: "product",
      title: "产品组合与菜单设计差异化",
      icon: Wellness,
      overview: "通过独特的产品组合和菜单设计，形成与竞争对手的差异化优势。",
      details: [
        {
          category: "多样化产品组合",
          items: [
            {
              name: "沙拉类产品",
              description: "经典蔬菜沙拉、水果坚果沙拉等，满足不同口味偏好",
              examples: ["凯撒沙拉配烤鸡胸肉", "牛油果坚果沙拉", "时令水果沙拉"]
            },
            {
              name: "碗装类产品",
              description: "藜麦碗、鸡胸肉碗等，注重营养搭配和饱腹感",
              examples: ["藜麦三文鱼碗", "健身蛋白质碗", "素食营养碗"]
            },
            {
              name: "卷饼类产品", 
              description: "全麦卷饼包裹各种蔬菜和优质蛋白质",
              examples: ["鸡肉蔬菜卷", "金枪鱼全麦卷", "素食墨西哥卷"]
            }
          ]
        },
        {
          category: "动态菜单设计",
          items: [
            {
              name: "季节性更新",
              description: "根据不同季节的食材特点，推出应季轻食产品",
              examples: ["春季：香椿鸡蛋沙拉", "夏季：清爽水果沙拉", "秋季：坚果谷物轻食", "冬季：南瓜浓汤配轻食"]
            },
            {
              name: "节日特色",
              description: "结合传统节日和西方节日，推出主题性轻食产品",
              examples: ["情人节心形造型轻食套餐", "圣诞节姜饼风味特色轻食", "春节健康年菜轻食版"]
            }
          ]
        }
      ]
    },
    {
      id: "story",
      title: "品牌故事与文化塑造",
      icon: Analytics,
      overview: "通过深度的品牌故事和文化内涵，建立与消费者的情感连接。",
      details: [
        {
          category: "品牌故事构建",
          items: [
            {
              name: "创始人故事",
              description: "通过创始人的个人经历，传达品牌的初心和使命",
              examples: ["创始人小张因长期办公室工作导致身体亚健康，决心研发健康美味轻食", "从小区门口小摊位起步，不断改进菜品和服务", "品牌理念：用新鲜食材打造健康生活"]
            },
            {
              name: "故事价值传递",
              description: "通过故事增强品牌的情感价值和消费者认同感",
              examples: ["让消费者感受到品牌的真诚初衷", "建立情感连接和信任关系", "增强品牌的人文温度"]
            }
          ]
        },
        {
          category: "品牌文化传播",
          items: [
            {
              name: "健康文化",
              description: "坚持用新鲜无添加的食材，严格把控营养搭配",
              examples: ["食材溯源展示", "营养师专业搭配", "健康知识科普"]
            },
            {
              name: "环保责任",
              description: "承担环保责任，使用可降解餐具和包装材料",
              examples: ["店铺展示环保理念海报", "社交媒体分享环保行动", "地球日推出环保主题套餐"]
            }
          ]
        }
      ]
    },
    {
      id: "experience",
      title: "用户体验与服务质量提升",
      icon: Branding,
      overview: "通过全方位的体验优化和服务质量提升，形成品牌竞争优势。",
      details: [
        {
          category: "环境体验优化",
          items: [
            {
              name: "店铺环境设计",
              description: "简约明亮的装修风格，柔和的灯光营造舒适用餐氛围",
              examples: ["北欧简约风格装修", "绿植装饰营造自然感", "舒适的座椅和用餐区域"]
            },
            {
              name: "视觉识别系统",
              description: "统一的视觉形象和品牌识别，提升品牌认知度",
              examples: ["独特的LOGO设计", "统一的包装视觉", "品牌色彩运用"]
            }
          ]
        },
        {
          category: "服务质量提升",
          items: [
            {
              name: "专业服务培训",
              description: "员工具备专业的营养知识，能够为顾客提供专业建议",
              examples: ["营养搭配知识培训", "食材来源介绍能力", "个性化推荐服务"]
            },
            {
              name: "个性化服务",
              description: "建立顾客档案，记录饮食偏好，提供个性化菜品推荐",
              examples: ["顾客饮食偏好记录", "健康目标追踪", "定制化营养方案"]
            }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* 页面标题 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-soft-pink-500 to-vitality-orange-500 rounded-full mb-6 shadow-lg">
              <Branding className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              第四章：轻食品牌的定位与差异化策略
            </h1>
            <p className="text-lg text-slate-200 max-w-3xl mx-auto">
              掌握精准的目标消费群体定位，打造差异化品牌竞争力与独特的品牌文化
            </p>
          </motion.div>

          {/* 品牌策略详解 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">品牌定位与差异化策略</h2>
            
            <div className="space-y-8">
              {brandingStrategies.map((strategy, index) => {
                const Icon = strategy.icon;
                return (
                  <motion.div
                    key={strategy.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`overflow-hidden cursor-pointer transition-all duration-300 ${
                      expandedSection === strategy.id ? 'ring-2 ring-soft-pink-500' : ''
                    }`}
                    onClick={() => setExpandedSection(expandedSection === strategy.id ? null : strategy.id)}
                  >
                    <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 p-8 rounded-xl">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-r from-soft-pink-500 to-vitality-orange-500 rounded-lg flex items-center justify-center mr-4">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-slate-100">{strategy.title}</h3>
                            <p className="text-slate-300 text-sm mt-1">点击查看详细策略内容</p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedSection === strategy.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="w-6 h-6 text-soft-pink-500"
                        >
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-soft-pink-500 mb-2">策略概述：</h4>
                        <p className="text-slate-200 leading-relaxed">{strategy.overview}</p>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{ height: expandedSection === strategy.id ? 'auto' : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-8 pt-6 border-t border-white/20">
                          {strategy.details.map((detail, idx) => (
                            <div key={idx}>
                              <h4 className="text-xl font-semibold text-vitality-orange-500 mb-4">{detail.category}</h4>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {detail.items.map((item, itemIdx) => (
                                  <div key={itemIdx} className="bg-white/5 border border-white/10 rounded-lg p-6">
                                    <h5 className="font-semibold text-fresh-green-500 mb-3">{item.name}</h5>
                                    <p className="text-slate-200 text-sm leading-relaxed mb-4">{item.description}</p>
                                    <div>
                                      <h6 className="font-medium text-slate-100 mb-2 text-sm">实践案例：</h6>
                                      <div className="space-y-1">
                                        {item.examples.map((example, exIdx) => (
                                          <div key={exIdx} className="flex items-start">
                                            <div className="w-1.5 h-1.5 bg-natural-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                            <span className="text-xs text-slate-300">{example}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* 差异化竞争策略总结 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">差异化竞争关键要素</h2>
            
            <div className="bg-gradient-to-r from-soft-pink-500/20 to-vitality-orange-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-fresh-green-500 to-mint-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2">精准定位</h3>
                  <p className="text-sm text-slate-300">深度分析目标消费群体，制定精准的品牌定位策略</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-vitality-orange-500 to-lemon-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wellness className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2">产品差异</h3>
                  <p className="text-sm text-slate-300">打造独特的产品组合和创新的菜单设计</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-natural-blue-500 to-fresh-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Analytics className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2">文化内涵</h3>
                  <p className="text-sm text-slate-300">构建深度的品牌故事和文化价值体系</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-soft-pink-500 to-vitality-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Branding className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2">体验优化</h3>
                  <p className="text-sm text-slate-300">全方位提升用户体验和服务质量水平</p>
                </div>
              </div>
              
              <div className="mt-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-4 text-center">品牌成功要素</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <strong className="text-fresh-green-500">市场洞察</strong>
                    <p className="text-slate-300 mt-1">深入了解目标消费者需求变化</p>
                  </div>
                  <div className="text-center">
                    <strong className="text-vitality-orange-500">创新能力</strong>
                    <p className="text-slate-300 mt-1">持续推出符合市场需求的新产品</p>
                  </div>
                  <div className="text-center">
                    <strong className="text-natural-blue-500">执行力</strong>
                    <p className="text-slate-300 mt-1">确保品牌战略的有效实施落地</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 课程导航区域 */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <CourseNavigation />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BrandingStrategyPage;