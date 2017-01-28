/*
發佈於小馬論壇
2017/01/27 -- 黃金楓葉換道具Npc By 宗達
From : HeroMS
 */

var status = -1;
var req = 4000313;
var item = [
	[1112127, 50],
	[1004540, 5],
	[1052948, 5],
	[1003713, 5],
	[1052550, 5],
	[1052634, 5],
	[1112178, 3],
	[1112290, 5],
	[1112167, 3],
	[1112279, 5],
	[3010014, 10],
	[2340000, 2]
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
		cm.sendSimple("#r親愛的玩家新年快樂，贊助100元即可找GM獲得#i"+req+"#1個，可兌換的豐富獎品如下~" + msg);
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
