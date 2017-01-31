/*
	* 副本: 101女神 - 向上攀爬
	* 原始腳本提取至 Paradise 1.2.3
	* 測試, 修復最後一階無法傳送 By 宗達
*/


function enter(pi) {
	try {
		var em = pi.getEventManager("OrbisPQ");
		if (em != null && em.getProperty("stage6_" + (pi.getPortal().getName().substring(2, 5)) + "").equals("1") || pi.getPortal().getName().equals("rp164")) {
			pi.warpS(pi.getMapId(), (pi.getPortal().getName().startsWith("rp08") ? 2 : pi.getPortal().getName().startsWith("rp164") ? 4 : (pi.getPortal().getId() + 4)));
		} else {
			pi.warpS(pi.getMapId(), (pi.getPortal().getName().startsWith("rp01") ? 5 : (pi.getPortal().getName().startsWith("rp05") ? 1 : (pi.getPortal().getId() - 4))));
		}
	} catch (e) {
		pi.getPlayer().dropMessage(5, "Script: " + pi.getPortal().getName() + " Error: " + e);
	}
}