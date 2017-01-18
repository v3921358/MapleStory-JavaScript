/*

發佈至小馬論壇
2017/01/17 -- 網咖電腦Npc By 宗達
對話參考 : ChaChaMS -- 封包擷取
對話修改 : 由 sendOk 改成 sendNext

 */

var status = -1, sel = -1, mapsel = -1;
var warpmap = [
	[104000000, 100],
	[100000000, 100],
	[101000000, 100],
	[102000000, 100],
	[103000000, 100],
	[120000000, 100],
	[105040300, 200],
	[130000000, 200],
	[140000000, 200],
	[740000000, 250],
	[200000000, 400],
	[211000000, 750],
	[220000000, 100],
	[222000000, 870],
	[230000000, 250],
	[250000000, 475],
	[240000000, 10],
	[541020500, 125],
	[541000000, 400],
	[541000100, 456],
	[221024500, 101],
	[260000100, 870],
	[270000000, 999],
	[300000000, 125],
	[551030100, 300],
	[600000000, 600],
	[501030104, 900],
	[701010320, 120]
];
var ExchangeBSPQ = [
	[4000045, 1],
	[5390006, 1000],
	[5152049, 3000],
	[5150041, 4000],
	[5220040, 8000],
	[2044802, 10000],
	[2044902, 10000],
	[1003543, 15000],
	[1012105, 20000],
	[1102390, 20000],
	[1050210, 20000],
	[1112178, 25000],
	[1112290, 25000],
	[1042315, 30000],
	[1042312, 30000],
	[1042313, 30000],
	[1003730, 30000],
	[1902002, 77777],
	[3010058, 99999],
	[2340000, 100000]
];

var ExchangeRed = [
	[4031548, 1000],
	[5220040, 50],
	[3010593, 100],
	[1112665, 1000],
	[1112664, 1000],
	[3010187, 2000],
	[1902013, 2500],
	[1912009, 2500],
	[1003114, 3000],
	[1102248, 4000]
];

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	var record = cm.getQuestRecord(150001);
	var bspq = record.getCustomData() == null ? "0" : record.getCustomData();
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	cm.getPlayer().dropMessage("mode: " + mode + " status: " + status + " selection: " + selection);
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.sendSimple("歡迎使用潮咖，一小45，請選擇服務:\r\n" +
			"#b#L1#BossQuest 兌換系統#l\r\n" +
			"#b#L2#BossQuest 踩地雷#l\r\n" +
			/*"#b#L3#你臉是不是需要Photoshop#l\r\n" +
			"#b#L4#狗咬過的頭#l\r\n" +
			"#b#L5#廣播系統#l\r\n" +*/
			"#b#L6#我要自殺#l\r\n" +
			"#b#L7#尊貴級UBER#l\r\n" +
			"#b#L8#小紅包換包包#l\r\n"/* +
			"#b#L9#大紅包換包包#l"*/
			);
	} else if (status === i++) {
		sel = selection;
		switch (selection) {
		case 1:
			cm.sendNext("正在開啟BossQuest 兌換系統...");
			break;
		case 2:
			cm.sendNext("正在開啟BossQuest 戰鬥系統...");
			break;
		case 3:
			cm.sendNext("正在開啟Photoshop系統....");
			break;
		case 4:
			cm.sendNext("正在開啟老虎鉗系統......");
			break;
		case 5:
			cm.sendNext(" 來阿幹.....");
			break;
		case 6:
			cm.sendNext("掰掰");
			break;
		case 7:
			cm.sendNext("正在為您查詢您最近的UBER司機.....");
			break;
		case 8:
		case 9:
			cm.sendNext("正在為您調查最近的酒店.....");
			break;
		}
	} else if (status === i++) {
		cm.gainMeso(-45);
		switch (sel) {
		case 1:
			var msgs = "";
			for (var i = 0; i < ExchangeBSPQ.length; i++) {
				var id = ExchangeBSPQ[i][0];
				var p = ExchangeBSPQ[i][1];
				msgs += "#b\r\n#L" + i + "##i" + id + "# #t" + id + "# " + p + " BossQuest點 #l";
			}
			cm.sendSimple("您餘剩 " + bspq + " BossQuest點 \r\n\r\n " + msgs);
			break;
		case 2:
			cm.sendSimple("您餘剩 " + bspq + " BossQuest點 \r\n\r\n #b\r\n#b#L0##v03994115##l\r\n#b#L1##v03994116##l\r\n#b#L2##v03994117##l\r\n#b#L3##v03994118##l");
			break;
		case 3:
			if (!cm.haveItem(5152049)) {
				cm.sendNext("你賣來亂，你沒有足夠的#i5152049# #t5152049#\r\n電腦故障，已自動退費 (45元)\r\n");
				cm.gainMeso(45);
				cm.dispose();
				return;
			} else {
				cm.sendNext("尚未完成");
			}
			break;
		case 4:
			if (!cm.haveItem(5152041)) {
				cm.sendNext("你賣來亂，你沒有足夠的#i5150041# #t5150041#\r\n電腦故障，已自動退費 (45元)\r\n");
				cm.gainMeso(45);
				cm.dispose();
				return;
			} else {
				cm.sendNext("尚未完成");
			}
			break;
		case 5:
			if (cm.getParty() == null) {
				cm.sendNext("請先進入一個隊伍。..");
				cm.gainMeso(45);
				cm.dispose();
				return;
			} else if (cm.getLevel() < 11) {
				cm.sendNext("您隊伍的等級無法進行任何組隊任務.");
				cm.gainMeso(45);
				cm.dispose();
				return;
			} else {
				cm.sendNext("尚未完成");
			}
			break;
		case 6:
			cm.getPlayer().dropMessage(5, "憤怒的電腦把你的靈魂吸取走了");
			cm.getPlayer().setHp(0);
			cm.getPlayer().updateSingleStat(Packages.client.MapleStat.HP, cm.getPlayer().getHp());
			cm.dispose();
			break;
		case 7:
			var msg = "";
			for (var i = 0; i < warpmap.length; i++) {
				var m = warpmap[i][0];
				var me = cm.getPlayer().getLevel() < 120 ? warpmap[i][1] : warpmap[i][1] * 10;
				msg += "\r\n#L" + i + "##m" + m + "# (" + me + " 楓幣)#l";
			}
			cm.sendNext("請選擇目的地:#b" + msg);
			break;
		case 8:
			if (!cm.haveItem(4031249)) {
				cm.sendNext("你賣來亂，你沒有足夠的#i4031249# #t4031249#..電腦故障，已自動退費 (45元)..");
				cm.gainMeso(45);
				cm.dispose();
				return;
			} else {
				cm.sendAcceptDecline("#i4031249# #t4031249# 是否兌換?");
			}
			break;
		case 9:
			if (!cm.haveItem(4031548)) {
				cm.sendNext("你賣來亂，你沒有足夠的#i4031548# #t4031548#..電腦故障，已自動退費 (45元)..");
				cm.gainMeso(45);
				cm.dispose();
				return;
			} else {
				cm.sendAcceptDecline("#i4031548# #t4031548# 是否兌換?");
			}
			break;
		}
	} else if (status === i++) {
		switch (sel) {
		case 1:
			if (bspq < ExchangeBSPQ[selection][1] || !cm.canHold(ExchangeBSPQ[selection][0]) || record.getCustomData() == null) {
				cm.sendNext("電腦故障，已自動退費 (45元)..");
				cm.gainMeso(45);
				cm.dispose();
				return;
			} else {
				cm.sendNext("恭喜兌換#b#v" + ExchangeBSPQ[selection][0] + "# #t" + ExchangeBSPQ[selection][0] + "##k 成功");
				cm.gainItem(ExchangeBSPQ[selection][0], 1);
				record.setCustomData((((ExchangeBSPQ[selection][1] * -1) + parseInt(bspq))).toString());
				cm.dispose();
			}
			break;
		case 2:
			switch (selection) {
			case 0:
				if (cm.getParty() != null) {
					if (cm.getDisconnected("BossQuestEASY") != null) {
						cm.getDisconnected("BossQuestEASY").registerPlayer(cm.getPlayer());
					} else if (cm.isLeader()) {
						var party = cm.getPlayer().getParty().getMembers();
						var mapId = cm.getPlayer().getMapId();
						var next = true;
						var it = party.iterator();
						while (it.hasNext()) {
							var cPlayer = it.next();
							var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
							if (ccPlayer == null || ccPlayer.getLevel() < 70) {
								next = false;
								break;
							}
						}
						if (next) {
							var q = cm.getEventManager("BossQuestEASY");
							if (q == null) {
								cm.sendOk("管理員尚未開啟本副本");
								cm.gainMeso(45);
							} else {
								q.startInstance(cm.getParty(), cm.getMap());
							}
						} else {
							cm.sendOk("請確認全部玩家等級等已達到 70.");
							cm.gainMeso(45);
						}
					} else {
						cm.sendOk("請隊長跟我說話唷.");
						cm.gainMeso(45);
					}
				} else {
					cm.sendOk("請組隊後再找我報名唷.");
					cm.gainMeso(45);
				}
				break;
			case 1:
				if (cm.getParty() != null) {
					if (cm.getDisconnected("BossQuestMed") != null) {
						cm.getDisconnected("BossQuestMed").registerPlayer(cm.getPlayer());
					} else if (cm.isLeader()) {
						var party = cm.getPlayer().getParty().getMembers();
						var mapId = cm.getPlayer().getMapId();
						var next = true;
						var it = party.iterator();
						while (it.hasNext()) {
							var cPlayer = it.next();
							var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
							if (ccPlayer == null || ccPlayer.getLevel() < 100) {
								next = false;
								break;
							}
						}
						if (next) {
							var q = cm.getEventManager("BossQuestMed");
							if (q == null) {
								cm.sendOk("管理員尚未開啟本副本");
								cm.gainMeso(45);
							} else {
								q.startInstance(cm.getParty(), cm.getMap());
							}
						} else {
							cm.sendOk("請確認全部玩家等級等已達到 100.");
							cm.gainMeso(45);
						}
					} else {
						cm.sendOk("請隊長跟我說話唷.");
						cm.gainMeso(45);
					}
				} else {
					cm.sendOk("請組隊後再找我報名唷.");
					cm.gainMeso(45);
				}
				break;
			case 2:
				if (cm.getParty() != null) {
					if (cm.getDisconnected("BossQuestHARD") != null) {
						cm.getDisconnected("BossQuestHARD").registerPlayer(cm.getPlayer());
					} else if (cm.isLeader()) {
						var party = cm.getPlayer().getParty().getMembers();
						var mapId = cm.getPlayer().getMapId();
						var next = true;
						var it = party.iterator();
						while (it.hasNext()) {
							var cPlayer = it.next();
							var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
							if (ccPlayer == null || ccPlayer.getLevel() < 120) {
								next = false;
								break;
							}
						}
						if (next) {
							var q = cm.getEventManager("BossQuestHARD");
							if (q == null) {
								cm.sendOk("管理員尚未開啟本副本");
								cm.gainMeso(45);
							} else {
								q.startInstance(cm.getParty(), cm.getMap());
							}
						} else {
							cm.sendOk("請確認全部玩家等級等已達到 120.");
							cm.gainMeso(45);
						}
					} else {
						cm.sendOk("請隊長跟我說話唷.");
						cm.gainMeso(45);
					}
				} else {
					cm.sendOk("請組隊後再找我報名唷.");
					cm.gainMeso(45);
				}
				break;
			case 3:
				if (cm.getParty() != null) {
					if (cm.getDisconnected("BossQuestHELL") != null) {
						cm.getDisconnected("BossQuestHELL").registerPlayer(cm.getPlayer());
					} else if (cm.isLeader()) {
						var party = cm.getPlayer().getParty().getMembers();
						var mapId = cm.getPlayer().getMapId();
						var next = true;
						var it = party.iterator();
						while (it.hasNext()) {
							var cPlayer = it.next();
							var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
							if (ccPlayer == null || ccPlayer.getLevel() < 160) {
								next = false;
								break;
							}
						}
						if (next) {
							var q = cm.getEventManager("BossQuestHELL");
							if (q == null) {
								cm.sendOk("發生未知的錯誤");
								cm.gainMeso(45);
							} else {
								q.startInstance(cm.getParty(), cm.getMap());
							}
						} else {
							cm.sendOk("請確認全部玩家等級等已達到 160.");
							cm.gainMeso(45);
						}
					} else {
						cm.sendOk("請隊長跟我說話唷.");
						cm.gainMeso(45);
					}
				} else {
					cm.sendOk("請組隊後再找我報名唷.");
					cm.gainMeso(45);
				}
				break;
			case 4:
				if (cm.getParty() != null) {
					if (cm.getDisconnected("BossQuestCHAOS") != null) {
						cm.getDisconnected("BossQuestCHAOS").registerPlayer(cm.getPlayer());
					} else if (cm.isLeader()) {
						var party = cm.getPlayer().getParty().getMembers();
						var mapId = cm.getPlayer().getMapId();
						var next = true;
						var it = party.iterator();
						while (it.hasNext()) {
							var cPlayer = it.next();
							var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
							if (ccPlayer == null || ccPlayer.getLevel() < 180) {
								next = false;
								break;
							}
						}
						if (next) {
							var q = cm.getEventManager("BossQuestCHAOS");
							if (q == null) {
								cm.sendOk("發生未知的錯誤");
							} else {
								q.startInstance(cm.getParty(), cm.getMap());
							}
						} else {
							cm.sendOk("請確認全部玩家等級等已達到 180.");
							cm.gainMeso(45);
						}
					} else {
						cm.sendOk("請隊長跟我說話唷.");
						cm.gainMeso(45);
					}
				} else {
					cm.sendOk("請組隊後再找我報名唷.");
					cm.gainMeso(45);
				}
				break;
			}
			cm.dispose();
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 7:
			mapsel = selection;
			if (cm.getPlayer().getLevel() < 120) {
				cm.sendNext("看在你還沒120等的份上，殘障優惠價\r\n確定出發#b#m" + warpmap[selection][0] + "##k? 將會需要 #b" + warpmap[selection][1] + " 楓幣#k......");
			} else {
				cm.sendNext("確定出發#b#m" + warpmap[selection][0] + "##k? 將會需要 #b" + (warpmap[selection][1] * 10) + "  楓幣#k......");
			}
			break;
		case 8:
			var msg = "";
			for (var i = 0; i < ExchangeRed.length; i++) {
				var id = ExchangeRed[i][0];
				var quantity = ExchangeRed[i][1];
				msg += "\r\n#L" + i + "##i" + id + "# #t" + id + "# " + quantity + " 紅包#l";
			}
			cm.sendSimple("您餘剩 #c4031249# 紅包\r\n\r\n #b" + msg);
			break;
		case 9:
			break;
		}

	} else if (status === i++) {
		switch (sel) {
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 7:
			if (cm.getPlayer().getMeso() < warpmap[mapsel][1]) {
				cm.sendNext("電腦故障，已自動退費 (45元)..");
				cm.gainMeso(45);
				cm.dispose();
				return;
			} else {
				cm.warp(warpmap[mapsel][0]);
				cm.dispose();
			}
			break;
		case 8:
			if (!cm.haveItem(4031249, ExchangeRed[selection][1]) || !cm.canHold(ExchangeRed[selection][0])) {
				cm.sendNext("電腦故障，已自動退費 (45元)..");
				cm.gainMeso(45);
				cm.dispose();
				return;
			} else {
				cm.sendNext("恭喜兌換#b#v" + ExchangeRed[selection][0] + "# #t" + ExchangeRed[selection][0] + "##k 成功");
				cm.gainItem(ExchangeRed[selection][0], 1);
				cm.gainItem(4031249, -ExchangeRed[selection][1]);
				cm.dispose();
			}
			break;
		case 9:
			cm.sendNext("尚未完成");
			cm.dispose();
			break;
		}
	} else if (status === i++) {
		cm.dispose();
	} 
}
