.PHONY: live build clean

live:
	@echo "Previewing main slides..."
	-@reveal-md src/lec0/lec0.md -w --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html || true

build:
	@echo "Building main slides..."
	@reveal-md src/lec0/lec0.md --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html --static site/lec0 --assets-dir assets
	@cp assets/logo.png site/lec0
	@cp src/lec0/thanks.png site/lec0
	@rm site/lec0/lec0.html

clean:
	@echo "Cleaning up..."
	rm -rf site/
