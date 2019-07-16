// 2014/07/26 By 宗達


var status = -1;
var Item1 = 4000412;
var Item2 = 4000001;
var N1 = 5;
var N11 = 20;
var N111 = 25;
var N1111 = 50;
var N2 = 10;
var N22 = 30;
var N222 = 50;
var N2222 = 300;
var d1 = 30;
var d2 = 50;
var d3 = 100;
var d4 = 200;
var HM1 = 50;
var HM2 = 100;
var HM3 = 200;
var HM4 = 400;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 2 || status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var t0 = "#e#d我是電腦自動升級裝備系統\r\n";
		var t1 = "#e#r注意:請把要升級的裝備放在裝備欄的第一格\r\n";
		var t2 = "#e#b請選擇你要升級的類別";
		var t20 = "#e#b(目前指定裝備為: " + (cm.getInventory(1).getItem(1) == null ? 　 "#r無任何裝備#b" : "#i" + cm.getInventory(1).getItem(1).getItemId() + "#") + ")\r\n";
		var talk = t0 + t1 + t2 + t20;
		var s0 = "#e#L1##d[初階升級]使用" + N1 + "顆#i" + Item1 + "##b升級裝備！ \r\n#r(力|敏|幸|智|攻+#b" + N2 +
			"#r點、防禦+#b" + d1 + "#r點、HP|MP+#b" + HM1 + "#r點) \r\n";
		var s1 = "#e#L2##d[中階升級]使用" + N11 + "顆#i" + Item1 + "##b升級裝備！  \r\n#r(力|敏|幸|智|攻+#b" + N22 + "#r點、防禦+#b" + d2 + "#r點、HP|MP+#b" + HM2 + "#r點) \r\n";
		var s2 = "#e#L3##d[高階升級]使用" + N111 + "顆#i" + Item1 + "##b升級裝備！ \r\n#r(力|敏|幸|智|攻+#b" + N222 + "#r點、防禦+#b" + d3 + "#r點、HP|MP+#b" + HM3 + "#r點) \r\n";
		var s3 = "#e#L4##d[超階升級]使用" + N1111 + "顆#i" + Item1 + "#+#i" + Item2 + "#" + HM4 + "個 #rPVP殺人數" + N2222 + "個#b升級裝備！ \r\n#r(力|敏|幸|智|攻+#b" + N2222 + "#r點、防禦+#b" + d4 + "#r點、HP|MP+#b" + HM4 + "#r點) \r\n";
		var selectT = s0 + s1 + s2;
		cm.sendSimple(talk + selectT);
	} else if (status == 1) {
		if (cm.getInventory(1).getItem(1) == null) {
			cm.sendOk("#d您的裝備欄位中，第一格無任何裝備唷");
			cm.dispose();
			return;
		} else if (cm.getInventory(1).getItem(1).getUpgradeSlots() < 1) {
			cm.sendOk("#d 您的裝備捲軸使用次數已經剩下0囉 ");
			cm.dispose();
			return;
		} else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
			cm.sendOk("#d 您的裝備不能為點裝 ");
			cm.dispose();
			return;
		} else if (!cm.haveItem(Item1)) {
			cm.sendOk("#d 您沒有#i" + Item1 + "#唷 ");
			cm.dispose();
			return;
		}
		if (selection == 1) {
			if (!cm.haveItem(Item1, N1)) {
				cm.sendOk("#d您的#i" + Item1 + "#沒有" + N1 + "個唷");
				cm.dispose();
				return;
			}
			cm.gainItem(Item1, -N1);
			cm.equipupdate(1, cm.getPlayer(), N2, HM1, d1);
			cm.getPlayer().saveToDB(false, false);
			cm.WorldMessage("[恭喜訊息] 玩家: " + cm.getPlayer().getName() + " 成功將裝備給初階升級了 ,大家恭喜" + (cm.getChar().getGender() == 0 ? "他" : "她") + "吧");
		} else if (selection == 2) {
			if (!cm.haveItem(Item1, N11)) {
				cm.sendOk("#d您的#i" + Item1 + "#沒有" + N11 + "個唷");
				cm.dispose();
				return;
			}

			cm.gainItem(Item1, -N11);
			cm.equipupdate(1, cm.getPlayer(), N22, HM2, d2);
			cm.getPlayer().saveToDB(false, false);
			cm.WorldMessage("[恭喜訊息] 玩家: " + cm.getPlayer().getName() + " 成功將裝備給中階升級了 ,大家恭喜" + (cm.getChar().getGender() == 0 ? "他" : "她") + "吧");
		} else if (selection == 3) {
			if (!cm.haveItem(Item1, N111)) {
				cm.sendOk("#d您的#i" + Item1 + "#沒有" + N111 + "個唷");
				cm.dispose();
				return;
			}
			cm.gainItem(Item1, -N111);
			cm.equipupdate(1, cm.getPlayer(), N222, HM3, d3);
			cm.getPlayer().saveToDB(false, false);
			cm.WorldMessage("[恭喜訊息] 玩家: " + cm.getPlayer().getName() + " 成功將裝備給高階升級了 ,大家恭喜" + (cm.getChar().getGender() == 0 ? "他" : "她") + "吧");
		} else if (selection == 4) {
			if (!cm.haveItem(Item2, HM4)) {
				cm.sendOk("#d您的#i" + Item2 + "#沒有" + HM4 + "個唷");
				cm.dispose();
				return;
			} else if (!cm.haveItem(Item1, N1111)) {
				cm.sendOk("#d您的#i" + Item1 + "#沒有" + N1111 + "個唷");
				cm.dispose();
				return;
			} else if (cm.getPvpKills() < N2222) {
				cm.sendOk("#d您的PVP殺人數沒有到達" + N2222 + "個");
				cm.dispose();
				return;
			}
			cm.gainItem(Item1, -N1111);
			cm.gainItem(Item2, -HM4);
			cm.equipupdate(1, cm.getPlayer(), N2222, HM4, d4);
			cm.WorldMessage("[恭喜訊息] 玩家: " + cm.getPlayer().getName() + " 成功將裝備給超階升級了 ,大家恭喜" + (cm.getChar().getGender() == 0 ? "他" : "她") + "吧");
			cm.dispose();
		}

	}
}


/*

	Java增加Npc函數:
	
    public void equipupdate(byte slot, int stats, int HMP, int def) {
        MapleCharacter player = getPlayer();
        MapleInventory equip = player.getInventory(MapleInventoryType.EQUIP);
        Equip eu = (Equip) equip.getItem(slot);
        int item = equip.getItem(slot).getItemId();
        Equip nItem = (Equip) player.getInventory(MapleInventoryType.EQUIP).getItem(slot).copy();
        nItem.setStr((short) (eu.getStr() + stats)); // STR
        nItem.setDex((short) (eu.getDex() + stats)); // DEX
        nItem.setInt((short) (eu.getInt() + stats)); // INT
        nItem.setLuk((short) (eu.getLuk() + stats)); //LUK
        nItem.setHp((short) (eu.getHp() + HMP)); // HP
        nItem.setMp((short) (eu.getMp() + HMP)); // MP
        nItem.setWdef((short) (eu.getWdef() + def)); //WDEF
        nItem.setMdef((short) (eu.getMdef() + def)); //MDEF
        nItem.setWatk((short) (eu.getWatk() + stats));
        nItem.setMatk((short) (eu.getMatk() + stats));
        // nItem.setPotential1(eu.getPotential1());
        // nItem.setPotential2(eu.getPotential2());
        // nItem.setPotential3(eu.getPotential3());
        nItem.setUpgradeSlots((byte) (eu.getUpgradeSlots() - 1)); // 可升級次數
        nItem.setLevel((byte) (eu.getLevel() + 1)); // 裝備已升級次數
        player.getInventory(MapleInventoryType.EQUIP).addItem(nItem);
        player.getInventory(MapleInventoryType.EQUIP).removeItem(slot); // 原始物品刪除
        getPlayer().fakeRelog();
    }

*/