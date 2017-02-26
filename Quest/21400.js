var status = -1;

function start(mode, type, selection) {
	qm.startQuest(21400);
	qm.dispose();
}

function end(mode, type, selection) {
	qm.sendNext("Please talk to Harmonia of Leafre instead.");
	qm.dispose();
}