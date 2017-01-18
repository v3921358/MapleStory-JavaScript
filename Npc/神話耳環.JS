/*
 宗達手 2015/2/7
 */
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
            cm.sendSimple("#e#h #  #b您好，我是活動NPC#i5021018#！\r\n#r【Ｎew!!】 #k本次活動內容:\r\n#i5021011##k- 推出新的#b【神話耳環】#i1032205#\r\n#i5021011##k- 並且有升級制度\r\n#r#i5021011##k- 兌換以及升級條件如下\r\n#L1#2個#i4310052# 兌換#i1032205#【神話耳環 -第一階段】\r\n#L2##b4個#i4310052#升級#i1032206#【神話耳環 - 第二階段】\r\n#L3##b6個#i4310052#升級#i1032207#【神話耳環 - 第三階段】\r\n#L4##b8個#i4310052#升級#i1032208#【神話耳環 - 第四階段】\r\n#L5##b10個#i4310052#升級#i1032209#【神話耳環 - 第五階段】\r\n#L6##b12個#i4310052#升級#i1032219#【神話耳環 - 最終階段】");
        } else if (status == 1) {
            if (!cm.canHold(1032205)) {
                cm.sendOk("您的背包空間不足。");//原版無
                cm.dispose();
                return;
            }
            switch (selection) {
                case 1:
                    if (!cm.getPlayer().haveItem(4310052, 2)) {
                        cm.sendOk("#i4310052##r少於2個無法換兌。");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4310052, -2);
                    cm.gainItem(1032205, 1);
                    cm.sendOk("#i1032205#已經放到您的背包囉。");//不確定 當時無開放
                    cm.dispose();
                    break;
                case 2:
                    if (!cm.getPlayer().haveItem(4310052, 4)) {
                        cm.sendOk("#i4310052##r少於4個無法換兌。");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1032205, 1)) {//不確定 當時無開放
                        cm.sendOk("您身上沒有#i1032205#。");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4310052, -4);
                    cm.gainItem(1032205, -1);
                    cm.gainItem(1032206, 1);
                    cm.sendOk("#i1032206#已經放到您的背包囉。");//不確定 當時無開放
                    cm.dispose();
                    break;
                case 3:
                    if (!cm.getPlayer().haveItem(4310052, 6)) {
                        cm.sendOk("#i4310052##r少於6個無法換兌。");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1032206, 1)) {//不確定 當時無開放
                        cm.sendOk("您身上沒有#i1032206#。");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4310052, -6);
                    cm.gainItem(1032206, -1);
                    cm.gainItem(1032207, 1);
                    cm.sendOk("#i1032207#已經放到您的背包囉。");//不確定 當時無開放
                    cm.dispose();
                    break;
                case 4:
                    if (!cm.getPlayer().haveItem(4310052, 8)) {
                        cm.sendOk("#i4310052##r少於8個無法換兌。");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1032207, 1)) {//不確定 當時無開放
                        cm.sendOk("您身上沒有#i1032207#。");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4310052, -8);
                    cm.gainItem(1032207, -1);
                    cm.gainItem(1032208, 1);
                    cm.sendOk("#i1032208#已經放到您的背包囉。");//不確定 當時無開放
                    cm.dispose();
                    break;
                case 5:
                    if (!cm.getPlayer().haveItem(4310052, 10)) {
                        cm.sendOk("#i4310052##r少於10個無法換兌。");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1032208, 1)) {//不確定 當時無開放
                        cm.sendOk("您身上沒有#i1032208#。");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4310052, -10);
                    cm.gainItem(1032208, -1);
                    cm.gainItem(1032209, 1);
                    cm.sendOk("#i1032209#已經放到您的背包囉。");//不確定 當時無開放
                    cm.dispose();
                    break;
                case 6:
                    if (!cm.getPlayer().haveItem(4310052, 12)) {
                        cm.sendOk("#i4310052##r少於12個無法換兌。");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1032209, 1)) {//不確定 當時無開放
                        cm.sendOk("您身上沒有#i1032209#。");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4310052, -12);
                    cm.gainItem(1032209, -1);
                    cm.gainItem(1032219, 1);
                    cm.sendOk("#i1032219#已經放到您的背包囉。");//不確定 當時無開放
                    cm.dispose();
                    break;
            }
        }
    }
}	