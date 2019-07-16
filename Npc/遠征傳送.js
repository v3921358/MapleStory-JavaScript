var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {

	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("親愛的玩家#r#h ##k我是遠征傳送員 請問你要傳送到哪裡?\r\n\#d#L0#女皇傳送員\r\n#L1#皮卡丘傳送員\r\n#L2#混炎傳送員#L12#普炎傳送員\r\n#L7#粉紅炎魔傳送員\r\n#L4#普龍傳送員(2或4頻)\r\n#L4#混龍傳送員(3頻)\r\n#L3#凡雷恩傳送員\r\n#L5#希拉傳送員\r\n#L6#阿卡傳送員\r\n#L11#魔王巴洛谷傳送員\r\n#L8#雄獅王\r\n"); //\r\n#L9#日本天皇\r\n#L10#海怒斯
		} else if (status == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.warp(271040000);
			} else if (selection == 1) {
				cm.dispose();
				cm.warp(270050000);
			} else if (selection == 2) {
				cm.dispose();
				cm.warp(211042401);
			} else if (selection == 3) {
				cm.dispose();
				cm.warp(211070000);
			} else if (selection == 4) {
				cm.dispose();
				cm.warp(240050400);
			} else if (selection == 5) {
				cm.dispose();
				cm.warp(262000000);
			} else if (selection == 6) {
				cm.dispose();
				cm.warp(272020110);
			} else if (selection == 7) {
				cm.dispose();
				cm.warp(689010000);
			} else if (selection == 8) {
				cm.dispose();
				cm.warp(551030100);
			} else if (selection == 9) {
				cm.dispose();
				cm.warp(800040410);
			} else if (selection == 10) {
				cm.dispose();
				cm.warp(230040420);
			} else if (selection == 11) {
				cm.dispose();
				cm.warp(105100100);
			} else if (selection == 12) {
				cm.dispose();
				cm.warp(211042301);
			}
		}
	}
}
