/*

發佈至小馬論壇
2017/01/18 -- 紅包獎勵Npc By 宗達
對話參考 : DreamMS -- 封包擷取
對話修改 : 無

*/

var status = -1, need = 4000306, sel = -1, skill = false;
var exchange = [
	[1302201, 500],
	[1003204, 1000],
	[1004167, 1000],
	[1003588, 1000],
	[1052892, 1000],
	[1052575, 1000],
	[1102583, 1000],
	[1102748, 1000],
	[3010798, 1000],
	[3010593, 1000],
	[1004249, 1000],
	[1142249, 3000],
	[2101120, 100],
	[8, 1000, true],
	[1050289, 1000],
	[1052634, 1000],
	[1112156, 1000],
	[1112268, 1000],
	[1004530, 1000],
	[1082657, 1000],
	[1052942, 1000],
]

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
	} else if (status == i++) {
		var msg = "";
		for (var i = 0; i < exchange.length; i++) {
			var id = exchange[i][0];
			var req = exchange[i][1];
			skill = exchange[i].length > 1 && exchange[i][2];
			if (skill) {
				msg += "#L" + i + "##s" + id + "##q" + id + "#(" + req + "個)";
			} else {
				msg += "#L" + i + "##i" + id + "##t" + id + "#(" + req + "個)";
			}

			switch (i) {
			case 0:
				msg += "武器";
				break;
			case 6:
			case 7:
				msg += "點商披風";
				break;
			case 13:
				msg += "三寵暫無特效,待修復";
				break;
			}
			msg += "\r\n";
		}
		cm.sendSimple("#r嗨!我是春節活動NPC大頭佛，春節快到了!#k\r\n今年過年從怪物們身上收集紅包#i" + need + "#\r\n"+
		"可以兌換豐富的獎品唷!#r請注意背包有空位再兌換!如兌換失敗不做補償!#b活動到1/31,請不要隨意丟棄紅包,還會陸續新增獎勵給各位兌換哦!:\r\n" + msg);
	} else if (status == i++) {
		sel = selection;
		var error = null;
		if (!cm.canHold(exchange[selection][0])) {
			error = "背包空間不足";
		} else if (!cm.haveItem(need, exchange[selection][1])) {
			error = "道具#i" + need + "# 需要#r" + exchange[selection][1] + "#k個";
		}
		if (error != null) {
			cm.sendNext(error);
			cm.dispose();
			return;
		}
		cm.sendYesNo("請確認你所選取的道具是否為#i" + exchange[selection][0] + "##t" + exchange[selection][0] + "#\r\n 需要的#i" + need + "#為#r" + exchange[selection][1] + "#k個");
	} else if (status == i++) {
		if (!skill) {
			cm.gainItem(exchange[sel][0], 1);
		} else {
			cm.teachSkill(exchange[sel][0], 1);
		}
		cm.gainItem(need, -exchange[sel][1]);
		cm.sendNext("恭喜兌換成功");
		cm.dispose();
	}
}