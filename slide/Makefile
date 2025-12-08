.PHONY: live build clean

SRC_DIRS := ./src
OBJS := $(shell find $(SRC_DIRS) -name '*.md' | sed 's|^.*/||')

live:
	@echo "Previewing main slides..."
	@reveal-md $(SRC_DIRS)/$(LEC).md -w --scripts https://cdn.tonycrane.cc/heti/heti.js,js/heti_worker.js --template template.html || true

build:
	@echo "Building main slides..."
	@reveal-md $(SRC_DIRS)/$(LEC).md --scripts https://cdn.tonycrane.cc/heti/heti.js,js/heti_worker.js --template template.html --static ../site --assets-dir assets
	@rm ../site/$(LEC).html

all:
	@for file in $(OBJS); do \
		reveal-md $(SRC_DIRS)/$$file \
			--scripts https://cdn.tonycrane.cc/heti/heti.js,js/heti_worker.js \
			--template template.html \
			--static ../site/$${file%.md} \
			--assets-dir assets; \
	done
clean:
	@echo "Cleaning up..."
	rm -rf ../site/
