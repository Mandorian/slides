.PHONY: live build clean

live:
	@echo "Previewing main slides..."
	-@reveal-md lec0/src/main.md -w --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html || true

build:
	@echo "Building main slides..."
	@reveal-md lec0/src/main.md --scripts https://cdn.tonycrane.cc/heti/heti.js,assets/heti_worker.js --template assets/template.html --static lec0/site --assets-dir assets
	@rm lec0/site/main.html

clean:
	@echo "Cleaning up..."
	rm -rf lec0/site/
