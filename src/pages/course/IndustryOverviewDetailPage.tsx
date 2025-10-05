import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, Target, BarChart, CheckCircle, ChevronDown } from '../../components/Icons';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
  icon: React.ComponentType<any>;
}

const IndustryOverviewDetailPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string>('definition');

  const sections: Section[] = [
    {
      id: 'definition',
      title: '轻食行业定义与发展历程',
      icon: TrendingUp,
      content: (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-slate-100 mb-4">定义与起源</h4>
            <p className="text-slate-200 leading-relaxed mb-4">
              轻食起源于欧美贵族下午茶文化，后随健康理念传播演变为聚焦食材天然与营养均衡的新兴业态。
              轻食不仅是一种餐饮形式，更是一种健康生活方式的体现。
            </p>
            <p className="text-slate-200 leading-relaxed">
              在国内，随着经济发展和生活节奏加快，轻食行业迅速兴起。如"某家轻食"品牌在国内的快速扩张，
              标志着轻食概念在中国市场的成功落地和广泛接受。
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-slate-100 mb-4">发展历程特点</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-fresh-green-500" />
                  <span className="text-slate-200">从贵族文化到大众消费</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-fresh-green-500" />
                  <span className="text-slate-200">健康理念驱动发展</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-fresh-green-500" />
                  <span className="text-slate-200">食材天然营养均衡</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-fresh-green-500" />
                  <span className="text-slate-200">适应快节奏生活需求</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'trends',
      title: '消费趋势与市场规模分析',
      icon: BarChart,
      content: (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-slate-100 mb-4">市场规模数据</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl">
                <div className="text-3xl font-bold text-fresh-green-600 mb-2">1600亿+</div>
                <div className="text-sm text-slate-300">2023年国内代餐轻食市场规模</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl">
                <div className="text-3xl font-bold text-vitality-orange-600 mb-2">30%</div>
                <div className="text-sm text-slate-300">未来五年年均增速预期</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl">
                <div className="text-3xl font-bold text-natural-blue-600 mb-2">高速</div>
                <div className="text-sm text-slate-300">市场发展态势</div>
              </div>
            </div>
          </div>
          
          <div className="bg-lemon-yellow-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-lemon-yellow-800 mb-4">驱动因素分析</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-fresh-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-medium text-slate-100">消费者健康意识提升</h5>
                  <p className="text-slate-300 text-sm">越来越多消费者关注饮食健康，追求低糖、低脂、高营养的食品</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-vitality-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-medium text-slate-100">生活节奏加快</h5>
                  <p className="text-slate-300 text-sm">快节奏生活使消费者需要便捷、营养的餐饮解决方案</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-natural-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h5 className="font-medium text-slate-100">消费升级趋势</h5>
                  <p className="text-slate-300 text-sm">消费者愿意为优质、健康的食品支付溢价</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'consumer',
      title: '消费者画像与需求分析',
      icon: Users,
      content: (
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-slate-100 mb-4">主要消费群体</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-fresh-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-fresh-green-600" />
                </div>
                <h5 className="font-medium text-slate-100 mb-2">女性群体</h5>
                <p className="text-sm text-slate-300">关注身材管理，偏好低热量、低脂肪食品</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-vitality-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-vitality-orange-600" />
                </div>
                <h5 className="font-medium text-slate-100 mb-2">白领群体</h5>
                <p className="text-sm text-slate-300">工作繁忙，需要便捷健康的餐饮选择</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl p-4 text-center">
                <div className="w-12 h-12 bg-natural-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-natural-blue-600" />
                </div>
                <h5 className="font-medium text-slate-100 mb-2">新一线城市居民</h5>
                <p className="text-sm text-slate-300">消费观念先进，追求健康生活方式</p>
              </div>
            </div>
          </div>
          
          <div className="bg-mint-green-50 rounded-xl p-6">
            <h4 className="text-lg font-semibold text-mint-green-800 mb-4">消费偏好分析</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl">
                <div className="text-xl font-bold text-fresh-green-600 mb-1">低糖</div>
                <div className="text-xs text-slate-300">避免糖分过量摄入</div>
              </div>
              <div className="text-center p-3 bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl">
                <div className="text-xl font-bold text-vitality-orange-600 mb-1">低脂</div>
                <div className="text-xs text-slate-300">选择健康蛋白质来源</div>
              </div>
              <div className="text-center p-3 bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl">
                <div className="text-xl font-bold text-natural-blue-600 mb-1">高纤维</div>
                <div className="text-xs text-slate-300">促进肠道健康</div>
              </div>
              <div className="text-center p-3 bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl">
                <div className="text-xl font-bold text-mint-green-600 mb-1">高蛋白</div>
                <div className="text-xs text-slate-300">满足营养需求</div>
              </div>
            </div>
            
            <div className="mt-6 bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-xl p-4">
              <h5 className="font-medium text-slate-100 mb-3">典型案例分析</h5>
              <div className="space-y-3 text-sm text-slate-200">
                <p><strong>健身人群：</strong>特别注重高蛋白摄入，如鸡胸肉、豆类等，支持肌肉发育</p>
                <p><strong>上班族：</strong>将轻食作为工作餐，要求既吃得饱又吃得健康</p>
                <p><strong>减肥人群：</strong>关注卡路里控制，偏好低糖水果沙拉等低热量食品</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? '' : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-natural-blue-50 via-mint-green-50 to-fresh-green-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-100 mb-4">
            轻食行业全景概览
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            全面展现轻食行业全景，了解市场规模、发展态势与消费者特征。
            学会分析行业竞争状况，把握轻食行业整体框架，深入理解轻食行业的市场布局。
          </p>
        </motion.div>

        {/* 课程内容 */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === section.id;
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/20 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-fresh-green-500 to-vitality-orange-500 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">{section.title}</h3>
                      <p className="text-sm text-slate-300">点击展开详细内容</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      {section.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* 学习要点总结 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-fresh-green-500 to-vitality-orange-500 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">学习要点总结</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">行业发展脉络</h4>
              <p className="text-sm opacity-90">掌握轻食从贵族文化到大众消费的演进历程</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">市场规模认知</h4>
              <p className="text-sm opacity-90">理解1600亿市场规模及30%年增长率的意义</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg border border-food-dark-100/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-semibold mb-2">消费者洞察</h4>
              <p className="text-sm opacity-90">分析女性、白领、新一线城市居民的消费偏好</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryOverviewDetailPage;