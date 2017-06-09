/*
發佈於小馬論壇、游蜂冒險島
2017/06/09 -- 發騎寵Npc By 宗達
From : MoonLightMS
 */

var status = -1;
var Reward = [
	1902000,
	1902001,
	1902002,
	1912000,
	1902004,
	1912002,
	1902014,
	1912010,
	1902012,
	1912008,
	1902015,
	1902016,
	1902017,
	1902018,
	1912011,
	1902021,
	1912014,
	1902023,
	1912016,
	1902005,
	1902006,
	1902007,
	1912005,
	1902012,
	1912008,
	1902008,
	1912003,
	1902036,
	1912029,
	1902045,
	1912038
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
		cm.gainItem(Reward[selection], 1);
		cm.sendOk("感謝您，看看有沒有拿到囉。");
		cm.dispose();
	}
}
