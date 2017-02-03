/*
發佈於小馬論壇
2017/02/04 -- 美容Npc By 宗達
From : 某個需求者
 */

var need = [4000000, 1];
var hair = false, face = false, finsh = false;
var show = [39100, 24033, 24034, 23037]; //顯示給玩家的
var faces = [24033, 23036, 24034, 23037];// 臉型 套用最新日福的動漫臉型
var hairs = [39100, 39110, 39130, 39330, 34340, 39350, 39360];// 臉型 套用最新日福的動漫髮型
var status = -1, sels = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else if (mode == 0) {
		if (status >= 2) {
			finsh = true;
		}
		status--;
	} else {
		cm.dispose();
		return;
	}
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (finsh) {
		cm.sendNext("歡迎下次光臨");
		cm.dispose();
	} else if (status == i++) { // 0
		cm.sendSimple("你好, 我可以幫你設計新造型, 請問要做什麼呢?\r\n\r\n#L0##b抽髮型#l\r\n#L1##r抽臉型#l\r\n\r\n#L2##d查看本期新增內容");
	} else if (status == i++) { // 1
		sels = selection;
		if (sels == 0 || sels == 1) {
			hair = false;
			face = false;
			if (sels == 0) {
				hair = true;
				sel = hairs;
			} else if (sels == 1) {
				face = true;
				sel = faces;
			}
			cm.sendYesNo("抽一次需要#i" + need[0] + "#" + need[1] + "個唷, 是否確定繼續(目前剩餘#c" + need[0] + "#)?");
		} else if (sels == 2) {
			var msg = "#d以下為本期新增內容\r\n\r\n";
			for (var v = 0; v < show.length; v++) {
				msg += "#k" + (v + 1) + ".#b #t" + show[v] + "##k\r\n";
			}
			cm.sendNext(msg);
			status = -1;
		}
	} else if (status == i++ || !finsh) { // 2

		if (!cm.haveItem(need[0], need[1])) {
			cm.sendNext("需要的材料不足");
			cm.dispose();
			return;
		}
		var rand = Math.floor(Math.random() * sel.length);
		if (hair) {
			cm.setHair(sel[rand]);
		} else if (face) {
			cm.setFace(sel[rand]);
		}
		cm.gainItem(need[0], -need[1]);
		cm.sendYesNo("恭喜抽到了#r#z" + sel[rand] + "##k, 請問是否繼續抽取");
	} else {
		cm.dispose();
	}
}
