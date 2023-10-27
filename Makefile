.PHONY: live build clean

live:
	@echo "Previewing main slides..."
	-@reveal-md src/lec0/main.md -w --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html || true

build:
	@echo "Building main slides..."
	@reveal-md src/lec0/main.md --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html --static site/lec0 --assets-dir assets
	@rm site/lec0/main.html

clean:
	@echo "Cleaning up..."
	rm -rf site/
