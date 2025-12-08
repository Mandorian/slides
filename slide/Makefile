.PHONY: live build clean

SRC_DIRS := ./src
OBJS := $(shell find $(SRC_DIRS) -name '*.md' | sed 's|^.*/||')

live:
	@echo "Previewing main slides..."
	@reveal-md $(SRC_DIRS)/$(LEC).md -w --scripts https://cdn.tonycrane.cc/heti/heti.js,js/heti_worker.js --template template.html || true

build:
	@echo "Building main slides..."
	@reveal-md $(SRC_DIRS)/$(LEC).md --scripts https://cdn.tonycrane.cc/heti/heti.js,js/heti_worker.js --template template.html --static ../site/$(LEC) --assets-dir assets
	@cp -r $(SRC_DIRS)/$(LEC) ../site/$(LEC)/
	@rm ../site/$(LEC)/$(LEC).html

all:
	@for file in $(OBJS); do \
		LEC=$${file%.md}; \
		reveal-md $(SRC_DIRS)/$$file \
			--scripts https://cdn.tonycrane.cc/heti/heti.js,js/heti_worker.js \
			--template template.html \
			--static ../site/$$LEC \
			--assets-dir assets; \
		if [ -d "$(SRC_DIRS)/$$LEC" ]; then \
			cp -r $(SRC_DIRS)/$$LEC ../site/$$LEC/ 2>/dev/null || true; \
		fi; \
		if [ -f "../site/$$LEC/$$LEC.html" ]; then \
			rm ../site/$$LEC/$$LEC.html; \
		fi; \
	done
clean:
	@echo "Cleaning up..."
	rm -rf ../site/
