
pageEngine.init('.wrapper', ['./src/img/1.jpg', './src/img/2.jpg', './src/img/3.jpg', './src/img/4.jpg', './src/img/5.jpg'])
    .addSection('stOne')
    .addComponent({
        type: 'upOrDown',
        className: 'component',
        css: {
            width: '1000px',
            overflow: 'hidden',
            textAlign: 'center',
            opacity: 0,
            fontSize: '20px',
            color: '#000',
            fontWeight: '900',
            whiteSpace: 'nowrap'
        },
        text: '海水就像天色一样蔚蓝明净，锦缎般闪着银色的光辉。',
        center: true,
        animateIn: {
            opacity: 1
        },
        animateOut: {
            opacity: 0
        },
        delay: 500
    })
    .addSection('stTwo')
    .addSlide()
    .addComponent({
        type: 'upOrDown',
        className: 'component',
        css: {
            width: '1000px',
            overflow: 'hidden',
            textAlign: 'center',
            opacity: 0,
            fontSize: '20px',
            color: '#000',
            fontWeight: '900',
            whiteSpace: 'nowrap'
        },
        text: '煮海之民何所营，妇无蚕织夫无耕。衣食之源太寥落，牢盆煮就汝轮征。柳永《煮海歌》第一篇',
        center: true,
        animateIn: {
            opacity: 1
        },
        animateOut: {
            opacity: 0
        },
        delay: 500
    })
    .addSlide('sdOne')
    .addComponent({
        type: 'upOrDown',
        className: 'component',
        css: {
            width: '1000px',
            overflow: 'hidden',
            textAlign: 'center',
            opacity: 0,
            fontSize: '20px',
            color: '#000',
            fontWeight: '900',
            whiteSpace: 'nowrap'
        },
        text: '煮海之民何所营，妇无蚕织夫无耕。衣食之源太寥落，牢盆煮就汝轮征。柳永《煮海歌》第二篇',
        center: true,
        animateIn: {
            opacity: 1
        },
        animateOut: {
            opacity: 0
        },
        delay: 500
    })
    .addSection('stThree')
    .addComponent({
        type: 'upOrDown',
        className: 'component',
        css: {
            width: '1000px',
            overflow: 'hidden',
            textAlign: 'center',
            opacity: 0,
            fontSize: '20px',
            color: '#000',
            fontWeight: '900',
            whiteSpace: 'nowrap'
        },
        text: '渐渐的退潮了，大海恢复了平静，在夕阳的照耀下海面那么柔和，海面给人那么恬静。',
        center: true,
        animateIn: {
            opacity: 1
        },
        animateOut: {
            opacity: 0
        },
        delay: 500
    })
    .addSection('stFour')
    .addComponent({
        type: 'upOrDown',
        className: 'component',
        css: {
            width: '1000px',
            overflow: 'hidden',
            textAlign: 'center',
            opacity: 0,
            fontSize: '20px',
            color: '#fff',
            fontWeight: '900',
            whiteSpace: 'nowrap'
        },
        text: '树上小小的叶片现出透明均匀的绿色。好像有人把它们洗干净后又涂上了一层油漆似的，鲜亮光滑。',
        center: true,
        animateIn: {
            opacity: 1
        },
        animateOut: {
            opacity: 0
        },
        delay: 500
    })
    .addSection('stFive')
    .addComponent({
        type: 'upOrDown',
        className: 'component',
        css: {
            width: '1000px',
            overflow: 'hidden',
            textAlign: 'center',
            opacity: 0,
            fontSize: '20px',
            color: '#000',
            fontWeight: '900',
            whiteSpace: 'nowrap'
        },
        text: '冬雪数九寒天，冰封千里。整个世界成了只大冰箱，山冷得在颤抖，河冻得僵硬了，空气也似乎要凝固起来。',
        center: true,
        animateIn: {
            opacity: 1
        },
        animateOut: {
            opacity: 0
        },
        delay: 500
    })
    .load()







