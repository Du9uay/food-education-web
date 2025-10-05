import React from 'react';
import { motion } from 'framer-motion';
import { Business, Store, Analytics, Smoothie } from '../../components/FoodIcons';
import CourseNavigation from '../../components/CourseNavigation';

const BusinessModelsPage: React.FC = () => {
  const [selectedModel, setSelectedModel] = React.useState<string | null>(null);

  // 商业模式类型
  const businessModels = [
    {
      id: "restaurant",
      title: "餐厅模式",
      concept: "餐厅模式是轻食店铺基于堂食服务构建的商业模式。以营造独特用餐环境与场景体验为核心，旨在为消费者打造一个区别于日常用餐的特殊空间。其本质是通过实体店面的物理空间，将轻食消费与环境氛围深度融合。",
      workingPrinciple: "通过实体店面的物理空间，将轻食消费与环境氛围深度融合。线上利用抖音、小红书等社交媒体平台发布门店环境视频、特色菜品图片和打卡照片；线下与周边写字楼、社区合作发放体验券。服务员需经过专业培训，从顾客进店引导、点餐介绍到用餐服务都要面面俱到。",
      example: "某轻食品牌的线下门店采用了日式简约风格装修，店内摆放着精心挑选的绿植，柔和的灯光营造出宁静舒适的氛围。这种环境能让消费者在享用轻食的同时，感受到身心的放松，满足追求社交和体验的消费者需求。后厨严格按照标准化流程制作，确保每一份轻食在口感、食材搭配和营养均衡上都达到高标准。",
      advantages: [
        "能够营造独特的用餐体验和氛围",
        "直接面对消费者，便于建立品牌认知",
        "可以提供个性化服务，增强客户黏性",
        "有利于品牌文化和理念的传播"
      ],
      disadvantages: [
        "需要承担较高的租金和装修成本",
        "对地理位置要求较高",
        "人力成本相对较高",
        "经营时间和地域限制较大"
      ],
      keyPoints: [
        "营造独特用餐环境与场景体验",
        "线上线下多元化营销策略",
        "标准化流程保障出品质量",
        "专业培训提升服务水平",
        "社交媒体内容营销运营",
        "堂食服务效率与品质把控"
      ]
    },
    {
      id: "ecommerce",
      title: "电商模式",
      concept: "电商模式是借助线上平台开展轻食销售的商业模式。核心优势在于降低实体店运营成本，无需承担高额的店面租金、装修等固定费用。但要成功运营电商模式，品牌必须在线上运营、营销推广和供应链管理三方面具备强大能力。",
      workingPrinciple: "搭建功能完备的官方网站或在第三方电商平台开设店铺。利用SEO技术使品牌网站在搜索引擎结果中排名靠前；通过社交媒体广告投放，针对年轻白领、健身人群等目标消费者群体进行精准营销；开展限时折扣、满减优惠、买一送一等线上促销活动。与可靠的物流企业合作，建立高效的仓储体系，实时监控库存数量。",
      example: "某轻食品牌的官方网站采用简洁大气的界面设计，菜品分类明确，每个菜品都配有高清图片和详细的文字介绍，让消费者能快速了解产品。在电商平台销售预包装轻食，通过优化供应链，实现了从中央厨房生产到物流配送的高效流转，消费者下单后能在短时间内收到产品。",
      advantages: [
        "大幅降低实体店运营成本",
        "不受地理位置限制，覆盖面广",
        "24小时营业，提高销售机会",
        "便于进行数据分析和精准营销"
      ],
      disadvantages: [
        "缺乏实体体验，客户信任度建立较难",
        "物流配送成本和食品保鲜要求高",
        "线上竞争激烈，获客成本高",
        "需要强大的线上运营和技术支撑"
      ],
      keyPoints: [
        "官方网站界面设计与用户体验",
        "SEO优化提升搜索排名",
        "社交媒体精准广告投放",
        "线上促销活动策划执行",
        "供应链管理与库存监控",
        "物流配送效率优化"
      ]
    },
    {
      id: "delivery",
      title: "外卖模式",
      concept: "外卖模式是以外卖作为主要销售渠道的商业模式，具有成本优势，因为减少了实体店的固定成本投入。然而，该模式对品牌的线上运营和营销能力要求极高。",
      workingPrinciple: "在各大外卖平台上优化店铺页面，拍摄精美诱人的菜品图片，详细准确地描述菜品的食材构成、口味特点等信息。设置满减活动如满20减3、满30减5等，刺激消费者增加下单金额；积极参与平台的吃货节、新用户优惠活动等。使用专业的保温外卖盒，确保餐品的温度适宜；在包装上要牢固可靠，防止配送过程中餐品掉落或洒出。",
      example: "某轻食店在外卖平台的店铺页面，菜品图片色彩鲜艳，清晰呈现了轻食的食材搭配，菜品描述中明确标注了每道轻食的热量、蛋白质、碳水化合物等营养成分。该品牌与多家外卖平台合作，通过优化店铺页面、设置合理的满减活动以及与可靠配送公司合作，获得了大量的外卖订单，消费者反馈餐品送达时仍保持良好的状态。",
      advantages: [
        "减少实体店固定成本投入",
        "覆盖更广泛的消费群体",
        "依托平台流量，获客相对容易",
        "便于快速复制和扩张"
      ],
      disadvantages: [
        "依赖第三方平台，缺乏自主性",
        "平台抽成高，利润空间被压缩",
        "配送环节控制难度大",
        "品牌建设和客户沉淀困难"
      ],
      keyPoints: [
        "精美菜品图片拍摄展示",
        "营养成分标注与描述优化",
        "满减活动合理设置",
        "平台促销活动参与策略",
        "专业保温包装设计",
        "配送时效与品质保障"
      ]
    },
    {
      id: "hybrid",
      title: "组合模式",
      concept: "组合模式是指轻食品牌将餐厅模式、电商模式、外卖模式等多种模式相结合的商业模式。其理论依据是通过多种模式的协同运作，满足不同消费者的多样化需求，从而拓展盈利渠道。",
      workingPrinciple: "在实体店运营中，打造舒适的堂食环境，吸引消费者进店用餐，满足追求用餐体验的消费者需求；在外卖运营方面，优化外卖店铺页面，开展营销活动，满足追求便捷的消费者需求；在电商运营中，销售预包装轻食产品，通过线上推广和合理定价，吸引注重性价比的消费者购买。",
      example: "某轻食品牌同时采用餐厅+外卖+电商的组合模式。实体店每天有稳定的堂食客流量，外卖平台每天有固定的订单量，电商平台也有一定的产品销量。这种组合模式能够覆盖喜欢在实体店享受悠闲用餐时光的消费者、随时通过外卖点轻食的消费者以及购买预包装轻食在家食用的消费者。多种收入来源使得品牌的经营更加稳定和可持续发展。",
      advantages: [
        "收入来源多元化，抗风险能力强",
        "覆盖不同消费场景和人群",
        "各渠道间可形成协同效应",
        "品牌影响力和市场占有率提升"
      ],
      disadvantages: [
        "管理复杂度高，需要专业团队",
        "初期投入成本较大",
        "各渠道间可能存在冲突",
        "对运营能力要求极高"
      ],
      keyPoints: [
        "实体店堂食体验打造",
        "外卖平台运营优化",
        "电商预包装产品销售",
        "多渠道协同运营管理",
        "收入来源多元化布局",
        "不同消费场景全覆盖"
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-vitality-orange-500 to-lemon-yellow-500 rounded-full mb-6 shadow-lg">
              <Business className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              第二章：轻食店铺商业模式解析
            </h1>
            <p className="text-lg text-slate-200 max-w-3xl mx-auto">
              深入解析餐厅、电商、外卖、组合等各类轻食商业模式的核心要点
            </p>
          </motion.div>

          {/* 商业模式详解 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">四大商业模式详解</h2>
            
            <div className="space-y-8">
              {businessModels.map((model, index) => (
                <motion.div
                  key={model.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`overflow-hidden cursor-pointer transition-all duration-300 ${
                    selectedModel === model.id ? 'ring-2 ring-fresh-green-500' : ''
                  }`}
                  onClick={() => setSelectedModel(selectedModel === model.id ? null : model.id)}
                >
                  <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 p-8 rounded-xl">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-fresh-green-500 to-vitality-orange-500 rounded-lg flex items-center justify-center mr-4">
                          <Store className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-100">{model.title}</h3>
                          <p className="text-slate-300 text-sm mt-1">点击查看详细内容</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: selectedModel === model.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-6 h-6 text-vitality-orange-500"
                      >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-vitality-orange-500 mb-2">概念：</h4>
                      <p className="text-slate-200 leading-relaxed">{model.concept}</p>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{ height: selectedModel === model.id ? 'auto' : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-6 pt-6 border-t border-white/20">
                        <div>
                          <h4 className="font-semibold text-fresh-green-500 mb-3">工作原理：</h4>
                          <p className="text-slate-200 leading-relaxed">{model.workingPrinciple}</p>
                        </div>
                        
                        <div className="bg-natural-blue-500/10 border border-natural-blue-500/20 rounded-lg p-4">
                          <h4 className="font-semibold text-natural-blue-500 mb-3">实例说明：</h4>
                          <p className="text-sm text-slate-200 leading-relaxed">{model.example}</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-fresh-green-500 mb-3">优点：</h4>
                            <ul className="space-y-2">
                              {model.advantages.map((adv, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-fresh-green-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-slate-200">{adv}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-vitality-orange-500 mb-3">缺点：</h4>
                            <ul className="space-y-2">
                              {model.disadvantages.map((dis, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-vitality-orange-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-slate-200">{dis}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-fresh-green-500/10 border border-fresh-green-500/20 rounded-lg p-4">
                          <h4 className="font-semibold text-fresh-green-500 mb-3">关键要点：</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {model.keyPoints.map((point, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <Analytics className="w-4 h-4 text-fresh-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-200">{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 商业模式对比 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-8 text-center">模式选择指南</h2>
            
            <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-fresh-green-500 to-mint-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Store className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2">餐厅模式</h3>
                  <p className="text-sm text-slate-300">适合注重体验的高端市场</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-vitality-orange-500 to-lemon-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Analytics className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2">电商模式</h3>
                  <p className="text-sm text-slate-300">适合标准化产品的规模化销售</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-natural-blue-500 to-fresh-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smoothie className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2">外卖模式</h3>
                  <p className="text-sm text-slate-300">适合便捷性要求高的消费场景</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-soft-pink-500 to-vitality-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Business className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2">组合模式</h3>
                  <p className="text-sm text-slate-300">适合资源充足的综合性品牌</p>
                </div>
              </div>
            </div>
          </motion.section>

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
    </div>
  );
};

export default BusinessModelsPage;