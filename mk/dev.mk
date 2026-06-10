BUILD_TARGETS ?= .nuxt .output .data
BUILD_DEPS    ?= node_modules

.PHONY: clean
clean: ## clean: remove build artifacts
	@echo $(APP_LOG_FMT) "removing build artifacts"
	@rm -rf $(BUILD_TARGETS) $(BUILD_DEPS)

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

.PHONY: setup
setup: clean ## setup: install dependencies
	@echo $(APP_LOG_FMT) "installing dependencies"
	@pnpm install
