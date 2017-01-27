/*
發佈於小馬論壇
2017/01/27 -- 新手獎勵Npc By 宗達
From : HeroMS
 */

var status = -1;
var req = 4031249;
var item = [
	[1302058, 3333],
	[1332048, 3333],
	[1432037, 3333],
	[1452043, 3333],
	[1462038, 3333],
	[1472050, 3333],
	[2022179, 2388],
	[2101120, 1888],
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
		cm.sendSimple("#r親愛的玩家新年快樂，以下豐富的物品需要#i4000306#才可兌換!!#b" + msg);
	} else if (status === i++) {
		if (!cm.canHold(item[selection][0])) {
			cm.sendNext("你的背包裝不下");
			cm.dispose();
			return;
		} else if (!cm.haveItem(req, item[selection][1])) {
			cm.sendNext("身上沒有#v" + req + "#");
			cm.dispose();
			return;
		}
		cm.gainItem(req, -item[selection][1]);
		cm.gainItem(item[selection][0]);
		cm.sendOk("感謝您，看看有沒有拿到囉。");
		cm.dispose();
	}
}
