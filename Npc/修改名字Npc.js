var status = -1, gash = -1, req = 15000;
var bannedMsg = ["GM", "Fuck", "Shit", "Bitch", "雞掰", "幹", "肏"]; // 大小寫沒差

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	var c = cm.getPlayer();
	gash = c.getCSPoints(1);
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		if (gash >= req) {
			cm.sendYesNo("您擁有" + gash + "GASH點數，看起來您的GASH點數是足夠的，更改遊戲角色名稱需要" + req + " GASH點數，您要更改嗎？");
		} else {
			cm.sendNext("抱歉由於您的GASH點數不足" + req + "點，無法更改角色名稱。");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.sendGetText("請輸入您欲更改的角色暱稱（嚴格禁止包含以下內容：空白或底線、任何符號、不雅文字、注音文、任何誤導性字眼、與任何管理員相似之暱稱、與他人重複之暱稱)如有發現違規事宜，GM將不進行通知直接隨機改名，且不退回GASH點數以示懲戒。）");
	} else if (status == 2) {
		newusername = cm.getText();
		var next = true;

		for (var v = 0; v < bannedMsg.length; v++) {
			if (newusername.toLocaleUpperCase().indexOf(bannedMsg[v].toLocaleUpperCase()) != -1) {
				next = false;
				break;
			}
		}

		if (newusername.length == 0) {
			next = false;
		}

		if (!next) {
			cm.sendNext("您輸入的新名稱包含非法字元，請重新輸入。");
		} else if (Packages.client.MapleCharacterUtil.getIdByName(newusername) != -1) {
			cm.sendNext("您輸入的新名稱已經重複，請重新輸入。");
		} else {
			cm.getPlayer().modifyCSPoints(1, -req, true);
			c.setName(newusername);
			c.fakeRelog();
		}
		cm.dispose();
	}
}
