# 轻食行业全景与商业模式解析 - 教学网站

## 项目简介
这是一个专业的轻食行业教学网站，为营养配餐与新营养经济店铺经营专业的核心课程提供在线学习平台。网站涵盖轻食行业全景、商业模式、合规经营、品牌定位等核心内容。

## 技术栈
- **前端框架**: React 18 + TypeScript
- **样式处理**: Tailwind CSS
- **动画效果**: Framer Motion
- **路由管理**: React Router v6
- **构建工具**: Create React App

## 核心功能
- 📚 **六大板块课程体系**：系统化的课程内容组织
- 🎨 **食品主题设计**：专业的绿色健康视觉风格
- ✨ **动态背景效果**：有机粒子动画 + 光晕效果
- 📝 **互动测试系统**：5种题型的在线测试功能
- 📱 **响应式设计**：完美适配各种设备屏幕

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```
应用将在 http://localhost:3000 运行

### 构建生产版本
```bash
npm run build
```

## 项目结构
```
src/
├── components/          # 可复用组件
│   ├── Navigation.tsx   # 导航栏组件
│   ├── FoodBackgroundOptimized.tsx  # 背景动画
│   ├── FoodVignette.tsx # 晕影效果
│   ├── FoodIcons.tsx    # 食品主题图标
│   └── Icons.tsx        # 通用图标
├── pages/              # 页面组件
│   ├── HomePage.tsx    # 首页
│   ├── ObjectivesPage.tsx  # 学习目标
│   ├── CareersPage.tsx     # 职业发展
│   ├── CourseSummaryPage.tsx  # 课程总结
│   ├── CourseTestPage.tsx     # 课堂测试
│   └── course/         # 课程内容页面
│       ├── OverviewPage.tsx          # 课程概述
│       ├── IndustryOverviewPage.tsx  # 行业全景
│       ├── BusinessModelsPage.tsx    # 商业模式
│       ├── CompliancePage.tsx        # 合规经营
│       ├── BrandingStrategyPage.tsx  # 品牌策略
│       └── ChallengesOpportunitiesPage.tsx # 挑战机遇
├── App.tsx             # 应用主组件
└── index.css          # 全局样式

```

## 课程内容
1. **轻食行业全景概览** - 市场规模与发展态势
2. **商业模式解析** - 目标定位与盈利模式
3. **合规经营要点** - 证照办理与食品安全
4. **品牌定位策略** - 差异化竞争策略
5. **挑战与机遇** - 行业趋势与发展路径

## 开发团队
营养配餐与新营养经济店铺经营专业教研组

## 许可证
MIT License