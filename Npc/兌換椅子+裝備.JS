/*
 宗達手 2015/2/7
 棉被修改 
 */

var chair = Array(3016400, 3016401, 3016402, 3016403, 3016404, 3016405, 3016406, 3016407, 3016408, 3016409, 3016410, 3016411, 3016412, 3016413, 3016414, 3016415, 3016416, 3016417, 3016418, 3016419, 3016420, 3016421, 3016422, 3016423, 3016424);
var equip = Array(1302275, 1312153, 1322203, 1332225, 1382208, 1402196, 1412135, 1422140, 1432167, 1442223, 1452205, 1462193, 1472214, 1482168, 1492179);
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
            var text1 = "#e#r安安唷#b【#h #】#r歡迎來到『粉花私服』\r\n#b目前開放兌換:\r\n#r　　【死神椅子】\r\n#r　　【夫尼爾150等武器】\r\n#b　　請慢慢挑選。\r\n#b以下每個都只要#i4310052##rX40#b歐!\r\n";
            for (var i = 0; i < chair.length; i++) {
                text1 += "#L" + i + "##i" + chair[i] + "#";
				if(i % 6 == 0){
				text1 += "\r\n";
				}
            }
            text1 += "－－－－－－－分隔線－－－－－－－\r\n";
            for (var i = chair.length; i < chair.length + equip.length; i++) {
                text1 += "#L" + i + "##i" + equip[i - chair.length] + "#";
				if(i % 5 == 0){
				text1 += "\r\n";
				}
            }
            cm.sendSimple(text1);
        } else if (status == 1) {
            if (!cm.canHold(3016400) || !cm.canHold(1302275)) {
                cm.sendOk("您的背包空間不足。");//原版無
                cm.dispose();
                return;
            } else if (!cm.getPlayer().haveItem(4310052, 40)) {
                cm.sendOk("#i4310052##r少於40個無法換兌");//原版無
                cm.dispose();
                return;
            }
            cm.gainItem(4310052, -1);
            if (selection < chair.length) {
                cm.gainItem(chair[selection], 1);
                cm.sendOk("#i" + chair[selection] + "#已經放到您的背包囉。");//不確定 當時無開放
            } else {
                cm.gainItem(equip[selection - chair.length]);
                cm.sendOk("#i" + equip[selection - chair.length] + "#已經放到您的背包囉。");//不確定 當時無開放
            }
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}