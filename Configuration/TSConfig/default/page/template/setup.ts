###############################
### Template Block ###
###############################

page.10 = TEMPLATE
page.10 {
	##############################
	### HTML Template Block ###
	##############################
	template = FILE
	template {
		file = {$plugin.tx_mybox.view.templatePath}Default/index.html
	}
	
	##############################
	### Marker Block ###
	##############################
	subparts {
		MENU < lib.textmenu
		MAIN_CONTENT < styles.content.get
	}
}