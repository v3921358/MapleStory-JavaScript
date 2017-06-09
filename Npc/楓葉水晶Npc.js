/*
發佈於小馬論壇、游蜂冒險島
2017/06/09 -- 楓葉水晶換道具Npc By 宗達
From : MoonLightMS
 */

var status = -1;
var req = 4032056;
var item = [
	[1112178, 5],
	[1112290, 5],
	[1112167, 5],
	[1112279, 5],
	[1050369, 5],
	[1051438, 5],
	[5460000, 1],
	[2340000, 3],
	[1113013, 50],
	[1002776, 50],
	[1002777, 50],
	[1002778, 50],
	[1002779, 50],
	[1002780, 50],
	[1052155, 50],
	[1052156, 50],
	[1052157, 50],
	[1052158, 50],
	[1052159, 50],
	[1082234, 50],
	[1082235, 50],
	[1082236, 50],
	[1082237, 50],
	[1082238, 50],
	[1112664, 200],
	[1112665, 200],
	[1112666, 200],
	[1112667, 200],
	[1072355, 50],
	[1072356, 50],
	[1072357, 50],
	[1072358, 50],
	[1072359, 50],
	[1102172, 50],
	[1302081, 80],
	[1312037, 80],
	[1322060, 80],
	[1332073, 80],
	[1332074, 80],
	[1372044, 80],
	[1382057, 80],
	[1402046, 80],
	[1412033, 80],
	[1422037, 80],
	[1432047, 80],
	[1442063, 80],
	[1452057, 80],
	[1462050, 80],
	[1472068, 80],
	[1482023, 80],
	[1492023, 80],
	[1073031, 2000],
	[1702563, 2000]
];

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		status--;
	} else {
		cm.dispose();
		return;
	}
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		var msg = "";
		for (var v = 0; v < item.length; v++) {
			var id = item[v][0];
			var qty = item[v][1];
			msg += "\r\n#b#L" + v + "#" + qty + "個#i" + req + "#兌換#i" + id + "##t" + id + "##b";
		}
		cm.sendSimple("#r親愛的玩家您好，達成天空之城、時空的裂縫組隊任務可獲得#i"+req+"#1個，可兌換的豐富獎品如下~" + msg);
	} else if (status === i++) {
		if (!cm.canHold(item[selection][0])) {
			cm.sendNext("你的背包裝不下");
			cm.dispose();
			return;
		} else if (!cm.haveItem(req, item[selection][1])) {
			cm.sendNext("身上沒有#v" + req + "#" + item[selection][1]+"個");
			cm.dispose();
			return;
		}
		cm.gainItem(req, -item[selection][1]);
		cm.gainItem(item[selection][0], 1);
		cm.sendOk("感謝您，看看有沒有拿到囉。");
		cm.dispose();
	}
}

