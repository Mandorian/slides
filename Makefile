.PHONY: live build clean

live:
	@echo "Previewing main slides..."
	#-@reveal-md src/lec0/lec0.md -w --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html || true
	-@reveal-md src/xuexue_private/introduction.md -w --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html || true
build:
	@echo "Building main slides..."
	@reveal-md src/lec0/lec0.md --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html --static site/lec0 --assets-dir assets
	@reveal-md src/lec1/lec1.md --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html --static site/lec1 --assets-dir assets
	@reveal-md src/xuexue_private/introduction.md --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html --static site/xuexue_private --assets-dir assets
	# @reveal-md README.md --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html --assets-dir assets
	@cp assets/logo.png site/lec0
	@cp assets/logo.png site/lec1
	@cp assets/logo.png site/xuexue_private
	@cp src/lec0/thanks.png site/lec0
	@cp src/lec1/thanks.png site/lec1
	@rm site/lec0/lec0.html
	@rm site/lec1/lec1.html
	@rm site/xuexue_private/introduction.html
	@cp -r src/lec1/images site/lec0
	# @rm site/README.html

clean:
	@echo "Cleaning up..."
	rm -rf site/
