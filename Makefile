.PHONY: run up extract swap help

# ---------------------------------------
# help
# ---------------------------------------
help:
	@echo ""
	@echo "Available commands:"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"; printf ""} /^[a-zA-Z0-9_-]+:.*##/ {printf "  \033[32m%-12s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo ""
	@echo "Usage examples:"
	@echo "  make extract my.zip"
	@echo "  make swap            # toggle"
	@echo "  make swap -- --local"
	@echo "  make swap -- --remote"
	@echo ""

run:
	node server.js

up: run

# ---------------------------------------
# extract <path>
# ---------------------------------------
arg := $(word 2, $(MAKECMDGOALS))

extract:
	@if [ -z "$(arg)" ]; then \
		echo "😕 No path provided."; \
		echo "Usage: make extract <path_to_zip>"; \
		exit 1; \
	fi
	./bin/extract "$(arg)"

# prevent make from treating <path> as a target
$(arg):
	@:

# ---------------------------------------
# swap [--local|--remote]
# ---------------------------------------
# TODO: enable passing `--remote & --local` directely with having to run
# `make swap -- --remote` (instead) `make swap --remote`
swap:
	./bin/swap-be $(filter-out $@,$(MAKECMDGOALS))


# prevent make from treating args like --local as targets
%:
	@:
