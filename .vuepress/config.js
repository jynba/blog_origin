module.exports = {
	title: 'jyblog',
	description: '千里之行，始于足下',
	dest: 'public',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '/logo.png',
			},
		],
		[
			'meta',
			{
				name: 'viewport',
				content: 'width=device-width,initial-scale=1,user-scalable=no',
			},
		],
	],
	theme: 'reco',
	themeConfig: {
		nav: [
			{
				text: '主页',
				link: '/',
				icon: 'reco-home',
			},
			{
				text: '时间轴',
				link: '/timeline/',
				icon: 'reco-date',
			},
			{
				text: '文档',
				icon: 'reco-message',
				items: [
					{
						text: 'live2d的心酸泪',
						link: '/docs/theme-reco/',
					},
					{
						text: '记录点滴',
						link: '/docs/theme-reco/record.md',
					},
					{
						text: '吐槽',
						link: '/docs/theme-reco/saysomething.md',
					},
					{
						text: '成长史',
						link: '/docs/theme-reco/live.md',
					},
				],
			},
			{
				text: '联系我',
				icon: 'reco-message',
				items: [
					{
						text: '关于我',
						link: '/blogs/about/guide',
					},
					{
						text: 'GitHub',
						link: 'https://github.com/jynba',
						icon: 'reco-github',
					},
				],
			},
		],
		sidebar: {
			'/docs/theme-reco/': ['', 'live', 'record', 'saysomething'],
		},
		type: 'blog',
		blogConfig: {
			category: {
				location: 3,
				text: '心得',
			},
			tag: {
				location: 3,
				text: '标签',
			},
		},
		friendLink: [
			{
				title: 'JY',
				desc: 'Keep going!.',
				email: '1239051474@qq.com',
				link: 'https://github.com/jynba',
			},
			{
				title: 'vuepress-theme-reco',
				desc: 'A simple and beautiful vuepress Blog & Doc theme.',
				avatar:
					'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
				link: 'https://vuepress-theme-reco.recoluan.com',
			},
		],
		logo: '/logo.png',
		search: true,
		searchMaxSuggestions: 10,
		lastUpdated: '最后一次更新时间',
		author: 'jy',
		authorAvatar: '/portrait.png',
		record: '粤ICP备2021168505号',
		recordLink: 'https://beian.miit.gov.cn/',
		startYear: '2021',
		subSidebar: 'auto',
	},
	plugins: [
		[
			'@vuepress-reco/vuepress-plugin-kan-ban-niang',
			{
				theme: [
					'blackCat',
					'shizuku',
					'koharu',
					'haru1',
					'whiteCat',
					'miku',
					'haru2',
					'haruto',
					'izumi',
					'wanko',
					'z16',
				],
				clean: false,
				messages: {
					welcome: '欢迎来到jy的博客',
					home: '心里的花，我想要带你回家。',
					theme: '想看看我的其他小伙伴吗？',
					close: '我懂了，爱过',
				},
				messageStyle: { right: '68px', bottom: '290px' },
				width: 250,
				height: 320,
			},
		],

		// ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
		//   title: '公告',
		//   body: [
		//     {
		//       type: 'title',
		//       content: '欢迎加我的QQ/vx 🎉🎉🎉',
		//       style: 'text-aligin: center;',
		//     },
		//     {
		//       type: 'text',
		//       content: 'QQ/VX：1349320519',
		//       style: 'text-align: center;'
		//     },
		//     {
		//       type: 'text',
		//       content: '喜欢的主题特效可以去个人信息',
		//       style: 'text-align: center;'
		//     },
		//     {
		//       type: 'text',
		//       content: '友链或疑问均可在留言板给我留言',
		//       style: 'text-align: center;'
		//     }
		//   ],
		//   footer: [
		//     {
		//       type: 'button',
		//       text: '打赏',
		//       link: '/blog/donate'
		//     },
		//   ]
		// }],
		[
			'vuepress-plugin-cursor-effects',
			{
				size: 2, // size of the particle, default: 2
				shape: 'circle', // shape of the particle, default: 'star'
				zIndex: 999999999, // z-index property of the canvas, default: 999999999
			},
		],
		[
			'ribbon-animation',
			{
				size: 90, // 默认数据
				opacity: 0.3, //  透明度
				zIndex: -1, //  层级
				opt: {
					// 色带HSL饱和度
					colorSaturation: '80%',
					// 色带HSL亮度量
					colorBrightness: '60%',
					// 带状颜色不透明度
					colorAlpha: 0.65,
					// 在HSL颜色空间中循环显示颜色的速度有多快
					colorCycleSpeed: 6,
					// 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
					verticalPosition: 'center',
					// 到达屏幕另一侧的速度有多快
					horizontalSpeed: 200,
					// 在任何给定时间，屏幕上会保留多少条带
					ribbonCount: 2,
					// 添加笔划以及色带填充颜色
					strokeSize: 0,
					// 通过页面滚动上的因子垂直移动色带
					parallaxAmount: -0.5,
					// 随着时间的推移，为每个功能区添加动画效果
					animateSections: true,
				},
				ribbonShow: false, //  点击彩带  true显示  false为不显示
				ribbonAnimationShow: true, // 滑动彩带
			},
		],
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-204784788-1',
			},
		],
		[
			'vuepress-plugin-nuggets-style-copy',
			{
				copyText: '复制代码',
				tip: {
					content: '复制成功!',
				},
			},
		],
		[
			'@vuepress-reco/comments',
			{
				solution: 'valine',
				options: {
					appId: 'JXLYsTtO12z6Xxy02WBKJuqv-gzGzoHsz', // your appId
					appKey: 'QeS9tNBXO2nlqgRqXgs2KsMm', // your appKey
				},
			},
		],
	],
	markdown: {
		lineNumbers: true,
	},
};
