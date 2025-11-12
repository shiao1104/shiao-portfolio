import Img_1_1 from '@/assets/projects/interview_1.png';
import Img_1_2 from '@/assets/projects/interview_2.png';
import Img_1_3 from '@/assets/projects/interview_3.png';
import Img_1_4 from '@/assets/projects/interview_4.png';

import Img_3_1 from '@/assets/projects/tactl_1.png';
import Img_3_2 from '@/assets/projects/tactl_2.png';
import Img_3_3 from '@/assets/projects/tactl_3.png';

import Img_4_1 from '@/assets/projects/ils_1.png';
import Img_4_2 from '@/assets/projects/ils_2.png';
import Img_4_3 from '@/assets/projects/ils_3.png';

import Img_5_1 from '@/assets/projects/design_1.png';
import Img_5_2 from '@/assets/projects/design_2.png';
import Img_5_3 from '@/assets/projects/design_3.png';

import Img_6_1 from '@/assets/projects/campus_1.png';
import Img_6_2 from '@/assets/projects/campus_2.png';
import Img_6_3 from '@/assets/projects/campus_3.png';

import Img_8_1 from '@/assets/projects/birc_1.png';
import Img_8_2 from '@/assets/projects/birc_2.png';

export const projects = [
    {
        icon: '📸',
        title: 'Interviewer AI',
        description: '透過 AI 技術協助企業進行初步線上面試，提供更客觀、即時且可視化的面試者能力分析，降低 HR 評估成本，並提升人才媒合品質。',
        image: Img_1_4,
        tags: ['Next.js', 'MUI', 'Restful API', 'Django', 'OpenCV', 'Whisper', 'MySQL'],
        badge: '二技專題',
        readmore: '/project/1',
        outcome: [
            '透過 AI 協助企業進行初步線上面試',
            '提供可視化的面試者能力分析，降低 HR 評估成本 ',
            '核心功能包含：多模態分析 (影像+語音+語意) 、即時回饋機制 、客觀分數模型'
        ],
        responsibilities: [
            '前端畫面開發與 Next.js 架構設計',
            '串接 Django 後端 API',
            '使用 OpenCV.js 進行即時臉部表情辨識',
            '整合 Whisper API 進行語音轉文字'
        ],
        showcase: [
            Img_1_1, Img_1_2, Img_1_3, Img_1_4
        ]
    },
    {
        icon: '🐶',
        title: 'SoulGO',
        description: '結合狗狗辨識與問答等互動式方式，提供一個全民寓教於樂的應用程式。',
        image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMzE3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        tags: ['Android Studio', 'Java', 'MySQL', 'Figma'],
        badge: '五專專題',
        readmore: '/project/2',
    },
    {
        icon: '🏫',
        title: '北商教學發展中心資訊系統',
        description: '透過系統化流程與線上化介面，降低紙本行政成本、提升校內教學資源透明度，並強化使用者（教師、學生、行政單位）的操作體驗。',
        image: Img_3_3,
        tags: ['React', 'Next.js', 'API', 'Figma', 'Sass', 'MySQL'],
        badge: '校內專案',
        readmore: '/project/3',
        link: 'https://tactl.ntub.edu.tw/landing',
        outcome: [
            '減少紙本作業與重複行政工作，支持校方 ESG 永續教育推動',
            '線上申請、審核、時數紀錄與管理，提供雙向溝通與查詢',
            '集中呈現歷年教師榮譽事蹟，提升校內外曝光與教學品牌形象',
            '透過系統建立教學助理資料與教學時數申請及審核，加速行政流程',
        ],
        responsibilities: [
            '前端介面設計與開發',
            '與後端 API 整合與資料可視化呈現',
            '需求整理、系統架構規劃',
        ],
        showcase: [
            Img_3_1, Img_3_2, Img_3_3
        ]
    },
    {
        icon: '🏠',
        title: '智慧化居住空間專屬平台',
        description: '翻新舊有網站、導入完整後台管理系統，並提升網站使用者操作流暢度與資訊呈現效果。',
        image: Img_4_1,
        tags: ['React', 'Next.js', 'RWD', 'SEO', 'Google Login API', 'MySQL', 'Spring Boot'],
        badge: '校外專案',
        readmore: '/project/4',
        link: 'https://www.ils.org.tw/',
        outcome: [
            '舊版網站成功翻新，整體瀏覽流程更加順暢、資訊呈現清晰',
            '導入後台管理平台後，管理員可自行維護內容，降低後續維運成本',
            'SEO搜尋引擎優化，使網站搜尋曝光度增加',
        ],
        responsibilities: [
            '網站前端重新開發',
            '後台管理系統建置',
            '設計響應式網頁（RWD），提升行動裝置使用體驗',
            '串接API',
            'SEO 搜尋引擎優化'
        ],
        showcase: [
            Img_4_1, Img_4_2, Img_4_3
        ]
    },
    {
        icon: '💡',
        title: '智慧化居住空間創意競賽網站',
        description: '翻新舊有網站、導入完整報名流程，並提升網站使用者操作流暢度與資訊呈現效果。',
        image: Img_5_1,
        tags: ['React', 'Next.js', 'RWD', 'SEO', 'Google Login API', 'MySQL', 'Spring Boot'],
        badge: '校外專案',
        readmore: '/project/5',
        link: 'https://design.ils.org.tw/',
        outcome: [
            '舊版網站成功翻新，整體瀏覽流程更加順暢、資訊呈現清晰',
            '使用者能透過網站報名，並將報名資料寄送至信箱，同時將資料匯出後台',
            '導入後台管理平台後，管理員可自行維護內容，降低後續維運成本',
        ],
        responsibilities: [
            '網站前端重新開發',
            '後台管理系統建置',
            '設計響應式網頁（RWD），提升行動裝置使用體驗',
            '串接API',
            'SEO 搜尋引擎優化'
        ],
        showcase: [
            Img_5_1, Img_5_2, Img_5_3
        ]
    },
    {
        icon: '🎓',
        title: '校園應用系統',
        description: '以 SSO 單一登入整合校園服務，結合 PWA、RWD 提升使用體驗。',
        image: Img_6_3,
        tags: ['React', 'Next.js', 'PWA', 'Spring Boot', 'SSO', 'MySQL', 'Google Login API'],
        badge: '校內專案',
        readmore: '/project/6',
        link: 'https://campus-application.ntubimdbirc.tw/',
        outcome: [
            'SSO 單一登入，統一身份驗證，一次登入即可使用所有校園服務',
            'PWA 安裝與離線快取功能，提升使用便利性與體驗',
            'RWD 響應式設計，適應各種裝置與螢幕尺寸',
            '智慧取物櫃、教室鑰匙預約、失物招領等服務一站整合'
        ],
        responsibilities: [
            '協助前端開發與維護',
            '實作 Progressive Web App（PWA）',
            '設計響應式網頁（RWD）',
            '串接API及第三方登入服務',
            '參與 SSO 單一登入整合'
        ],
        showcase: [
            Img_6_1, Img_6_2, Img_6_3
        ]
    },
    {
        icon: '🖥️',
        title: '教育部 個資查核計畫辦公室系統開發',
        description: '將查核流程系統化，提供學校與教育部查核辦公室便於追蹤、回報與審核的標準平台，並配合教育部 ESG（永續治理）推動方向，降低紙本作業使用量並提升行政效率。',
        image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMzE3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        tags: ['React', 'Next.js', 'API', 'Figma', 'Sass', 'MySQL', 'Spring Boot'],
        badge: '校外專案',
        readmore: '/project/7',
        outcome: [
            '查核流程由紙本改為線上化，降低行政人力成本與錯誤率',
            '回應教育部推動之 ESG 永續治理政策，減少紙張消耗、提升管理流程永續性'
        ],
        responsibilities: [
            '前端網頁開發',
            '與後端 API 整合與資料可視化呈現',
            '配合使用單位需求反覆修正、改善操作體驗'
        ],
    },
    {
        icon: '🌐',
        title: '北商資管 商業智慧研究中心官網',
        description: '善用SEO搜尋引擎優化，宣傳中心理念與成果之形象網站',
        image: Img_8_1,
        tags: ['React', 'Next.js', 'SEO', 'Figma', 'Sass', 'MySQL', 'Spring Boot'],
        badge: '校內專案',
        readmore: '/project/8',
        link: 'https://www.ntubimdbirc.tw/',
        showcase: [Img_8_1, Img_8_2]
    },
];