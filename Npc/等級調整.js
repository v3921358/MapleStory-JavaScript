var status = -1;

function start(){
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
            cm.sendSimple("#L0##r變更#d等級\r\n#L1##r提升#d等級");
        } else if (status == 1) {
            if (selection == 0) {
                cm.sendGetNumber("#d請輸入你要#r變更#d到的等級", 1, 1, 255);
                choices = 0;
            } else if (selection = 1) {
                cm.sendGetNumber("#d請輸入你要#r升級#d的等級", 1, 1, (255 - cm.getPlayer().getLevel()));
                choices = 1;
            } else {
                cm.dispose();
            }
        } else if (status == 2) {
            input = selection;
            var statups = new java.util.ArrayList();
            if (choices == 0) {
                cm.getPlayer().setLevel(input);
				cm.getPlayer().updateSingleStat(Packages.client.MapleStat.LEVEL, input);
             } else if (choices == 1) {
                for (var x = 0; x < input; x++) {
                    cm.getPlayer().levelUp();
                }
            }
            cm.getPlayer().setExp(0);
			cm.getPlayer().updateSingleStat(Packages.client.MapleStat.EXP, 0);
            cm.dispose();
        } else {
            cm.dispose();
        }
    }
}