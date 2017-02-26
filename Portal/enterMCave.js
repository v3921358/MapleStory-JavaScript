function enter(pi) {
	if (pi.isQuestActive(21201)) { //aran first job
		pi.forceCompleteQuest(21201);
		pi.playerMessage(5, "You recovered your memories!");
	}
	if (pi.getQuestStatus(21302) == 1) {
		pi.resetMap(108010702);
		pi.warp(108010701, 0);
	} else {
		pi.warp(108000700, 0);
	} //what does this even do
}
