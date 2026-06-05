.DEFAULT_GOAL := help

# core
APP_NAME := iamnande
WORKDIR  := $(shell pwd)
SHELL    := /usr/bin/env bash

APP_LOG_FMT := `/bin/date "+%Y-%m-%d %H:%M:%S %z [$(APP_NAME)]"`

# --------------------------------------------------
# Help
# --------------------------------------------------
.PHONY: help
help: ## help: display available targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m make %-20s -> %s\n\033[0m", $$1, $$2}'

# --------------------------------------------------
# Setup Targets
# --------------------------------------------------
.PHONY: setup
setup: ## setup: install dependencies
	@echo $(APP_LOG_FMT) "installing dependencies"
	@pnpm install

.PHONY: setup-clean
setup-clean: ## setup: clean and reinstall dependencies
	@echo $(APP_LOG_FMT) "cleaning and reinstalling dependencies"
	@rm -rf node_modules .nuxt
	@pnpm install

# --------------------------------------------------
# Dev Targets
# --------------------------------------------------
.PHONY: dev
dev: ## dev: start development server
	@echo $(APP_LOG_FMT) "starting development server"
	@pnpm dev

.PHONY: build
build: ## dev: build for production
	@echo $(APP_LOG_FMT) "building for production"
	@pnpm build

.PHONY: preview
preview: build ## dev: preview production build
	@echo $(APP_LOG_FMT) "previewing production build"
	@pnpm preview

# --------------------------------------------------
# Clean Targets
# --------------------------------------------------
.PHONY: clean
clean: ## clean: remove build artifacts
	@echo $(APP_LOG_FMT) "removing build artifacts"
	@rm -rf .nuxt .output

.PHONY: clean-all
clean-all: clean ## clean: remove build artifacts and dependencies
	@echo $(APP_LOG_FMT) "removing build artifacts and dependencies"
	@rm -rf node_modules
