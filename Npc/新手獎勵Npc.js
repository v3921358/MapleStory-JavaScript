/*

發佈至小馬論壇
2017/01/16 -- 新手獎勵Npc By 宗達
對話參考 : ChaChaMS -- 封包擷取
對話修改 : 由 sendOk 改成 sendNext

*/

var status = -1, rc = 10, quest = 99999;
var name = "#r#e楓之谷#k#n";
var Reward = [
	[2010000, 3],
	[2010009, 3],
	[2450000, 3],
	[5030000, 1],
	[1004403, 1],
	[1102208, 1],
	[3010577, 1],
	[5340001, 1],
	[5370000, 1]
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
		cm.sendNext("歡迎來到" + name + "，解完羅傑的任務會獲得新手獎勵包。");
	} else if (status === i++) {
		cm.sendNext("我們會給您最好的環境品質");
	} else if (status === i++) {
		cm.sendAcceptDecline("" + name + "的GM有 " + name + "女神 " + name + "GM 後端工程師GM");
	} else if (status === i++) {
		cm.sendNext("RC頻道為: " + rc);
	} else if (status === i++) {
		cm.sendNext("FB社團請搜尋:" + name + "-v113");
	} else if (status === i++) {
		cm.sendNext("準備獲得新手獎勵");
	} else if (status === i++) {
		cm.sendNext(name + "會不定時辦活動");
	} else if (status === i++) {
		var items = "";
		for (var x = 0; x < Reward.length; x++) {
			var id = Reward[x][0];
			var quantity = Reward[x][1];
			items += "#v" + id + "# " + quantity + " #t" + id + "#\r\n";
		}
		cm.sendNext("歡迎找親朋好友來遊玩\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n" + items + "\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
	} else if (status === i++) {
		var next = true;
		for (var x = 0; x < 6; x++) {
			var type = cm.getInventory(x);
			if (type.getNumFreeSlot() < Reward.length) {
				cm.sendNext("背包空間不足, 請讓背包所有欄位空格數都有 " + (Reward.length + 1) + "格");
				next = false;
				break;
			}
		}
		if (next) {
			if (!cm.isQuestFinished(quest)) {
				for (var x = 0; x < Reward.length; x++) {
					var id = Reward[x][0];
					var quantity = Reward[x][1];
					cm.gainItem(id, quantity);
				}
				cm.gainExp(10); // 獲得經驗值
				cm.forceCompleteQuest(quest);
			}
		}
		cm.dispose();
	}
}
