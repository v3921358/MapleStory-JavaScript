var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest(21401);
	qm.resetMap(914020000);
	qm.warp(914020000, 0);
	qm.dispose();
}

function end(mode, type, selection) {
	 if (qm.getQuestStatus(21401) == 1) {
		qm.gainItem(1142132, 1)
		qm.changeJob(2112);
		qm.getPlayer().gainAp(5);
		qm.forceCompleteQuest();
	}
	qm.dispose();
}