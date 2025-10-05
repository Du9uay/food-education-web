import React from 'react';
import { motion } from 'framer-motion';
import { Compliance, Analytics, Wellness, Store } from '../../components/FoodIcons';
import { CheckCircle } from '../../components/Icons';
import CourseNavigation from '../../components/CourseNavigation';

const CompliancePage: React.FC = () => {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);

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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-natural-blue-500 to-fresh-green-500 rounded-full mb-6 shadow-lg">
              <Compliance className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
              第三章：轻食店铺合规经营要点
            </h1>
            <p className="text-lg text-slate-200 max-w-3xl mx-auto">
              掌握轻食店铺合法合规运营的各项要求，确保食品安全与经营合规
            </p>
          </motion.div>

          {/* 法律法规遵循 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-8">法律法规遵循要求</h2>
            
            <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 p-8 rounded-xl mb-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-natural-blue-500 to-mint-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Analytics className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-100 mb-4">《食品安全法》核心要求</h3>
                  <p className="text-slate-200 mb-6">
                    《食品安全法》是轻食店铺合规经营的核心依据。要求食品原料来源必须可追溯，从食材采购环节开始，店铺需清晰掌握每一种食材的来龙去脉。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-natural-blue-500 mb-3">食品原料可追溯</h4>
                      <ul className="space-y-2 text-sm text-slate-200">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-natural-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>追踪种植基地、采摘时间、运输路径</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-natural-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>供应商资质证明文件齐全</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-natural-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>建立进货查验记录制度</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-fresh-green-500 mb-3">生产加工标准</h4>
                      <ul className="space-y-2 text-sm text-slate-200">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>蔬菜清洗达到规定的次数和时间，确保去除农药残留</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>肉类烹饪内部温度加热至75℃以上，杀灭病菌</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-fresh-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>严格符合国家标准的加工流程</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-slate-300">
                      <strong>案例：</strong>轻食店采购的番茄，要能追踪到其种植基地、采摘时间、运输路径以及供应商的资质证明等信息。
                      每次采购鸡蛋时，都会在进货台账上记录鸡蛋的品牌、采购数量、进货日期以及供货商家的电话和地址。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-slate-100 mb-4">《餐饮服务食品安全操作规范》</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-vitality-orange-500 mb-3">环境卫生要求</h4>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-vitality-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>操作间地面每日清扫，保持无积水、无杂物</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-vitality-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>墙面定期擦拭，防止油污堆积</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-vitality-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>餐具用高温消毒柜进行至少15分钟消毒</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lemon-yellow-500 mb-3">员工操作规范</h4>
                  <ul className="space-y-2 text-sm text-slate-200">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lemon-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>处理食品前必须洗手消毒</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lemon-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>穿戴干净的工作服、帽子和口罩</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-lemon-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>避免直接用手接触即食食品</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 经营许可与资质 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-8">经营许可与资质</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-vitality-orange-500 mb-6">食品经营许可证</h3>
                <p className="text-slate-200 mb-4 text-sm">
                  食品经营许可证是轻食店铺合法开展餐饮服务的必备证件。店铺需向当地市场监管部门提交详细资料。
                </p>
                <div className="space-y-4">
                  <div className="bg-vitality-orange-500/10 border border-vitality-orange-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-100 mb-2">申请材料</h4>
                    <ul className="text-sm text-slate-200 space-y-1">
                      <li>• 店铺平面布局图（展示操作间、就餐区等区域分布）</li>
                      <li>• 设备设施清单（冰箱、烤箱、洗菜池等型号和数量）</li>
                      <li>• 食品安全管理制度（涵盖采购、加工、卫生等）</li>
                      <li>• 负责人身份证明和健康证</li>
                    </ul>
                  </div>
                  <div className="bg-fresh-green-500/10 border border-fresh-green-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-100 mb-2">审核流程</h4>
                    <ol className="text-sm text-slate-200 space-y-1">
                      <li>1. 提交完整申请材料</li>
                      <li>2. 市场监管部门现场检查</li>
                      <li>3. 确认操作间符合卫生标准</li>
                      <li>4. 设备设施齐全且管理制度完善</li>
                      <li>5. 审核通过后颁发许可证</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-natural-blue-500 mb-6">营业执照</h3>
                <p className="text-slate-200 mb-4 text-sm">
                  营业执照是店铺合法注册的证明，明确了店铺的经营主体信息。店铺在工商部门完成注册登记后，才能以合法身份参与市场交易活动。
                </p>
                <div className="space-y-4">
                  <div className="bg-natural-blue-500/10 border border-natural-blue-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-100 mb-2">注册信息</h4>
                    <ul className="text-sm text-slate-200 space-y-1">
                      <li>• 店铺名称（需符合命名规范）</li>
                      <li>• 经营范围（轻食制作与销售）</li>
                      <li>• 法定代表人信息</li>
                      <li>• 注册地址（需与实际经营地址一致）</li>
                      <li>• 注册资本</li>
                    </ul>
                  </div>
                  <div className="bg-mint-green-500/10 border border-mint-green-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-100 mb-2">办理流程</h4>
                    <p className="text-sm text-slate-200">
                      填写店铺名称、经营范围、法定代表人等信息，经工商部门审核通过后，拿到营业执照，
                      此后才能开展招聘员工、签订合作合同等经营活动。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 食品安全管理 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-8">食品安全管理体系</h2>
            
            <div className="space-y-8">
              {/* 食品来源追溯 */}
              <motion.div
                className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 p-8 rounded-xl cursor-pointer"
                onClick={() => setExpandedSection(expandedSection === 'traceability' ? null : 'traceability')}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Store className="w-8 h-8 text-fresh-green-500 mr-4" />
                    <h3 className="text-xl font-semibold text-slate-100">食品来源追溯体系</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSection === 'traceability' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-fresh-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedSection === 'traceability' ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-4 border-t border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-fresh-green-500 mb-3">供应商管理</h4>
                        <ul className="space-y-2 text-sm text-slate-200">
                          <li>• 与有资质的供应商建立长期合作关系</li>
                          <li>• 要求提供检验检疫报告、产地证明</li>
                          <li>• 建立供应商档案，定期评估</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-natural-blue-500 mb-3">进货查验记录</h4>
                        <ul className="space-y-2 text-sm text-slate-200">
                          <li>• 详细记录食材名称、数量、进货日期</li>
                          <li>• 记录供应商联系方式和地址</li>
                          <li>• 保存相关票据和证明文件</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-4">
                      <p className="text-sm text-slate-300">
                        <strong>实践案例：</strong>一家轻食店每次采购鸡蛋时，都会在进货台账上记录鸡蛋的品牌、采购数量、进货日期以及供货商家的电话和地址，
                        这样一旦发现鸡蛋存在质量问题，能迅速追溯到供应商并采取相应措施。
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* 自查与第三方检查 */}
              <motion.div
                className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 p-8 rounded-xl cursor-pointer"
                onClick={() => setExpandedSection(expandedSection === 'inspection' ? null : 'inspection')}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Analytics className="w-8 h-8 text-vitality-orange-500 mr-4" />
                    <h3 className="text-xl font-semibold text-slate-100">定期检查机制</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSection === 'inspection' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-6 h-6 text-vitality-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedSection === 'inspection' ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 pt-4 border-t border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-vitality-orange-500 mb-3">店铺自查</h4>
                        <ul className="space-y-2 text-sm text-slate-200">
                          <li>• 每周由店长带领员工检查</li>
                          <li>• 检查操作间卫生状况</li>
                          <li>• 检查设备运行情况</li>
                          <li>• 检查食材储存条件</li>
                          <li>• 发现问题及时整改</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lemon-yellow-500 mb-3">第三方检查</h4>
                        <ul className="space-y-2 text-sm text-slate-200">
                          <li>• 邀请专业食品安全检测机构</li>
                          <li>• 每季度进行一次全面检查</li>
                          <li>• 对食材、餐具、环境抽样检测</li>
                          <li>• 提供专业改进建议</li>
                          <li>• 根据检查结果持续改进</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* 环境卫生与员工培训 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-8">环境卫生与员工培训</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 店铺环境卫生 */}
              <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-mint-green-500 mb-6">店铺环境卫生管理</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-100 mb-3">操作间清洁标准</h4>
                    <ul className="space-y-2 text-sm text-slate-200">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-mint-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>地面每天用清洁剂彻底清扫两次，确保无油污和垃圾</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-mint-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>墙面定期擦拭，防止污渍积累</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-mint-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>烤箱内部每次使用后清理残留的食物残渣</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-mint-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>冰箱定期除霜并擦拭内部</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 mb-3">就餐区维护</h4>
                    <ul className="space-y-2 text-sm text-slate-200">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-soft-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>桌椅每小时擦拭一次</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-soft-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>地面及时清扫，保持整洁</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-soft-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>垃圾桶每天清理并消毒</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 员工培训 */}
              <div className="bg-white/10 backdrop-blur-lg border border-food-dark-100/20 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-natural-blue-500 mb-6">员工培训体系</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-100 mb-3">培训内容</h4>
                    <ul className="space-y-2 text-sm text-slate-200">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-natural-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>食品安全法律法规学习</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-natural-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>食材正确处理方法、烹饪温度和时间要求</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-natural-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>个人卫生要求（洗手至少20秒、穿戴工作服）</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-natural-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>现场演示正确的操作流程</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-natural-blue-500/10 border border-natural-blue-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-100 mb-2">培训效果</h4>
                    <p className="text-sm text-slate-200">
                      经过培训，员工在工作中会更加自觉地按照规范操作，认真清洗食材，规范穿戴工作服和口罩，有效保障轻食的安全。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 实用提示 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-natural-blue-500/20 to-fresh-green-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-slate-100 mb-6 text-center">合规经营关键要点</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-fresh-green-500 to-mint-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Compliance className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2">证照齐全</h3>
                  <p className="text-sm text-slate-300">营业执照、食品经营许可证、员工健康证一个都不能少</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-vitality-orange-500 to-lemon-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Analytics className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2">追溯体系</h3>
                  <p className="text-sm text-slate-300">建立完整的食材追溯体系，确保食品安全可控</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-natural-blue-500 to-fresh-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wellness className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-100 mb-2">定期培训</h3>
                  <p className="text-sm text-slate-300">持续提升员工食品安全意识和操作技能</p>
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

export default CompliancePage;