var map = 108010700;

function enter(pi) {
	if (pi.getQuestStatus(21301) == 1) {
		pi.resetMap(map);
		pi.warp(map, 1);
	} else {
		pi.warp(140020300, 1);
	}
}
