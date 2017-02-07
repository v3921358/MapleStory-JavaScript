var status = -1, sel = -1, quest = 150001, bspoint = 0;
var debug = false;
var item = [
	[1302000, 1, 1000],
	[1302001, 2, 2000],
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

	var record = cm.getQuestRecord(quest);
	var i = -1;
	bspoint = record.getCustomData() == null ? 0 : parseInt(record.getCustomData());

	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var msg = "";
		for (var v = 0; v < item.length; v++) {
			msg += "#L"+v+"##v" + item[v][0] + ":##t" + item[v][0] + ":##r" + item[v][1] + "#k個 = #b" + item[v][2] + "#d BSPQ點數#k#l\r\n";
		}
		cm.sendSimple("目前的BSPQ點數:" + bspoint + " \r\n\r\n " + msg);
	} else if (status == i++) {
		sel = selection;
		if (bspoint < item[sel][2]) {
			cm.sendNext("需要 #b" + item[sel][2] + "#k BSPQ點數, 而你只有 #r" + bspoint + "#k 點");
			cm.dispose();
			return;
		} else if (!cm.canHold(item[sel][0])) {
			cm.sendNext("請檢查背包空間後再找我兌換");
			cm.dispose();
			return;
		}
		cm.sendYesNo("請問是否要兌換#v" + item[sel][0] + "#" + item[sel][1] + "個? 一共需要#r" + item[sel][2] + " BSPQ點#k");
	} else if (status == i++) {
		record.setCustomData(bspoint - item[sel][2]);
		cm.gainItem(item[sel][0], item[sel][1]);
		bspoint = record.getCustomData() == null ? 0 : parseInt(record.getCustomData());
		cm.sendNext("兌換#v" + item[sel][0] + "#" + item[sel][1] + "個成功, 請查看背包\r\n剩餘點數為: " + bspoint);
		cm.dispose();
	}
}
