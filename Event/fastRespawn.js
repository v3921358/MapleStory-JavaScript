// 2020/08/14
// TsungDa
// unstable script, dont use

var setupTask;
var interval = 500;

function init() {
    scheduleNew();
}

function scheduleNew() {
    setupTask = em.schedule("doRespawn", interval);
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(false);
    }
}

function doRespawn() {
    var maps = em.getChannelServer().getMapFactory().getAllMaps();
    var iter = maps.iterator();
    while (iter.hasNext()) {
        var map = iter.next();
        if (map == null) {
            continue;
        } else if (map.characterSize() <= 0) {
            continue;
        }
        map.respawn(false);
    }
    scheduleNew();
}
