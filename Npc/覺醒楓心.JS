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
		cm.sendSimple("#e#h #  #b您好，我是強化覺醒楓心的店員！\r\n#r【強化】 #k強化條件如下:\r\n#k- 強化需要宿命硬幣20個#i4310052#\r\n#L1##b強化劍士覺醒楓心(+100)=20個#i4310052#+#i1122034#\r\n#L2##b強化法師覺醒楓心(+100)=20個#i4310052#+#i1122035#\r\n#L3##b強化弓箭手覺醒楓心(+100)=20個#i4310052#+#i1122036#\r\n#L4##b強化盜賊覺醒楓心(+100)=20個#i4310052#+#i1122037#\r\n#L5##b強化海盜覺醒楓心(+100)=20個#i4310052#+#i1122038#");
        } else if (status == 1) {
		if(!cm.canHold(1122034)){
		cm.sendOk("您的背包空間不足。");//原版無
		cm.dispose();
		return;
		}else if(!cm.getPlayer().haveItem(4310052, 20)){
		cm.sendOk("#i4310052##r少於20個無法換兌。");
		cm.dispose();
		return;
		}
		cm.gainItem(4310052, -20);
		switch(selection){
		case 1:
		if(!cm.getPlayer().haveItem(1122034, 1)){
		cm.sendOk("您身上沒有#i1122034#。");
		cm.dispose();
		return;
		}
		cm.gainItem(1122034, -1);
		cm.makeProItem(1122034, 100);
		cm.sendOk("楓心強化成功。");//不確定 當時無開放
		cm.dispose();
		break;
		case 2:
		if(!cm.getPlayer().haveItem(1122035, 1)){
		cm.sendOk("您身上沒有#i1122035#。");
		cm.dispose();
		return;
		}
		cm.gainItem(1122035, -1);
		cm.makeProItem(1122035, 100);
		cm.sendOk("楓心強化成功。。");//不確定 當時無開放
		cm.dispose();
		break;
		case 3:
		if(!cm.getPlayer().haveItem(1122036, 1)){
		cm.sendOk("您身上沒有#i1122036#。");
		cm.dispose();
		return;
		}
		cm.gainItem(1122036, -1);
		cm.makeProItem(1122036, 100);
		cm.sendOk("楓心強化成功。。");//不確定 當時無開放
		cm.dispose();
		break;
		case 4:
		if(!cm.getPlayer().haveItem(1122037, 1)){
		cm.sendOk("您身上沒有#i1122037#。");
		cm.dispose();
		return;
		}
		cm.gainItem(1122037, -1);
		cm.makeProItem(1122037, 100);
		cm.sendOk("楓心強化成功。");//不確定 當時無開放
		cm.dispose();
		break;
		case 5:
		if(!cm.getPlayer().haveItem(1122038, 1)){
		cm.sendOk("您身上沒有#i1122038#。");
		cm.dispose();
		return;
		}
		cm.gainItem(1122038, -1);
		cm.makeProItem(1122038, 100);
		cm.sendOk("楓心強化成功。");//不確定 當時無開放
		cm.dispose();
		break;
		}
        }
    }
}	