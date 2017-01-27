/*
發佈於小馬論壇
2017/01/27 -- 新手獎勵Npc By 宗達
From : HeroMS
 */

var status = -1;
var Reward = [
	1003861,
	1003844,
	1003845,
	1003847,
	1003829,
	1003831,
	1003951,
	1042232,
	1042236,
	1042238,
	1042239,
	1042250,
	1042312,
	1042313,
	1702256,
	1702257,
	1702258,
	1702259,
	1702260
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
		for (var v = 0; v < Reward.length; v++) {
			var id = Reward[v];
			msg += "#n#b#L" + v + "##i" + id + "##t" + id + "#(免費)#l";
			if ((v % 2 == 0 && v != 0) || v == 1) {
				msg += "\r\n";
			}
		}
		cm.sendSimple("#大G說免費，歡迎索取！\r\n" + msg);
	} else if (status === i++) {
		if (!cm.canHold(Reward[selection])) {
			cm.sendNext("你的背包裝不下");
			cm.dispose();
			return;
		}
		cm.gainItem(Reward[selection]);
		cm.sendOk("感謝您，看看有沒有拿到囉。");
		cm.dispose();
	}
}
