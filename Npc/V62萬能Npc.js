/*
 宗達手
 2015/2/3
 */

var status = 0;
var a4_;
var a4;
var a3_;
var a3;
var a2_;
var a2;
var a1_;
var a1;
var select_;
var select;
var selec_;
var selec;
var sele;
var sele_;
var sel_;
var sel;
var se;
var s;
var choice;

//練公圖
var maps__ = Array(682000403, 251010402, 220060301, 240040600, 250020000, 230040400, 910500000, 910300000, 680010000, 670000100, 980010020, 682000304, 541020600);
var mapsname__ = Array("#r扯線娃娃(#b適合中等玩家)", "#r紅鼻子海盜團老巢2 (#b適合中等玩家)", "#r亡靈海盜船(#b適合中高等玩家)", "#r主巢穴山峰(#b適合高等玩家)", "#r初級修煉場(#b50~70)", "#r鯊魚(#b適合中高等玩家)", "#r小巴(#b適合中高等玩家)", "#r達克魯的訓練場(#b適合中高等玩家)", "#r練功地圖(#b1~30)", "#r練功地圖2(#b30~50)", "#r死靈地圖(#b適合中高等玩家)", "#rBOSS冰龍地圖(#b適合高等玩家)", "#r杜庫(#b需愛你或是6個WZ)");
//村莊圖
var maps_ = Array(120000000, 102000000, 101000000, 100000000, 103000000, 680000000, 200000000, 110000000, 221000000, 222000000, 230000000, 211000000, 220000000, 260000000, 250000000, 105040300, 600000000, 682000000, 800000000, 801000000, 240000000, 270000100, 970000000, 130000200, 702100000, 501000000, 802000101, 742000000);
var mapsname_ = Array("#b鯨魚號#k", "#b勇士之村#k", "#b魔法森林#k", "#b弓箭手村#k", "#b墮落城市#k", "#b結婚小鎮#k", "#b天空之城#k", "#b黃金海岸#k", "#b地球防禦本部#k", "#b童話村#k", "#b水世界#k", "#b冰原雪域#k", "#b玩具城#k", "#b沙漠#k", "#b武林神村#k", "#b奇幻村#k", "#b新葉城#k", "#b鬧鬼宅門口#k", "#b江戶村#k", "#b昭和村#k", "#b神木村#k", "#r時間神殿(須有愛你主城市或是特殊wz才能進)#k", "#r拍照聖地(條件同上)#k", "#r耶雷弗(條件同上)#k", "#r少林寺(條件同上)#k", "#r黃金寺廟(條件同上)#k", "#r未來東京(條件同上)#k", "#r台北101(條件同上)#k");

//BOSS圖
var selectedMap = 910000000;
var maps = Array(220080000, 800020130, 501030104, 800040410, 240040700, 211042300, 270050000);
var mapsname = Array("#r拉圖斯#k", "#r天狗", "#r六手邪神#k", "#r天皇#k", "#r暗黑龍王", "#r殘暴炎魔", "#r皮卡啾#k");

//降等npc
var slot;

//職業
var jobName;
var job;

//新手武器
var weapon = Array(1302000, 1322005, 1302017, 1302132);
//最新椅子
var chair = Array(3010281, 3010877, 3010879, 3010754, 3010659);
//最新點裝
var equip = Array(1052684, 1702493, 1702494, 1052574, 1052644);



//整形代碼------------------
var G_beauty = 0;
var G_haircolor = Array();
var G_skin = Array(0, 1, 2, 3, 4);
var G_hair = Array(34290, 34280, 34270, 34260, 34250, 34240, 34230, 34300, 32130, 34200, 34220, 34120, 34130, 34150, 34160, 34170, 34180, 34110, 33020, 33010, 31980, 31970, 31960, 31900, 34010, 33030, 34040, 34090, 34100, 31850, 31820, 31810, 31800, 31790, 31780, 31770, 31760, 31750, 31740, 31680, 31400, 31120, 31110, 31090, 31080, 31170, 31180, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31910, 31920, 31930, 31940, 31950, 33000, 34000);
var G_hairnew = Array();
var G_face = Array(21029, 21035, 21034, 21030, 21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21016, 21017, 21018, 21019, 21020, 21021, 21022);
var G_facenew = Array();
var G_colors = Array();
//女性外觀　

var B_beauty = 0;
var B_haircolor = Array();
var B_skin = Array(0, 1, 2, 3, 4);
var B_hair = Array(32040, 32030, 33220, 33210, 33200, 33080, 33100, 33110, 33120, 33140, 33150, 33160, 33170, 32120, 32110, 32100, 32090, 32080, 32070, 32060, 32050, 30960, 30970, 30980, 33130, 34140, 33030, 33090, 30920, 30990, 30880, 30850, 30840, 30100, 30800, 30730, 30700, 30680, 30660, 30670, 30760, 30770, 30790, 30800, 30810, 30820, 30950, 30940, 30930, 30910, 30900, 30890, 30870, 30860);
var B_hairnew = Array();
var B_face = Array(20037, 20036, 20032, 20031, 20029, 20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023);
var B_facenew = Array();
var B_colors = Array();
//男性外觀

//整形代碼------------------





function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var clickme = "#r點#b我#l\r\n\r\n";
    var clickme2 = "#b點#r我#l\r\n\r\n";
    var hairfacetext = "性皇家髮型/臉形";
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#e#g【功能區】\r\n\r\n" +
                    "#L0#" + clickme +
                    "#g【職業及技能....等功能】\r\n\r\n" +
                    "#L1#" + clickme +
                    "#g【髮型/髮色/臉形更換】\r\n\r\n " +
                    "#L2# #r女" + hairfacetext + "\r\n" +
                    "#L3# #b男" + hairfacetext + "#r<Hot>#l\r\n\r\n" +
                    "#g【購買最新點裝】\r\n\r\n" +
                    "#L4#" + clickme2 +
                    "#g【新開發功能】\r\n\r\n" +
                    "#L5##r怪物施放#l\r\n\r\n" +
                    "#g【回報中心】\r\n" +
                    "#b(#g若無#rGM#g在此地圖，請Rc通知之橘頭以上之管理員#b)\r\n\r\n" +
                    "#L6##b點#r我#b傳送去回報中心");
        } else if (status == 1) {
            s = selection;
            if (s >= 0 && s <= 6) {
                var g = cm.getPlayer().getGender();
                if (s == 0) {
                    cm.sendSimple("#e#g功能區\r\n\r\n" +
                            "#L0##b【#d查詢自己當前資訊#b】\r\n" +
                            "#L1##b【#r最新椅子#b】\r\n" +
                            "#L2##b【性別變更】\r\n" +
                            "#L3##b【團體組隊】\r\n" +
                            "#L4##b【兌換貨幣】\r\n" +
                            "#L5##b【地圖傳送】\r\n" +
                            "#L6##b【新手武器】\r\n" +
                            "#L7##b【#r創建公會#b】\r\n" +
                            "#L8##b【寵物領取】\r\n" +
                           // "#L9##b【職業裝備】\r\n" + // 無
                            "#L10##b【數值重製】\r\n" +
                            "#L11##b【廣播購買】\r\n" +
                            "#L12##b【倉庫管理】\r\n" +
                            "#L13##b【玩具販賣】\r\n" +
                            "#L14##b【#r高屬性裝#b】\r\n" //+
                         //   "#L15##b【#r高等裝備#b及#r招換物#b購買#k】\r\n" + // 最後的#k應該是他們多用的吧 不知道0.0
                         //   "#L16##b【遠征隊】\r\n"
                                    );//該服選項無用 
                    se = 0;
                } else if (s == 1) {
                    var j = "#b轉職#r";
                    cm.sendSimple("#g職業\r\n\r\n" +
                            "#L0#" + j + "(1轉)\r\n" +
                            "#L1#" + j + "(2轉)\r\n" +
                            "#L2##b技能全滿\r\n" +
                            "#L3##b調降等級服務");
                    se = 1;
                } else if (s == 2) {
                    if (g == 0) {
                        cm.sendOk("我能讓#r女性VIP#k改頭換面，如果你是男性的話就去找我的搭檔!");
                        cm.dispose();
                        return;
                    }
                    cm.sendSimple("嘿!我是為能到達這裡的#r女性VIP會員#k服務的！你想有怎樣的改變?\r\n#L0#膚色#l\r\n#L1#髮型#l\r\n#L2#頭髮顏色#l\r\n#L3#眼睛#l\r\n#L4#眼睛顏色#l");
                    se = 2;
                } else if (s == 3) {
                    if (g == 1) {
                        cm.sendOk("我能讓#r男性VIP會員#k改頭換面，如果你是女性的話就去找我的搭檔!");//原本為 "你不是男生= =請找另一位GM"  差太多了吧!?
                        cm.dispose();
                        return;
                    }
                    cm.sendSimple("你好!在這裡我可以幫你改變造型,請問你需要什麼服務?\r\n#L0#膚色#l\r\n#L1#髮型#l\r\n#L2#髮色#l\r\n#L3#眼型#l\r\n#L4#眼色#l");
                    se = 3;
                } else if (s == 4) {
                    var t = "#h #\r\n 您好，我們最新的點裝，現在只要一個只要10楓鑽\r\n要購買請按Enter鍵\r\n";
                    for (var i = 0; i < equip.length; i++) {
                        t += "\r\n#L" + i + "##v" + equip[i] + "##t" + equip[i] + "##l";
                    }
                    cm.sendSimple(t);
                    se = 4;
                } else if (s == 5) {
                    cm.sendSimple("使用前請記得先到指定洞，不然ＮＰＣ會無效果\r\n\r\n#L0#施放龍王(請先至自由一洞)");
                    se = 5;
                } else if (s == 6) {
                    cm.getPlayer().changeMap(240070000);
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }
        } else if (status == 2) {
            if (se == 0) {
                var h = cm.getHour();
                var m = cm.getMin();
                var s = cm.getSec();
                var la = h + "時" + m + "分" + s + "秒";
                if (selection == 0) {
                    cm.sendOk("#k#e您當前遊玩的私服為#n#r永夜家族\r\n" + //原版為sendYesNo
                            "#k#e啟動本功能的時間為#n#r" + la +
                            "\r\n#k#e您當前的轉生次數為:#n#r " + cm.getPlayer().getReborns() +
                            "\r\n#k#e當前等級為:#r#n" + cm.getPlayer().getLevel() +
                            "\r\n#k#e剩餘能力點數為#r#n" + cm.getPlayer().getRemainingAp() +
                            "\r\n#k#e當前地圖代碼為#n#r" + cm.getPlayer().getMapId() +
                            "\r\n#k#e當前身上錢的數量為#r#n" + cm.getPlayer().getMeso());
                    cm.dispose();
                } else if (selection == 1) {
                    var t = "#h # 您好，現在開放領取免費椅子\r\n需要的話按Enter鍵就可領取\r\n";
                    for (var i = 0; i < chair.length; i++) {
                        t += "\r\n#L" + i + "##v" + chair[i] + "##t" + chair[i] + "##l";
                    }
                    cm.sendSimple(t);
                    sel_ = 0;
                } else if (selection == 2) {
                    cm.sendYesNo("#e#b就知道你對現在的性別非常不滿意!!\r\n" +
                            "我現在給你兩條路\r\n" +
                            "按#r確認#b變成另外一個性別\r\n" +
                            "不要就#r取消#b走人!!");
                    sel_ = 1;
                } else if (selection == 3) {
                    var selStr = "選擇你的目的地.#b";
                    for (var i = 0; i < maps.length; i++) {
                        selStr += "\r\n#L" + i + "#" + mapsname[ i ] + "";
                    }
                    cm.sendSimple(selStr);
                    sel_ = 2;
                } else if (selection == 4) {
                    cm.sendSimple("我是#r貨幣兌換人員 #d這位玩家! 您需要對換貨幣嗎?:\r\n\r\n" +
                            "#L0#20億楓幣 = 1個#r金鑽\r\n\r\n" +
                            "#L1#1個金鑽 = 20億楓幣");
                    sel_ = 3;
                } else if (selection == 5) {
                    cm.sendSimple("我可以進行地圖傳送，請問要取哪裡呀？\r\n\r\n#r" +
                            "#L0#村莊\r\n" +
                            "#L1#王圖\r\n" +
                            "#L2#練功專區\r\n");
                    sel_ = 4;
                } else if (selection == 6) {
                    var t = "#e我是新手裝兌換人員\r\n " +
                            "#d這位玩家!\r\n" +
                            "需要兌換0等裝備嗎?\r\n";
                    for (var i = 0; i < weapon.length; i++) {
                        t += "\r\n#b一個#L" + i + "##v" + weapon[i] + "##t" + weapon[i] + "##l";
                    }
                    cm.sendSimple(t);
                    sel_ = 5;
                } else if (selection == 7) {
                    cm.warp(200000301);
                    cm.dispose();
                } else if (selection == 8) {
                    cm.sendSimple("您好，我是寵物發放員 你要哪隻?~#k\r\n#k#L0##d#i5000000##k#k#L1##d#i5000001##k#k#L2##d#i5000002##k#k#L3##d#i5000003##k#k#L4##d#i5000004##k#k#L5##d#i5000005##k#k\r\n#L6##d#i5000006##k#k#L7##d#i5000007##k#k#L8##d#i5000008##k#k#L9##d#i5000009##k#k#L10##d#i5000010##k#k#L11##d#i5000011##k#k\r\n#L12##d#i5000012##k#k#L13##d#i5000013##k#k#L14##d#i5000014##k#k#L15##d#i5000016##k#k#L16##d#i5000017##k#k#L17##d#i5000018##k#k\r\n#L18##d#i5000020##k#k#L19##d#i5000021##k#k#L20##d#i5000022##k#k#L21##d#i5000023##k#k#L22##d#i5000024##k#k#L23##d#i5000025##k#k\r\n#L24##d#i5000026##k#k#L25##d#i5000027##k#k#L26##d#i5000029##k#k#L27##d#i5000030##k#k#L28##d#i5000031##k#k#L29##d#i5000032##k#k\r\n#L30##d#i5000033##k#k#L31##d#i5000036##k#k#L32##d#i5000041##k#k#L33##d#i5000048##k#k#L34##d#i5000049##k#k#L35##d#i5000050##k#k\r\n#L36##d#i5000051##k#k#L37##d#i5000052##k#k#L38##d#i5000053##k#k#L39##d#i5000058##k#k#L40##d#i5000054##k#k#L41##d#i5000046##k#k\r\n#L42##d#i5000043#");
                    sel_ = 6;
                } else if (selection == 10) {
                    cm.sendSimple("(首先我要說如果重製以後,後悔GM不幫忙)嗨~加能力值很煩惱嗎?看看這!(#r#k) \b\r\n#L0#全部恢復#l\r\n#L1#回復力量#l\r\n#L2#回復敏捷#l\r\n#L3#回復智力#l\r\n#L4#回復幸運#l\r\n#L5#全部加到力量#l\r\n#L6#全部加到敏捷#l\r\n#L7#全部加到智力#l\r\n#L8#全部加到幸運");
                    sel_ = 7;
                } else if (selection == 11) {
                    cm.sendSimple("您好，我是#e#d喇叭販賣商人#k#n\r\n#e#d請問您要買哪一種喇叭?#k#n\r\n#r#L2##e#i5390000# 怒火心情喇叭 #n#l#b1000個(1楓幣)#k\r\n#r#n #r#L5##e#i5390001# 白雲朵朵心情喇叭 #n#l#b1000個(1楓幣)#k\r\n#L8##e#i5390002# 戀愛心情喇叭 #n#l#b1000個(1楓幣)#k\r\n#r#L11##e#i5076000# 道具喇叭 #n#l#b1000個(1楓幣)#k\r\n#r#L12##e#i5390004# #t5390004# #n#l#b1000個(1楓幣)#k");
                    sel_ = 8;
                } else if (selection == 12) {
                    cm.openNpc(1022005);
                } else if (selection == 13) {
                    cm.openShop(13017);
                    cm.dispose();
                } else if (selection == 14) {
                    cm.sendSimple("#e#b我是高數值裝備兌換人員\r\n\r\n" +
                            "#L0##k1個楓鑽= #v1112942##r+200\r\n" +
                            "#L1##k10個楓鑽= #v1112942##r+1000\r\n" +
                            "#L2##k20個楓鑽= #v1112942##r+2000\r\n" +
                            "#L3##k1個楓鑽= #v1052723##r+200\r\n" +
                            "#L4##k10個楓鑽= #v1052723##r+1000\r\n" +
                            "#L5##k20個楓鑽= #v1052723##r+2000\r\n"
                            );
                    sel_ = 9;
                }
                sel = 0;
            } else if (se == 1) {
                if (selection == 0) {
                    cm.sendSimple("這裡為一轉轉職，你想成為：\r\n#r #L1#劍士#l   #L11#魔法師#l   #L21#弓箭手#l   #L28#盜賊#l   #L35#海盜#l");
                    sel_ = 0;
                } else if (selection == 1) {
                    var j = cm.getPlayer().getJob().getId();
                    if (j == 0) { //初心者
                        cm.sendOk("第二次轉職的條件：完成#r1轉#k且達到#r30級#k。");
                        cm.dispose();
                        return;
                    } else if (j == 100 || j == 200 || j == 300 || j == 400 || j == 500) {
                        if (cm.getPlayer().getLevel() < 30) {
                            cm.sendOk("你還沒達到#r30級#k。");
                            cm.dispose();
                            return;
                        }
                        switch (j) {
                            case 100 :
                                cm.getPlayer().setJob(110);
                                break;
                            case 200:
                                cm.getPlayer().setJob(210);
                                break;
                            case 300:
                                cm.getPlayer().setJob(310);
                                break;
                            case 400:
                                cm.getPlayer().setJob(410);
                                break;
                            case 500:
                                cm.getPlayer().setJob(510);
                                break;
                        }
                        cm.sendOk("轉職成功唷");
                        cm.dispose();
                        return;
                    } else if (j == 110 || j == 210 || j == 310 || j == 410 || j == 510) {
                        if (cm.getPlayer().getLevel() < 70) {
                            cm.sendOk("你還沒達到#r70級#k。");
                            cm.dispose();
                            return;
                        }
                        switch (j) {
                            case 110 :
                                cm.getPlayer().setJob(111);
                                break;
                            case 210:
                                cm.getPlayer().setJob(211);
                                break;
                            case 310:
                                cm.getPlayer().setJob(311);
                                break;
                            case 410:
                                cm.getPlayer().setJob(411);
                                break;
                            case 510:
                                cm.getPlayer().setJob(511);
                                break;
                        }
                        cm.sendOk("轉職成功唷");
                        cm.dispose();
                        return;
                    } else if (j == 111 || j == 211 || j == 311 || j == 411 || j == 511) {
                        if (cm.getPlayer().getLevel() < 120) {
                            cm.sendOk("你還沒達到#r120級#k。");
                            cm.dispose();
                            return;
                        }
                        switch (j) {
                            case 111 :
                                cm.getPlayer().setJob(112);
                                break;
                            case 211:
                                cm.getPlayer().setJob(212);
                                break;
                            case 311:
                                cm.getPlayer().setJob(312);
                                break;
                            case 411:
                                cm.getPlayer().setJob(412);
                                break;
                            case 511:
                                cm.getPlayer().setJob(512);
                                break;
                        }
                        cm.sendOk("轉職成功唷");
                        cm.dispose();
                        return;
                    }
                    sel_ = 1;
                } else if (selection == 2) {
                    cm.maxSkills();
                } else if (selection == 3) {
                    cm.sendGetNumber("請問你要下降幾等?. \r\n一次需要10W唷 ", 1, 1, 250);
                    sel_ = 2;
                }
                sel = 1;
            } else if (se == 2) {
                if (selection == 0) {
                    G_beauty = 1;
                    cm.sendStyle("選擇你喜歡的?", G_skin);
                } else if (selection == 1) {
                    G_beauty = 2;
                    G_haircolor = Array();
                    for (var i = 0; i < G_hair.length; i++) {
                        G_haircolor.push(G_hair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                    cm.sendStyle("選擇你喜歡的?", G_haircolor);
                } else if (selection == 2) {
                    G_beauty = 3;
                    G_haircolor = Array();
                    var current = parseInt(cm.getChar().getHair() / 10) * 10;
                    for (var i = 0; i < 8; i++) {
                        G_haircolor.push(current + i);
                    }
                    cm.sendStyle("選擇你喜歡的?", G_haircolor);
                } else if (selection == 3) {
                    G_beauty = 4;
                    G_facenew = Array();
                    for (var i = 0; i < G_face.length; i++) {
                        G_facenew.push(G_face[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                    cm.sendStyle("選擇你喜歡的?", G_facenew);
                } else if (selection == 4) {
                    G_beauty = 5;
                    var current = cm.getChar().getFace() % 100 + 21000;
                    G_colors = Array();
                    G_colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
                    cm.sendStyle("選擇你喜歡的?", G_colors);
                }
                sel = 2;
            } else if (se == 3) {
                if (selection == 0) {
                    B_beauty = 1;
                    cm.sendStyle("選一個吧!", B_skin);
                } else if (selection == 1) {
                    B_beauty = 2;
                    B_hairnew = Array();
                    for (var i = 0; i < B_hair.length; i++) {
                        B_hairnew.push(B_hair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                    cm.sendStyle("選一個吧!", B_hairnew);
                } else if (selection == 2) {
                    B_beauty = 3;
                    B_haircolor = Array();
                    var current = parseInt(cm.getChar().getHair() / 10) * 10;
                    for (var i = 0; i < 8; i++) {
                        B_haircolor.push(current + i);
                    }
                    cm.sendStyle("選一個吧!", B_haircolor);
                } else if (selection == 3) {
                    B_beauty = 4;
                    B_facenew = Array();
                    for (var i = 0; i < B_face.length; i++) {
                        B_facenew.push(face[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                    cm.sendStyle("選一個吧!", B_facenew);
                } else if (selection == 4) {
                    B_beauty = 5;
                    var current = cm.getChar().getFace() % 100 + 20000;
                    B_colors = Array();
                    B_colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700);
                    cm.sendStyle("選一個吧!", B_colors);
                }
                sel = 3;
            } else if (se == 4) {
                cm.sendYesNo("你確定要這個嗎？" + "\r\n#v" + equip[selection] + "##t" + equip[selection] + "#");
                choice = selection;
                sel = 4;
            } else if (se == 5) {
                if (selection == 0) {
                    if (cm.getPlayer().getMapId() != 910000001) {
                        cm.sendOk("您沒有在自由一洞唷");//原版沒有
                        cm.dispose();
                        return;
                    }
                    cm.sendSimple("#L0#我要招換暗黑龍王\r\n#L1#我只是不小心點到你 對不起!");
                }
                sel = 5;
            }
        } else if (status == 3) {
            if (sel == 0) {
                if (sel_ == 0) {
                    cm.sendYesNo("你確定要這個嗎？" + "\r\n#v" + chair[selection] + "##t" + chair[selection] + "#");
                    choice = selection;
                    sele_ = 0;
                } else if (sel_ == 1) {
                    cm.sendSimple("目前只提供 #b2#k 種變性款式,所以請選擇一個!\r\n\r\n" +
                            "#L0#平民款式(250000楓幣)" +
                            "#L1#貴族款式(500000楓幣)");
                    sele_ = 1;
                } else if (sel_ == 2) {
                    cm.sendYesNo("你真的要去 " + mapsname[selection] + "嗎?");
                    selectedMap = selection;
                    sele_ = 2;
                } else if (sel_ == 3) {
                    if (selection == 0) {
                        if (cm.getPlayer().getMeso() < 2000000000) {
                            cm.sendOK("您的楓幣不足");
                            cm.dispose();
                            return;
                        }
                        if (!cm.canHold(4001129)) {
                            cm.sendOK("您的背包不夠大");
                            cm.dispose();
                            return;
                        }
                        cm.gainMeso(-2000000000);
                        cm.gainItem(4001129, 1);
                    } else if (selection == 1) {
                        if (cm.getPlayer().getMeso() > 100000000) {
                            cm.sendOK("您的楓幣太多了 只能帶1e元");
                            cm.dispose();
                            return;
                        }
                        if (!cm.haveItem(4001129)) {
                            cm.sendOK("您沒有任何的#v4001129#呀");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -1);
                        cm.gainMeso(2000000000);
                    }
                } else if (sel_ == 4) {
                    if (selection == 0) {
                        var selStr = "選擇你的目的地.#b";
                        for (var i = 0; i < maps_.length; i++) {
                            selStr += "\r\n#L" + i + "#" + mapsname_[ i ] + "";
                        }
                        cm.sendSimple(selStr);
                        sele_ = 3;
                    } else if (selection == 1) {
                        var selStr = "選擇你的目的地.#b";
                        for (var i = 0; i < maps.length; i++) {
                            selStr += "\r\n#L" + i + "#" + mapsname[ i ] + "";
                        }
                        cm.sendSimple(selStr);
                        sele_ = 4;
                    } else if (selection == 2) {
                        var selStr = "選擇你的目的地.#b";
                        for (var i = 0; i < maps__.length; i++) {
                            selStr += "\r\n#L" + i + "#" + mapsname__[ i ] + "";
                        }
                        cm.sendSimple(selStr);
                        sele_ = 5;
                    }
                } else if (sel_ == 5) {
                    cm.sendYesNo("你確定要這個嗎？" + "\r\n#v" + weapon[selection] + "##t" + weapon[selection] + "#");
                    choice = selection;
                    sele_ = 6;
                } else if (sel_ == 6) {
                    switch (selection) {
                        case 0:
                            cm.gainItem(5000000, 1);
                            break;
                        case 1:
                            cm.gainItem(5000001, 1);
                            break;
                        case 2:
                            cm.gainItem(5000002, 1);
                            break;
                        case 3:
                            cm.gainItem(5000003, 1);
                            break;
                        case 4:
                            cm.gainItem(5000004, 1);
                            break;
                        case 5:
                            cm.gainItem(5000005, 1);
                            break;
                        case 6:
                            cm.gainItem(5000006, 1);
                            break;
                        case 7:
                            cm.gainItem(5000007, 1);
                            break;
                        case 8:
                            cm.gainItem(5000008, 1);
                            break;
                        case 9:
                            cm.gainItem(5000009, 1);
                            break;
                        case 10:
                            cm.gainItem(5000010, 1);
                            break;
                        case 11:
                            cm.gainItem(5000011, 1);
                            break;
                        case 12:
                            cm.gainItem(5000012, 1);
                        case 13:
                            cm.gainItem(5000013, 1);
                            break;
                        case 14:
                            cm.gainItem(5000014, 1);
                            break;
                        case 15:
                            cm.gainItem(5000016, 1);
                            break;
                        case 16:
                            cm.gainItem(5000017, 1);
                            break;
                        case 17:
                            cm.gainItem(5000018, 1);
                            break;
                        case 18:
                            cm.gainItem(5000020, 1);
                            break;
                        case 19:
                            cm.gainItem(5000021, 1);
                            break;
                        case 20:
                            cm.gainItem(5000022, 1);
                            break;
                        case 21:
                            cm.gainItem(5000023, 1);
                            break;
                        case 22:
                            cm.gainItem(5000024, 1);
                            break;
                        case 23:
                            cm.gainItem(5000025, 1);
                            break;
                        case 24:
                            cm.gainItem(5000026, 1);
                            break;
                        case 25:
                            cm.gainItem(5000027, 1);
                            break;
                        case 26:
                            cm.gainItem(5000029, 1);
                            break;
                        case 27:
                            cm.gainItem(5000030, 1);
                            break;
                        case 28:
                            cm.gainItem(5000031, 1);
                            break;
                        case 29:
                            cm.gainItem(5000032, 1);
                            break;
                        case 30:
                            cm.gainItem(5000033, 1);
                            break;
                        case 31:
                            cm.gainItem(5000036, 1);
                            break;
                        case 32:
                            cm.gainItem(5000041, 1);
                            break;
                        case 33:
                            cm.gainItem(5000048, 1);
                            break;
                        case 34:
                            cm.gainItem(5000049, 1);
                            break;
                        case 35:
                            cm.gainItem(5000050, 1);
                            break;
                        case 36:
                            cm.gainItem(5000051, 1);
                            break;
                        case 37:
                            cm.gainItem(5000052, 1);
                            break;
                        case 38:
                            cm.gainItem(5000053, 1);
                            break;
                        case 39:
                            cm.gainItem(5000058, 1);
                            break;
                        case 40:
                            cm.gainItem(5000054, 1);
                            break;
                        case 41:
                            cm.gainItem(5000046, 1);
                            break;
                        case 42:
                            cm.gainItem(5000043, 1);
                            break;
                    }
                    cm.sendOk("給你寵物了!");
                    cm.dispose();
                } else if (sel_ == 7) {
                    if (selection == 0) {
                        var p = cm.c.getPlayer();
                        var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();
                        if (totAp < 30016) {
                            cm.resetStats();
                            cm.sendOk("好了. 看看一下你的能力值");
                            cm.dispose();
                        } else if (totAp >= 30016) {
                            cm.sendOk("Your total AP is more than 30000. Please reset seperately.");
                            cm.dispose();
                        }
                    } else if (selection == 1) {
                        var p = cm.c.getPlayer();
                        var totAp = p.getRemainingAp() + p.getStr();
                        if (totAp < 30004) {
                            p.setStr(4);
                            p.setRemainingAp(totAp - 4);
                            cm.sendOk("Okay. Your stats have been reset!");
                            cm.dispose();
                        } else if (totAp >= 30004) {
                            cm.sendOk("好了. 看看一下你的能力值.");
                            cm.dispose();
                        }
                    } else if (selection == 2) {
                        var p = cm.c.getPlayer();
                        var totAp = p.getRemainingAp() + p.getDex();
                        if (totAp < 30004) {
                            p.setDex(4);
                            p.setRemainingAp(totAp - 4);
                            cm.sendOk("Okay. Your stats have been reset!");
                            cm.dispose();
                        } else if (totAp >= 30004) {
                            cm.sendOk("好了. 看看一下你的能力值.");
                            cm.dispose();
                        }
                    } else if (selection == 3) {

                        var p = cm.c.getPlayer();
                        var totAp = p.getRemainingAp() + p.getInt();
                        if (totAp < 30004) {
                            p.setInt(4);
                            p.setRemainingAp(totAp - 4);
                            cm.sendOk("Okay. Your stats have been reset!");
                            cm.dispose();
                        } else if (totAp >= 30004) {
                            cm.sendOk("好了. 看看一下你的能力值.");
                            cm.dispose();
                        }
                    } else if (selection == 4) {
                        var p = cm.c.getPlayer();
                        var totAp = p.getRemainingAp() + p.getLuk();
                        if (totAp < 30004) {
                            p.setLuk(4);
                            p.setRemainingAp(totAp - 4);

                            cm.sendOk("Okay. Your stats have been reset!");
                            cm.dispose();
                        } else if (totAp >= 30004) {
                            cm.sendOk("好了. 看看一下你的能力值.");
                            cm.dispose();
                        }
                    } else if (selection == 5) {
                        var p = cm.c.getPlayer();
                        var newStr = p.getRemainingAp() + p.getStr();
                        if (newStr < 30000) {
                            p.setStr(newStr);
                            p.setRemainingAp(0);
                            cm.sendOk("好了. 看看一下你的能力值!");
                            cm.dispose();
                        } else if (newStr >= 30000) {
                            p.setStr(29999);
                            p.setRemainingAp(newStr - 29999);

                            cm.sendOk("好了. 看看一下你的能力值");
                            cm.dispose();
                        }
                    } else if (selection == 6) {
                        var p = cm.c.getPlayer();
                        var newDex = p.getRemainingAp() + p.getDex();
                        if (newDex < 30000) {
                            p.setDex(newDex);
                            p.setRemainingAp(0);

                            cm.sendOk("好了. 看看一下你的能力值!");
                            cm.dispose();
                        } else if (newDex >= 30000) {
                            p.setDex(29999);
                            p.setRemainingAp(newDex - 29999);

                            cm.sendOk("好了. 看看一下你的能力值!");
                            cm.dispose();
                        }
                    } else if (selection == 7) {
                        var p = cm.c.getPlayer();
                        var newInt = p.getRemainingAp() + p.getInt();
                        if (newInt < 30000) {
                            p.setInt(newInt);
                            p.setRemainingAp(0);
                            cm.sendOk("好了. 看看一下你的能力值!");
                            cm.dispose();
                        } else if (newInt >= 30000) {
                            p.setInt(29999);
                            p.setRemainingAp(newInt - 29999);
                            cm.sendOk("好了. 看看一下你的能力值!");
                            cm.dispose();
                        }
                    } else if (selection == 8) {
                        var p = cm.c.getPlayer();
                        var newLuk = p.getRemainingAp() + p.getLuk();
                        if (newLuk < 30000) {
                            p.setLuk(newLuk);
                            p.setRemainingAp(0);

                            cm.sendOk("Okay. Your stats have been added!");
                            cm.dispose();
                        } else if (newLuk >= 30000) {
                            p.setLuk(29999);
                            p.setRemainingAp(newLuk - 29999);
                            cm.sendOk("好了. 看看一下你的能力值!");
                            cm.dispose();
                        }
                    }

                } else if (sel_ == 8) {
                    switch (selection) {
                        case 2:
                            if (cm.getMeso() >= 1) {
                                cm.sendOk("謝謝您, #e#i5390000#怒火心情喇叭1000個#n 已經送到您的背包中.");
                                cm.gainItem(5390000, 1000);
                                cm.gainMeso(-1);
                                cm.dispose();
                            } else {
                                cm.sendOk("什麼阿！你連1楓幣都沒有阿！");
                                cm.dispose();
                            }
                            break;
                        case 5:
                            if (cm.getMeso() >= 1) {
                                cm.sendOk("謝謝您, #e#i5390001#白雲朵朵心情喇叭1000個#n 已經送到您的背包中.");
                                cm.gainItem(5390001, 1000);
                                cm.gainMeso(-1);
                                cm.dispose();
                            } else {
                                cm.sendOk("什麼阿！你連1楓幣都沒有阿！");
                                cm.dispose();
                            }
                            break;
                        case 8:
                            if (cm.getMeso() >= 1) {
                                cm.sendOk("謝謝您, #e#i5390002#戀愛心情喇叭1000個#n 已經送到您的背包中.");
                                cm.gainItem(5390002, 1000);
                                cm.gainMeso(-1);
                                cm.dispose();
                            } else {
                                cm.sendOk("什麼阿！你連1楓幣都沒有阿！");
                                cm.dispose();
                            }
                            break;
                        case 11:
                            if (cm.getMeso() >= 1) {
                                cm.sendOk("謝謝您, #e#i5076000#道具喇叭1000個#n 已經送到您的背包中.");
                                cm.gainItem(5076000, 1000);
                                cm.gainMeso(-1);
                                cm.dispose();
                            } else {
                                cm.sendOk("什麼阿！你連1楓幣都沒有阿！");
                                cm.dispose();
                            }
                            break;
                        case 12:
                            if (cm.getMeso() >= 1) {
                                cm.sendOk("謝謝您, #e#i5390004##t5390004#100個#n 已經送到您的背包中.");
                                cm.gainItem(5390004, 1000);
                                cm.gainMeso(-1000);
                                cm.dispose();
                            } else {
                                cm.sendOk("什麼阿！你連1000楓幣都沒有阿！");
                                cm.dispose();
                            }
                            break;
                    }
                } else if (sel_ == 9) {
                    if (!cm.canHold(1052723)) {
                        cm.sendOk("您的背包空位不足");
                        cm.dispose();
                        return;
                    }
                    if (selection == 0) {
                        if (!cm.haveItem(4001129, 1)) {
                            cm.sendOk("您的#v4001129#不足");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -1)
                        cm.makeProItem(1112942, 200);
                    } else if (selection == 1) {
                        if (!cm.haveItem(4001129, 10)) {
                            cm.sendOk("您的#v4001129#不足");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -10)
                        cm.makeProItem(1112942, 1000);
                    } else if (selection == 2) {
                        if (!cm.haveItem(4001129, 20)) {
                            cm.sendOk("您的#v4001129#不足");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -20)
                        cm.makeProItem(1112942, 2000);
                    } else if (selection == 3) {
                        if (!cm.haveItem(4001129, 1)) {
                            cm.sendOk("您的#v4001129#不足");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -1)
                        cm.makeProItem(1052723, 200);
                    } else if (selection == 4) {
                        if (!cm.haveItem(4001129, 10)) {
                            cm.sendOk("您的#v4001129#不足");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -10)
                        cm.makeProItem(1052723, 1000);
                    } else if (selection == 5) {
                        if (!cm.haveItem(4001129, 20)) {
                            cm.sendOk("您的#v4001129#不足");
                            cm.dispose();
                            return;
                        }
                        cm.gainItem(4001129, -20)
                        cm.makeProItem(1052723, 2000);
                    }

                }
                sele = 0;
            } else if (sel == 1) {
                if (sel_ == 0) {
                    if (selection == 0) {
                        jobName = "新手";
                        job = 0;
                    }
                    if (selection == 1) {
                        jobName = "劍士";
                        job = 100
                    }
                    if (selection == 11) {
                        jobName = "魔法師";
                        job = 200;
                    }
                    if (selection == 21) {
                        jobName = "弓箭手";
                        job = 300;
                    }
                    if (selection == 28) {
                        jobName = "盜賊";
                        job = 400;
                    }
                    if (selection == 35) {
                        jobName = "海盜";
                        job = 500;
                    }
                    cm.sendYesNo("#d你想成為: #r[" + jobName + "]#k #d嗎?");
                    sele_ = 1;
                } else if (sel_ == 2) {
                    slot = selection;
                    if (slot >= cm.getPlayer().getLevel()) {
                        cm.sendOk("你不能用來生等!");
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("你確定要變等嗎?你將變為#r" + (cm.getPlayer().getLevel() - slot) + "#k等");
                    sele_ = 2;
                }
                sele = 1;
            } else if (sel == 2) {
                if (G_beauty == 1) {
                    cm.setSkin(G_skin[selection]);
                }
                if (G_beauty == 2) {
                    cm.setHair(G_hairnew[selection]);
                }
                if (G_beauty == 3) {
                    cm.setHair(G_haircolor[selection]);
                }
                if (G_beauty == 4) {
                    cm.setFace(G_facenew[selection]);
                }
                if (G_beauty == 5) {
                    cm.setFace(G_colors[selection]);
                }
                cm.dispose();
            } else if (sel == 3) {
                if (B_beauty == 1) {
                    cm.setSkin(B_skin[selection]);
                }
                if (B_beauty == 2) {
                    cm.setHair(B_hairnew[selection]);
                }
                if (B_beauty == 3) {
                    cm.setHair(B_haircolor[selection]);
                }
                if (B_beauty == 4) {
                    cm.setFace(B_facenew[selection]);
                }
                if (B_beauty == 5) {
                    cm.setFace(B_colors[selection]);
                }
                cm.dispose();
            } else if (sel == 4) {
                if (!cm.haveItem(4001129, 10)) {
                    cm.sendOk("您沒有足夠的#v4001129#唷");
                    cm.dispose();
                    return;
                }
                cm.gainItem(4001129, -10);
                cm.gainItem(equip[choice], 1);
                cm.sendOk("冒險家，東西已經放在你的背包瞜~趕快去看吧!!.");
                cm.dispose();
            } else if (sel == 5) {
                if (selection == 0) {
                    cm.changeMusic("Bgm14/HonTale");
                    cm.spawnMonster(8810026, 0, 0, 0, 0, 1, 0, 1, 71, 260);
                    cm.getPlayer().getMap().killAllMonsters(false);
                    cm.mapMessage(6, "隨著震耳的恐怖聲音,暗黑龍王,終於出現了!各位勇士們加油...");
                    cm.dispose();
                } else if (selection == 1) {
                    cm.dispose();
                }
            }

        } else if (status == 4) {
            if (sele == 0) {
                if (sele_ == 0) {
                    cm.gainItem(chair[choice], 1);
                    cm.sendOk("冒險家，東西已經放在你的背包瞜~趕快去看吧!!.");
                    cm.dispose();
                } else if (sele_ == 1) {

                    if (selection == 0) {
                        cm.sendYesNo("你想要 #b平民款式#k 嗎? 需要#b250000#k楓幣," +
                                "#b我可以改變你的性別,在送你一顆頭.") //原本 平民款式 有一個, 先刪掉了
                        selec_ = 0;
                    } else if (selection == 1) {
                        cm.sendYesNo("你想要 #b貴族款式#k 嗎? 需要#b500000#k楓幣," +
                                "#b我可以改變你的性別,讓你選一顆頭.") //原本 貴族款式 有一個, 先刪掉了
                        selec_ = 1;
                    }
                } else if (sele_ == 2) {
                    cm.warp(maps[selectedMap], 0);
                    cm.dispose();
                } else if (sele_ == 3) {
                    cm.sendYesNo("你真的要去 " + mapsname_[selection] + "嗎?");
                    selectedMap = selection;
                    selec_ = 2;
                } else if (sele_ == 4) {
                    cm.sendYesNo("你真的要去 " + mapsname[selection] + "嗎?");
                    selectedMap = selection;
                    selec_ = 3;
                } else if (sele_ == 5) {
                    cm.sendYesNo("你真的要去 " + mapsname__[selection] + "嗎?");
                    selectedMap = selection;
                    selec_ = 4;
                } else if (sele_ == 6) {
                    cm.gainItem(weapon[choice], 1);
                    cm.sendOk("冒險家，東西已經放在你的背包瞜~趕快去看吧!!.");
                    cm.dispose();
                }
                selec = 0;

            } else if (sele == 1) {
                if (sele_ == 1) {
                    if (cm.getPlayer().getJob().getId() != 0 || cm.getPlayer().getLevel() < 10) {
                        cm.sendOk("#d你沒有符合最小需求: #r10等而且是名初心者#k #d!");
                        cm.dispose();
                        return;
                    }
                    cm.getPlayer().setJob(job);
                    cm.sendOk("轉職成功唷");
                    cm.dispose();
                } else if (sele_ == 2) {
                    if (cm.getPlayer().getMeso() < 100000) {
                        cm.sendOk("抱歉,你身上的沒有10W");
                        cm.dispose();
                        return;
                    }
                    cm.gainMeso(-100000);
                    cm.getPlayer().setLevel(cm.getPlayer().getLevel() - slot);
                    cm.getPlayer().setRemainingAp(cm.getPlayer().getRemainingAp() - slot * 5);
                    cm.getPlayer().getMap().removePlayer(cm.getPlayer());
                    cm.getPlayer().getMap().addPlayer(cm.getPlayer());
                    cm.warp(910000000);
                    cm.sendOk("#b恭喜你成功拉!快快看你的等級吧!#k");
                    cm.dispose();
                }
            }
        } else if (status == 5) {
            if (selec == 0) {
                if (selec_ == 0) {
                    if (cm.getPlayer().getMeso() < 250000) {
                        cm.sendOK("您的金錢不足");
                        cm.dispose();
                        return;
                    }
                    cm.sendNext("接下來，變性開始~");
                    select_ = 0;
                } else if (selec_ == 1) {
                    if (cm.getPlayer().getMeso() < 500000) {
                        cm.sendOK("您的金錢不足");
                        cm.dispose();
                        return;
                    }
                    cm.sendNext("接下來，變性開始~");
                    select_ = 1
                } else if (selec_ == 2) {
                    cm.warp(maps_[selectedMap], 0);
                    cm.dispose();
                } else if (selec_ == 3) {
                    cm.warp(maps[selectedMap], 0);
                    cm.dispose();
                } else if (selec_ == 4) {
                    cm.warp(maps__[selectedMap], 0);
                    cm.dispose();
                }
                select = 0;
            }

        } else if (status == 6) {
            if (select == 0) {
                var g = cm.getPlayer().getGender();
                if (g == 0) {
                    cm.getPlayer().setGender(1);
                } else {
                    cm.getPlayer().setGender(0);
                }
                if (select_ == 0) {
                    cm.getPlayer().getMap().removePlayer(cm.getPlayer());
                    cm.getPlayer().getMap().addPlayer(cm.getPlayer());
                    cm.sendOk("手術是非常成功! 再會了");
                    cm.dispose();
                    return;
                } else if (select_ == 1) {
                    cm.sendNext("手術是非常成功! 準備好, 該是#e選擇你最新流行的時候了");
                    a1_ = 1;
                }
                a1 = 0;
            }
        } else if (status == 7) {
            if (a1 == 0) {
                if (a1_ == 1) {
                    if (cm.getPlayer().getGender() == 0) {
                        B_beauty = 2;
                        B_hairnew = Array();
                        for (var i = 0; i < B_hair.length; i++) {
                            B_hairnew.push(B_hair[i] + parseInt(cm.getChar().getHair() % 10));
                        }
                        cm.sendStyle("選一個吧!", B_hairnew);
                        a2_ = 0;
                    } else {
                        G_beauty = 2;
                        G_haircolor = Array();
                        for (var i = 0; i < G_hair.length; i++) {
                            G_haircolor.push(G_hair[i] + parseInt(cm.getChar().getHair() % 10));
                        }
                        cm.sendStyle("選擇你喜歡的?", G_haircolor);
                        a2_ = 1;
                    }
                }
                a2 = 0;
            }
        } else if (status == 8) {
            if (a2 == 0) {
                if (a2_ == 0) {
                    if (B_beauty == 2) {
                        cm.setHair(B_hairnew[selection]);
                    }
                    cm.getPlayer().getMap().removePlayer(cm.getPlayer());
                    cm.getPlayer().getMap().addPlayer(cm.getPlayer());
                } else if (a2_ == 1) {
                    if (G_beauty == 2) {
                        cm.setHair(G_hairnew[selection]);
                    }
                    cm.getPlayer().getMap().removePlayer(cm.getPlayer());
                    cm.getPlayer().getMap().addPlayer(cm.getPlayer());
                }
            }
        } else {
            cm.dispose();
        }
    }
}	