###########################
### CSS and JS Block ###
###########################

page {
	includeCSS {
		file1 = {$plugin.tx_mybox.view.templatePath}Default/css/bootstrap.min.css
		file2 = {$plugin.tx_mybox.view.templatePath}Default/css/bootstrap-responsive.min.css
		file3 = {$plugin.tx_mybox.view.templatePath}Default/css/style1.css
	}
}

page {
	includeJS {
		jsFile1 = {$plugin.tx_mybox.view.templatePath}Default/js/jquery-1.7.2.min.js
	}
	includeJSFooter {
		jsFooter1 = {$plugin.tx_mybox.view.templatePath}Default/js/bootstrap.js
		jsFooter2 = {$plugin.tx_mybox.view.templatePath}Default/js/script.js
	}
}
