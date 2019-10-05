//-------------------- 右键菜单演示 ------------------------//
chrome.contextMenus.create({
	title: "使用简历填充助手快速填充",
	onclick: function(){
		chrome.notifications.create(null, {
			type: 'basic',
			iconUrl: 'img/icon.png',
			title: '这是标题',
			message: '您刚才点击了自定义右键菜单！'
		});
	}
});