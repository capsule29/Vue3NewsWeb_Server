-- MySQL dump 10.13  Distrib 8.3.0, for Linux (x86_64)
--
-- Host: localhost    Database: corporate_news_release_system
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authority`
--
CREATE DATABASE corporate_news_release_system;

USE corporate_news_release_system;

DROP TABLE IF EXISTS `authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authority` (
  `authority_id` int NOT NULL AUTO_INCREMENT,
  `authority_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`authority_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authority`
--

LOCK TABLES `authority` WRITE;
/*!40000 ALTER TABLE `authority` DISABLE KEYS */;
INSERT INTO `authority` VALUES (1,'管理员'),(2,'编辑'),(3,'用户');
/*!40000 ALTER TABLE `authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `news_id` int DEFAULT NULL,
  `comment_content` varchar(255) DEFAULT NULL,
  `comment_created_time` varchar(255) DEFAULT NULL,
  `comment_praise_number` int DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `评论的用户` (`user_id`),
  KEY `评论的新闻` (`news_id`),
  CONSTRAINT `评论的新闻` FOREIGN KEY (`news_id`) REFERENCES `news` (`news_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `评论的用户` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,1,1,'第一条评价来自数据库内置添加','Tue Mar 26 2024 17:57:21 GMT+0800 (China Standard Time)',1),(2,1,1,'第二条评论来自Postman','Tue Mar 26 2024 17:57:21 GMT+0800 (China Standard Time)',0),(3,3,1,'第一','Wed Apr 10 2024 19:40:31 GMT+0800 (China Standard Time)',0),(9,1,6,'太强了','Thu Apr 11 2024 04:27:42 GMT+0800 (China Standard Time)',0),(10,1,6,'好好好','Thu Apr 11 2024 04:28:40 GMT+0800 (China Standard Time)',0),(17,1,6,'666','Thu Apr 11 2024 04:40:05 GMT+0800 (China Standard Time)',0),(20,1,1,'123','Thu Apr 11 2024 05:38:41 GMT+0800 (China Standard Time)',0),(22,1,6,'太强了','Thu Apr 11 2024 08:47:10 GMT+0800 (China Standard Time)',0),(23,1,1,'善意的评论','Sun Apr 14 2024 02:33:29 GMT+0800 (China Standard Time)',1),(30,2,50,'友善的评论','Wed May 15 2024 13:18:22 GMT+0800 (China Standard Time)',1);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment_praise`
--

DROP TABLE IF EXISTS `comment_praise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment_praise` (
  `comment_praise_id` int NOT NULL,
  `comment_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`comment_praise_id`),
  KEY `评论ID` (`comment_id`),
  KEY `用户ID` (`user_id`),
  CONSTRAINT `用户ID` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `评论ID` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`comment_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment_praise`
--

LOCK TABLES `comment_praise` WRITE;
/*!40000 ALTER TABLE `comment_praise` DISABLE KEYS */;
/*!40000 ALTER TABLE `comment_praise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `department_id` int NOT NULL AUTO_INCREMENT,
  `department_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`department_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'信息管理部'),(2,'技术运营部'),(3,'研发部'),(4,'市场营销部'),(5,'财务部'),(6,'行政人事部'),(9,'摸鱼部'),(12,'测试部门');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `news_id` int NOT NULL AUTO_INCREMENT,
  `news_title` varchar(255) DEFAULT NULL,
  `news_content` varchar(4096) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `news_writer_id` int DEFAULT NULL,
  `news_praise_number` int DEFAULT NULL,
  `news_star_number` int DEFAULT NULL,
  `news_created_time` varchar(255) DEFAULT NULL,
  `news_dps` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '部门能见度 在里面的是不能看到的',
  PRIMARY KEY (`news_id`),
  KEY `新闻的作者` (`news_writer_id`),
  CONSTRAINT `新闻的作者` FOREIGN KEY (`news_writer_id`) REFERENCES `user` (`user_id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'中兴通讯与中集集团达成战略合作','<p>&nbsp;&nbsp;&nbsp;&nbsp;2022年4月27日，中兴通讯股份有限公司（简称“中兴通讯”）与中国国际海运集装箱（集团）股份有限公司（简称“中集集团”）在深圳签署战略合作框架协议。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;中集集团董事长兼CEO麦伯良，中集集团和子公司领导潘进杰、陶宽、丁枫、黄松等和中兴通讯董事长李自学，中兴通讯副总裁陆平、乔梁、黄义华、乐康等出席签约仪式。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;中兴通讯是全球领先的综合通信信息解决方案提供商，拥有通信业界完整的、端到端的产品线和融合解决方案，通过全系列的无线、有线、业务、终端产品和专业通信服务，灵活满足全球不同运营商和政企客户的差异化及快速创新的需求。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;中兴通讯致力于成为“数字经济筑路者”，用创新的ICT科技，支撑全球数字化转型。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;中集集团是世界领先的物流装备和能源装备供应商，总部位于中国深圳。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;公司致力于在如下主要业务领域：集装箱、道路运输车辆、能源化工及食品装备、海洋工程、重型卡车、物流服务、空港设备等，提供高品质与可信赖的装备和服务。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;中集集团董事长兼CEO麦伯良表示：中集集团和中兴通讯都是非常优秀的全球化企业，在各自领域都有很强的竞争力，而且双方业务基本没有重合，互补性非常强，可以合作的内容和空间也随着双方交流的深入越来越丰富，把双方的优势联合在一起，一定可以实现双向赋能，对各自的业务能力和影响力提升有积极正面的作用。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;中兴通讯董事长李自学表示中集集团在管理和激励方面的能力令人印象深刻，双方已有的合作机会继续推进，同时在5G时代一定会催生出很多新的基于网络的应用，中兴通讯在网络方面积累了非常强的产品、方案和标准化能力，希望各行业能充分利用5G网络，中兴通讯可以和中集集团的行业能力结合起来，双方强强联合，一定能寻找到新的商业机会和增长空间。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;中兴通讯和中集集团作为各自领域的领先企业，本着“共同发展，合作共赢”的原则，经深入交流和协商，将开展广泛的战略合作，形成全面战略合作伙伴关系。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;根据协议双方将强化物流领域合作，并进一步开展在企业数字化、智能制造、数据中心、园区运营及智能化、绿色可循环载具和模块化建筑等领域的深入合作，并在企业管理方面开展深入交流。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;在产业数字化和绿色双碳的大背景下，未来双方将充分发挥各自的综合资源优势，加强工作联动，促进资源共享，实现优势互补，共同拓展双方的行业合作市场空间，实现互利共赢、高质量发展。</p>',2,1,2,'2024-03-26T09:39:03.006Z','9'),(6,'这条新闻只能摸鱼部和信息管理部才能看到','<p>这条新闻只能摸鱼部和信息管理部才能看到</p>',2,2,0,'2024-03-26T09:39:03.006Z','2,3,4,5,6,12'),(44,'世嘉飒美发布 23-24 财年财报：销售额 4678.96 亿日元 ','<p>DoNews5月10日消息，世嘉飒美控股（Sega Sammy Holdings）发布 2023-2024 财年（2024 年 3 月 31 日截止）财报，销售额 4678.96 亿日元（当前约 217.57 亿元人民币），同比增长 20.1%；营业利润 568.36 亿日元（当前约 26.43 亿元人民币），同比增长 21.5%。</p><p>其中娱乐业务销售额 3180 亿日元（当前约 147.87 亿元人民币），营业利润 289 亿日元（当前约 13.44 亿元人民币）。其中销售额增长来源于日本及亚洲消费市场的平稳表现及 Rovio 的加入；利润降低源于欧洲消费市场的表现。</p><p>世嘉飒美同期分享了该财年发布的几款游戏的数据：《人中之龙 8》：Metascore 评分 89，首发一周内全球销量超百万；《女神异闻录３ Reload》：Metascore 评分 89，首发一周内全球销量超百万；《圣兽之王》：Metascore 评分 87，全球累计销量超 50 万份；《足球经理 2024》：Metascore 评分 87，全球累计玩家数达 900 万。</p><p>世嘉还透露了未来几款游戏的计划：手游《Sonic Rumble》由世嘉与 Rovio 联合开发，今年冬季发布，5 月晚些时候开始内测；完美世界开发的手游《女神异闻录 5：夜幕魅影》正在考虑扩展至日本及全球市场；《暗喻幻想：ReFantazio》将于 10 月 11 日发售前开展大规模全球营销活动。<a href=\"https://www.sohu.com/?strategyid=00001&amp;spm=smpc.content.content.2.1715343354452vDajUYs\" target=\"_blank\"><i></i></a></p>',1,0,0,'Fri May 10 2024 20:16:13 GMT+0800 (China Standard Time)','9'),(45,'威光计划”校园行，汉威科技集团为童心点亮科学灯塔','<p style=\"text-align:center;\"><img src=\"https://www.prtoday.cn/attached/image/20240510/20240510172626_433.png\" alt=\"\" width=\"50%\"/></p><p>　　5月9日，汉威科技集团联合郑州大学实验小学举行“威光计划”校园行活动，为孩子们带来了丰富多彩的光学小实验，分享了激光技术在日常生活中的应用，还邀请孩子们上台互动演练，身临其境地感受和理解光学定律，并以激光家用可燃气体探测器的运用为例，进行燃气安全知识科普。</p><p style=\"text-align:center;\"><img src=\"https://www.prtoday.cn/attached/image/20240510/20240510172635_670.png\" alt=\"\" width=\"50%\"/></p><p>　　好玩又有趣的活动不仅开拓了孩子们的视野，激发了他们对科学的好奇心和兴趣，还培养了学生们的燃气安全意识，提升了他们的燃气安全应急处理能力。</p><p>　　近年来，家庭、工商业餐饮用户等燃气安全事故时有发生，燃气安全问题依然严峻，然而大众在燃气泄漏、起火爆炸等事故的应急处理方面仍缺乏经验。</p><p>　　如何判断是否存在燃气泄漏?</p><p>　　闻味道。燃气本身并没有味道，但燃气公司在民用供气中一般会添加臭味剂如四氢噻吩。如果闻到臭鸡蛋味，就可能是燃气泄漏;涂肥皂液。将肥皂液涂抹到燃气管道上，如果有鼓气泡现象，说明有燃气泄漏;观察燃气表。如果在所有燃气灶具、热水器都关闭的情况下，燃气表末位红框内数字依然走动，则可能发生燃气泄漏。</p><p>　　发现燃气泄漏怎么办?</p><p>　　立即开窗通风，关闭燃气阀门，切勿打开或关闭任何电器，疏散现场及周边人员到安全位置。离开燃气泄漏危险区域后，迅速通过电话等方式告知燃气公司抢险中心或拨打110;如果已经起火，对于初期火灾，可用灭火器、灭火毯进行灭火。如果缺乏灭火设备，或没有灭火经验，不要贸然救火，尽快撤离到安全位置并电话报警。</p><p>　　如何利用可燃气体探测器?</p><p>　　以汉威科技集团的激光家用可燃气体探测器为例，一旦监测到有微小燃气泄漏时，设备将发出语音报警，并通过短信、电话、APP等方式迅速将预警信息推送到用户手机上。与此同时，还可以联动燃气切断装置，在发出报警的同时，自动关闭燃气阀门，将危险扼杀在摇篮里。即使家中无人，也能自动处理燃气泄漏，将风险和可能损失降到最低。</p><p style=\"text-align:center;\"><img src=\"https://www.prtoday.cn/attached/image/20240510/20240510172643_605.png\" alt=\"\" width=\"50%\"/></p><p>　　值得注意的是，汉威科技集团的激光家用可燃气体探测器产品采用了先进的可调谐半导体激光吸收光谱技术(TDLAS)，检测非常精准，不受厨房中的水汽、醋、料酒等的影响，寿命可达十年。采用钢琴键式进气格栅设计，不仅防尘防污，还典雅大方，是领先市场的高端可燃气体探测器。</p><p>　　一台小小的可燃气体探测器，凝结着众多科技工作者的智慧，每一项领先性能的背后，都有大量科学知识与技术原理的支撑。高新科技始终是高质量发展的第一生产力，孩子是国家的未来与希望，从小培养孩子们对科学的兴趣，不断提升孩子们科学意识与科学实践能力，不只是教育工作者的责任，汉威科技集团作为创新型科技企业，也有能力和责任赋能校园科学教育，为孩子们点亮科学灯塔。</p>',2,1,1,'Fri May 10 2024 20:51:40 GMT+0800 (China Standard Time)','9'),(46,'中国品牌日聚焦：昆仑山矿泉水以卓越品质打造品牌亮眼名片','<p>十年寻水,以梦启航,昆仑山致力于让更多国人喝上高品质矿泉水,为推动中国矿泉水品牌走向世界接续奋斗。第八个中国品牌日来临,随着消费者对生活品质的提高与健康需求提升,品牌引领地位日益提升,昆仑山矿泉水坚守昆仑山玉珠峰唯一水源地,以对品质的极致追求与守护,积极践行社会责任,以向上面貌展现中国高品质矿泉水品牌的实力与担当。<br/></p><p><img src=\"http://resecms.gbxx123.com/img/202405/20240510161723_prw2mj71o1.png\" alt=\"6385095267801189456216091_副本.png\"/></p><p><strong>坚守黄金水源地,铸品牌之魂</strong></p><p>随着我国居民对健康饮水的关注度越来越高,对高品质饮用水的需求也愈发强烈。作为中国高品质矿泉水领导品牌,昆仑山矿泉水持续助力消费者饮水升级,满足消费者对品质生活的美好追求。昆仑山团队历经十年寻水、十年建设,依托6000米昆仑山玉珠峰黄金水源地,守护“净、矿、小、碱”四大黄金品质,不仅是对初心的守诺,更是希望打造属于中国人自己的矿泉水品牌,让世界感受中国品牌的魅力与中国文化的深厚底蕴。</p><p><img src=\"http://resecms.gbxx123.com/img/202405/20240510161743_ntsdtk9cq0.jpg\" alt=\"6385095268779705754794074_副本.jpg\"/></p><p>昆仑山视玉珠峰唯一水源地为品牌底色,以严苛的标准守护品质。无论是作为中国航天事业的战略合作伙伴,还是成为中国网球公开赛官方指定饮用水,昆仑山矿泉水荣获官方肯定,并作为运动、家庭、出行等各生活场景饮水陪伴,得到各界的认可。在此之前昆仑山矿泉水已成为多项国内外顶级赛事及高端会议的指定标配,并为中国饮用水行业首次赢得素有全球“水界奥斯卡”之称的“伯克利世界品水大赛”好水金奖。</p><p><strong>积极承担社会责任,注品牌之深</strong></p><p>品牌是企业乃至国家竞争力的综合体现。一直以来,昆仑山矿泉水都在积极履行社会责任,积极投身社会公益,促进行业发展,服务国家发展大局,并为国民饮水升级贡献昆仑山的力量。</p><p>在行业中,昆仑山矿泉水联合相关权威部门共同发布《中国居民饮水指南》,以水源地为核心维度建议建立科学统一的瓶装饮用水分级标准及标志,通过公益、营销、院士科普等领域不断加大健康饮水知识科普宣传,持续推动国民饮水健康升级,促进行业向透明化、公开化、品质化发展。</p><p><img src=\"http://resecms.gbxx123.com/img/202405/20240510161800_g0f7q3ikm8.png\" alt=\"6385095284812425528446034_副本.png\"/></p><p>在环境保护方面,昆仑山矿泉水以绿色发展战略引领行业发展,持续十余年开展雪山寻源、三江源保护等多元化的环保公益活动,带动社会各界力量共同关注水源地生态保护和水资源合理利用。</p><p>以黄金水源地铸品牌内核,昆仑山矿泉水正积极拓展其品牌边界,以国民为本,以品牌高质量发展满足国民饮水升级需求,持续擦亮“中国好水”品牌名片,并向打造世界级矿泉水品牌不断迈进。</p>',2,0,0,'Fri May 10 2024 20:55:57 GMT+0800 (China Standard Time)','9'),(48,'外资车企加码在华投资 共享中国机遇','<p>新华社沈阳5月9日电（记者孙仁斌、于也童、刘艺淳）8日晚间，辽宁沈阳华晨宝马大东工厂总装线上，一辆磨砂纯灰色创新纯电动BMW i5汽车缓缓驶出，宝蓝色的电子屏幕上，“600万辆”字样闪烁，现场掌声雷动。</p><p style=\"text-align:center;\"><img src=\"http://resecms.gbxx123.com/img/202405/20240510134650_pehmqgnw9a.jpg\" alt=\"截图20240510134521.jpg\" width=\"50%\"/></p><p>华晨宝马第600万辆整车下线仪式现场拍摄的客户交车仪式（5月8日摄）。新华社记者 潘昱龙 摄</p><p>　　在德国宝马集团进入中国市场的第30个年头，华晨宝马汽车有限公司迎来第600万辆整车下线。</p><p>　　不久前，宝马集团刚宣布追加200亿元投资用于升级其在沈阳的生产基地，并宣布2026年，瞄准数字化、电动化的宝马“新世代”车型将在沈阳下线。</p><p>　　“中国今日之动向，将决定未来世界之方向。”宝马集团董事长齐普策说。</p><p>　　大众汽车集团在华设立德国总部以外最大研发中心，聚焦智能网联汽车研发；特斯拉上海超级工厂成为特斯拉在全球主要的出口中心，2023年在其全球产能中占比过半……最近一段时间，诸多在华外资车企不断加码中国，共享更多中国机遇。</p><p>　　真金白银投下“信任票”，背后是中国超大规模的市场。统计数据显示，2023年，中国汽车产销量分别达3016.1万辆和3009.4万辆，分别增长11.6%和12%。其中，新能源汽车产销量分别达958.7万辆和949.5万辆，分别增长35.8%和37.9%。</p><p>　　德国权威汽车经济学专家、波鸿汽车研究院院长费迪南德·杜登赫费尔表示，从全球范围来看，消费者对绿色低碳的追求让新能源汽车市场需求巨大，中国电动汽车市场远未饱和，将继续保持比欧洲以及美国市场更快、更强劲的增长势头。</p><p>　　中国汽车产销量已连续15年位居全球第一，新能源汽车产销量连续9年位居全球第一，出口量去年再创新高。</p><p style=\"text-align:center;\"><img src=\"http://resecms.gbxx123.com/img/202405/20240510134702_ohqafgohre.jpg\" alt=\"截图20240510134534.jpg\" width=\"50%\"/></p><p>华晨宝马第600万辆整车下线仪式现场（5月8日摄）。新华社记者 潘昱龙 摄</p><p>　　宝马集团财报显示，2023年，宝马集团向全球客户交付超过37.5万辆纯电动车，其中向中国交付约10万辆纯电动车，占比超过25%。2023年，大众汽车集团纯电动车型在中国市场的交付量约为19.18万辆，同比增长23.2%。梅赛德斯-奔驰也强调2023年纯电车型在华交付“超翻番”。</p><p>　　随着中国产业结构不断优化升级，以高端化、智能化、绿色化为特征的新质生产力快速发展，为中国汽车市场带来新的机遇。众多本土科创企业与汽车行业擦出新火花，推动汽车产业智能化转型。</p><p>　　“汽车产业的电动化、智能化、网联化正加速融合，引领全球产业变革。”中汽协常务副会长兼秘书长付炳锋说，在电动化、数字化赋能下，新的产业生态和竞争格局将加速形成。</p><p>　　在新能源汽车领域，中国快速发展的消费市场、完善的供应链体系、创新的研发环境以及优秀的人才培养，为外资在华发展带来一轮新机遇。</p><p>　　“中国大力发展新质生产力，与宝马集团的核心战略非常契合，为进一步深化中德合作提供了广阔空间。”齐普策说。</p><p>　　从第10万辆到第100万辆整车下线，华晨宝马用了7年；而第500万辆到第600万辆整车下线只用了15个月。</p><p>　　百万辆整车下线间距不断缩短，背后是宝马集团在中国建立的德国之外最大的研发和数字化体系。目前，沈阳已成为宝马集团全球最大的生产基地和最重要的新能源汽车中心之一。</p><p style=\"text-align:center;\"><img src=\"http://resecms.gbxx123.com/img/202405/20240510134709_1s67qljwq2.jpg\" alt=\"截图20240510134546.jpg\" width=\"50%\"/></p><p>4月26日拍摄的辽宁省沈阳市与宝马集团深化战略合作签约仪式。新华社记者 潘昱龙 摄</p><p>　　和宝马一样，越来越多外资车企通过扩大在华投资，增强其本土化研发创新能力和新能源汽车制造能力，以应对市场竞争，抓住中国机遇。</p><p>　　大众汽车(中国)科技有限公司正成为大众落实产品中国本土化的中枢，其将与大众在华合资企业紧密合作，承担核心开发任务。该公司正在开发大众首个专为中国市场打造的电动汽车架构，从2026年起，大众集团将依托该平台开发不少于四款紧凑级入门电动车型。</p>',2,1,0,'Fri May 10 2024 20:58:33 GMT+0800 (China Standard Time)','-1'),(49,'党建与安全生产深度融合 促进工程高质量建设','<p>近日来，中铁上海局四公司各单位党组织围绕“党建+安全生产”，开展系列活动，将党组织战斗堡垒和党员先锋模范作用发挥在安全生产工作的全过程，持续推进支部党建与安全生产深度融合。</p><p>在安全生产管理中，该公司各项目党支部以“党建+安全”生产责任区为抓手，把习近平总书记关于安全生产重要论述、安全生产知识等内容纳入支部“三会一课”、主题党日活动的重要内容，通过党员带头学文件、谈安全、讲案例，引导支部党员在安全生产中进一步发挥先锋模范作用，实现组织生活与安全管理紧密融合，营造“全员要安全”的大环境，绷紧“全员抓安全”的警戒线，锻炼“全员抓安全”的真本领。</p><p>各单位成立安全管理小组，设立“党员先锋岗”，建立双重预防体系，开展危险源辨识与评价，实现安全管理全覆盖。规范安全生产行为，狠抓现场安全管理，党员干部深入现场靠前指挥，将安全生产压力传递到现场一线。开展安全隐患专项整治行动，进一步夯实安全基础、强化安全管理、筑牢安全防线。</p><p>各单位党组织还组织开展常态化安全教育，开展贯穿式安全培训，对新员工开展“定制化”安全教育，同时利用安全宣传栏、安全警示牌、工作群、现场宣讲、标语、现场展板等宣传载体，强化安全生产“红线意识”，大力营造人人讲安全、天天讲安全、事事讲安全、处处讲安全的浓厚氛围，充分调动了员工的安全生产积极性。（刘月）</p>',2,0,1,'Fri May 10 2024 20:59:59 GMT+0800 (China Standard Time)','-1'),(50,'新冠变异株KP.2在中国流行情况如何？张文宏：无需过度担忧','<p>从全球范围来看，一种被命名为KP.2的新冠变异株正在蔓延。2月以来，由于KP.2在全球流行毒株中的占比增长较快，世界卫生组织于5月3日将KP.2列入“需要监测的变异株”。</p><p>据国家疾控局昨日（14日）发布的新冠病毒KP.2变异株相关情况，截至5月12日，在我国本土病例中共监测到25条KP.2序列。每周报告的本土序列中KP.2占比在0.05%~0.30%之间，处于极低水平。</p><p>国家疾控局表示，我国现阶段的主要流行株构成比排在前三位的为JN.1、JN.1.16和JN.1.4，3月11日首次从广东本土病例中监测到KP.2变异株。</p><p>Q1什么是KP.2变异株？</p><p>KP.2是新冠病毒奥密克戎JN.1变异株的第三代亚分支，也是JN.1变异株中具有较强传播优势的一个亚分支，于2024年1月2日在印度采集的样本中首次监测到。目前尚未检索到KP.2的致病力和免疫逃逸能力较当前流行的JN.1变异株发生明显改变的报道。</p><p>Q2国际上KP.2变异株的流行情况如何？</p><p>目前，JN.1变异株仍为全球优势流行株。今年以来，KP.2亚分支在全球流行毒株中的占比逐渐增加，从1月上旬的0.16%增长至5月上旬的14%左右。近期，部分国家KP.2亚分支流行程度相对较高，占比为10%~30%。</p><p>据美国CDC公布的最新数据，截至5月11日的两周内，KP.2变异株占到美国新冠病毒感染的28%，4月中旬这一比例仅为6%。</p><p>张教授点评</p><p style=\"text-align:center;\"><img src=\"https://n.sinaimg.cn/sinakd20240515s/100/w1000h1500/20240515/718f-b5c8f90827986d122df35d3533768c10.png\" alt=\"张文宏\" width=\"30%\"/></p><p style=\"text-align:center;\">张文宏</p><p>新冠病毒处于持续的变异中，但仍很难突破奥密克戎家族。就像流感病毒持续处于变异之中一样，变异是病毒在宿主免疫压力下生存的常态。</p><p>国家传染病医学中心联合全国79家医院数据，平台监测证实新冠奥密克戎毒株的变异与波动。2022年11月至2023年4月初以BA.5.2和BF.7为主，自2023年4月初开始XBB分型逐步增多，2023年7月起，临床样本分型以XBB分型为主，EG.5增长较快，8月上旬新增发现FY.3.1和FL.13.2。世卫组织提到的“需要留意的”变异株（Variants Of Interest，VOI）中XBB.1.16检出较多（包括FU.1），“监视下的”变异株（Variants under monitoring，VUMs)中XBB.1.9.2及其亚型在2023年下半年占比较多，8月下旬检出EG.5.1的子代EG.5.1.1，9月上旬检出EG.5.1.1的子代HK.3，且HK.3在9-12月比例逐渐增加。10月下旬出现HK.3的子代HK.3.1及HK.3.2。2024年1月起出现JN.1，并在1-3月检出均在70%以上，出现JN.1.1及JN.6等分型，截至4月30日，仍以JN.1检出为主。</p><p>国传中心对地下污水也进行了检测，污水中新冠核酸浓度监测显示， 2024年1月10日前后有一个新冠高峰，随后达到感染高峰平台期，自3月27日开始出现下降趋势，4月中旬至今维持在3×104拷贝/L 水平，5月13日最后一次采样的浓度为2.95×104拷贝/L。并有进一步下降的趋势，且该数值与第二、三轮感染高峰的间隔期浓度相似。</p><p>而在此期间，全国的新冠临床疾病负担并未出现大的波动，仍处于正常波动中。</p><p>当前监测数据提示，我国当前流行的新冠病毒仍属奥密克戎JN.1为主，而当前国际流行关注到了JN.1的子代亚型KP.2，截至5月12日，在我国本土病例中共监测到25条KP.2序列。每周报告的本土序列中KP.2占比在0.05%~0.30%之间，仍处于极低水平。后续虽然该亚型仍然会有出现比例增高的可能性，但是如同国际上该亚型虽然从今年3月起检测到，美国CDC监测提示截至5月11日，KP.2占比上升至28.2%，但急诊就诊、住院人数以及死亡人数来看，未见人数趋势的明显上升，因此可以判断KP.2后续的实际临床风险有限。</p><p>未来我们仍然会强化对新冠以及其他呼吸道病原体的监测，出现新病毒亚型将是常态，无需过度担忧。</p>',2,0,1,'Wed May 15 2024 13:15:42 GMT+0800 (China Standard Time)','9'),(51,'在此修改标题','请修改内容',2,0,0,'Wed May 15 2024 15:15:18 GMT+0800 (China Standard Time)','-1');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news_praise`
--

DROP TABLE IF EXISTS `news_praise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news_praise` (
  `praise_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `news_id` int DEFAULT NULL,
  PRIMARY KEY (`praise_id`) USING BTREE,
  KEY `点赞的用户` (`user_id`),
  KEY `点赞的新闻` (`news_id`),
  CONSTRAINT `点赞的新闻` FOREIGN KEY (`news_id`) REFERENCES `news` (`news_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `点赞的用户` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news_praise`
--

LOCK TABLES `news_praise` WRITE;
/*!40000 ALTER TABLE `news_praise` DISABLE KEYS */;
INSERT INTO `news_praise` VALUES (13,3,48),(16,3,45),(17,1,1);
/*!40000 ALTER TABLE `news_praise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news_star`
--

DROP TABLE IF EXISTS `news_star`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news_star` (
  `star_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `news_id` int DEFAULT NULL,
  PRIMARY KEY (`star_id`),
  KEY `收藏的用户` (`user_id`),
  KEY `收藏的新闻` (`news_id`),
  CONSTRAINT `收藏的新闻` FOREIGN KEY (`news_id`) REFERENCES `news` (`news_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `收藏的用户` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news_star`
--

LOCK TABLES `news_star` WRITE;
/*!40000 ALTER TABLE `news_star` DISABLE KEYS */;
INSERT INTO `news_star` VALUES (141,3,1),(142,3,45),(150,1,1);
/*!40000 ALTER TABLE `news_star` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `authority_id` int DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `department_id` int DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `用户的权限` (`authority_id`),
  KEY `用户的部门` (`department_id`),
  CONSTRAINT `用户的权限` FOREIGN KEY (`authority_id`) REFERENCES `authority` (`authority_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `用户的部门` FOREIGN KEY (`department_id`) REFERENCES `department` (`department_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,1,'admin','43442676c74ae59f219c2d87fd6bad52',1),(2,2,'editor','993c780e88c890024134f911c98779f7',3),(3,3,'user','e6ec8e78f1d07cc4a687be4a0c3b8400',2),(6,1,'Capsule','75cb9dfb4299f8c2b93fcbb33e3ca864',4),(7,2,'Youzi','4831ae13cbb72a0312433a810355e3f9',4),(8,3,'moyu','d36f7fb220072b6427d504b8a07a3ea2',9);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visited`
--

DROP TABLE IF EXISTS `visited`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visited` (
  `visited_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `news_id` int DEFAULT NULL,
  `visited_time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`visited_id`),
  KEY `是谁看的` (`user_id`),
  KEY `看的新闻` (`news_id`),
  CONSTRAINT `是谁看的` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `看的新闻` FOREIGN KEY (`news_id`) REFERENCES `news` (`news_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visited`
--

LOCK TABLES `visited` WRITE;
/*!40000 ALTER TABLE `visited` DISABLE KEYS */;
/*!40000 ALTER TABLE `visited` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-17 16:48:41
