var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest(21301);
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.getQuestStatus(21301) == 0) {
		qm.forceStartQuest(21301);
	} else if (qm.getQuestStatus(21301) == 1) {
		qm.forceCompleteQuest();
	}
	qm.dispose();
}
