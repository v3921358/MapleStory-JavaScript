/*
發佈於小馬論壇
2017/01/28 -- 新手獎勵Npc By 宗達
From : BuLayMS
 */

var status = -1, sel = -1, sel_ = -1, otherreq = false;

var req = [
	[4001126, 3000, 3500000],
	[4001126, 6000, 6500000],
	[4001126, 10000, 8500000]
]

var wp1 = [
	1302020,
	1332025,
	1382009,
	1452016,
	1462014,
	1472030,
	1492020,
	1482020,
	1092030
];
var wp2 = [
	1302030,
	1382012,
	1412011,
	1422014,
	1432012,
	1442024,
	1452022,
	1462019,
	1472032,
	1492021,
	1482021
];
var wp3 = [
	1302064,
	1402039,
	1312032,
	1412027,
	1322054,
	1422029,
	1452045,
	1462040,
	1472055,
	1332056,
	1332055,
	1432040,
	1442051,
	1372034,
	1382039,
	1482022,
	1492022,
	1092046,
	1092045,
	1092047
];

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		cm.dispose();
		return;
	} else {
		cm.dispose();
		return;
	}
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.sendSimple("嗨，我是#p9330012#有什麼可以幫忙的？？ \r\n\r\n#b#L0#兌換35等楓葉武器。#l \r\n\r\n#L1#兌換42等楓葉武器。#l\r\n\r\n#L2#兌換64等楓葉武器。#l#k");//#l\r\n\r\n#L3#碎片兌換聖誕活動勳章。
	} else if (status === i++) {
		var msg = "";
		sel = selection;
		switch (sel) {
		case 0:
			for (var v = 0; v < wp1.length; v++) {
				var id = wp1[v];
				msg += "\r\n#b#L" + v + "##t" + id + "##l ";
			}
			break;
		case 1:
			for (var v = 0; v < wp2.length; v++) {
				var id = wp2[v];
				msg += "\r\n#b#L" + v + "##t" + id + "##l ";
			}
			break;
		case 2:
			for (var v = 0; v < wp3.length; v++) {
				var id = wp3[v];
				msg += "\r\n#b#L" + v + "##t" + id + "##l ";
			}
			break;
		}
		cm.sendSimple("您想換什麼？？" + msg);
	} else if (status === i++) {
		sel_ = selection;
		switch (sel) {
		case 0:
			cm.sendYesNo("您確定要做一個 #b#t" + wp1[sel_] + "##k? \r\n以下是你所需要的材料。\r\n#i" + req[sel][0] + "# x" + req[sel][1] + "#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + req[sel][2]);
			break;
		case 1:
			//otherreq = wp1.length >= sel_;// 除非整理好代碼, 不然這個是壞的, 所以強制指定false
			var other = (otherreq ? "#i" + wp1[sel_] + "# x 1\r\n" : "")
			cm.sendYesNo("您確定要做一個 #b#t" + wp2[sel_] + "##k? \r\n以下是你所需要的材料。\r\n" + other + "#i" + req[sel][0] + "# x" + req[sel][1] + "#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + req[sel][2]);
			break;
		case 2:
			//otherreq = wp2.length >= sel_;// 除非整理好代碼, 不然這個是壞的, 所以強制指定false
			var other = (otherreq ? "#i" + wp2[sel_] + "# x 1\r\n" : "")
			cm.sendYesNo("您確定要做一個 #b#t" + wp3[sel_] + "##k? \r\n以下是你所需要的材料。\r\n" + other + "#i" + req[sel][0] + "# x" + req[sel][1] + "#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + req[sel][2]);
			break;
		}
	} else if (status === i++) {
		var gain,
		other_req;
		switch (sel) {
		case 0:
			gain = wp1[sel_];
			break;
		case 1:
			gain = wp2[sel_];
			if (otherreq) {
				other_req = wp1[sel_];
			}
			break;
		case 2:
			gain = wp3[sel_];
			if (otherreq) {
				other_req = wp2[sel_];
			}
			break;
		}

		if (!cm.canHold(gain)) {
			cm.sendNext("你的背包裝不下");
			cm.dispose();
			return;
		} else if (cm.getPlayer().getMeso() < req[sel][2]) {
			cm.sendNext("你的楓幣不足");
			cm.dispose();
			return;
		} else if (!cm.getPlayer().haveItem(req[sel][0], req[sel][1])) {
			cm.sendNext("很抱歉，由於您的材料不足所以無法幫您製作，假如需要的話可以再來找我談談。");
			cm.dispose();
			return;
		} else if (otherreq && !cm.getPlayer().haveItem(other_req, 1)) {
			cm.sendNext("很抱歉，由於您的材料不足所以無法幫您製作，假如需要的話可以再來找我談談...");
			cm.dispose();
			return;
		}
		cm.gainMeso(-req[sel][2]);
		cm.gainItem(req[sel][0], -req[sel][1]);
		if (otherreq) {
			cm.gainItem(other_req, -1);
		}
		cm.gainItem(gain, 1);
		cm.sendOk("感謝您，看看有沒有拿到囉。 ");
		cm.dispose();
	}
}
