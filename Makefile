# ============================================================
#  Montassar Fatfouti — Portfolio Makefile
#  Static site: no build step, no framework, no DB.
#  Hosting: GitHub Pages / Netlify / Vercel (all free tier).
# ============================================================

# ── Config ──────────────────────────────────────────────────
PORT    ?= 8080
DIR     := $(shell pwd)
BROWSER := open          # macOS. Linux: xdg-open  Windows: start

.DEFAULT_GOAL := help
.PHONY: help serve open dev validate lint-css zip clean \
        deploy-netlify deploy-gh-pages deploy-vercel hosting-info

# ── Help ────────────────────────────────────────────────────
help:   ## Show all available make targets
	@printf "\n  \033[1mPortfolio — Makefile commands\033[0m\n\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		awk 'BEGIN {FS = ":.*?## "}; \
		     {printf "  \033[36m%-22s\033[0m %s\n", $$1, $$2}'
	@printf "\n"

# ── Local development ────────────────────────────────────────
serve:  ## Start local HTTP server on PORT (default 8080)
	@printf "\033[32m→\033[0m Serving at \033[4mhttp://localhost:$(PORT)\033[0m\n"
	@python3 -m http.server $(PORT) --directory $(DIR)

open:   ## Open portfolio in default browser
	@$(BROWSER) http://localhost:$(PORT)

dev:    ## Start server AND open browser simultaneously
	@printf "\033[32m→\033[0m Starting dev server at \033[4mhttp://localhost:$(PORT)\033[0m\n"
	@$(BROWSER) http://localhost:$(PORT) & python3 -m http.server $(PORT) --directory $(DIR)

# ── Validation ───────────────────────────────────────────────
validate:   ## Validate HTML (requires: npm i -g html-validate)
	@html-validate index.html && printf "\033[32m✓\033[0m HTML is valid\n"

lint-css:   ## Lint CSS (requires: npm i -g stylelint stylelint-config-standard)
	@stylelint "assets/css/*.css" && printf "\033[32m✓\033[0m CSS is valid\n"

# ── Packaging ─────────────────────────────────────────────────
zip:    ## Bundle the site into portfolio.zip for manual hosting upload
	@printf "\033[32m→\033[0m Packaging ...\n"
	@zip -r portfolio.zip . \
		--exclude "*.DS_Store" \
		--exclude ".git/*"     \
		--exclude "*.zip"      \
		--exclude "node_modules/*"
	@printf "\033[32m✓\033[0m portfolio.zip ready — upload at netlify.com/drop\n"

clean:  ## Remove build artefacts
	@rm -f portfolio.zip
	@printf "\033[32m✓\033[0m Cleaned\n"

# ── Free-tier deployment ─────────────────────────────────────
deploy-netlify:     ## Deploy to Netlify (requires: npm i -g netlify-cli)
	@printf "\033[32m→\033[0m Deploying to Netlify ...\n"
	@npx netlify deploy --prod --dir $(DIR)

deploy-gh-pages:    ## Deploy to GitHub Pages (requires: npm i -g gh-pages)
	@printf "\033[32m→\033[0m Deploying to GitHub Pages ...\n"
	@npx gh-pages --dist $(DIR)

deploy-vercel:      ## Deploy to Vercel (requires: npm i -g vercel)
	@printf "\033[32m→\033[0m Deploying to Vercel ...\n"
	@npx vercel --prod $(DIR)

# ── Hosting reference ────────────────────────────────────────
hosting-info:   ## Print zero-cost hosting options
	@printf "\n  \033[1mFree hosting options for this static site\033[0m\n\n"
	@printf "  \033[36mGitHub Pages\033[0m (recommended — 100%% free, custom domain support)\n"
	@printf "    1. Push this folder to a public GitHub repo\n"
	@printf "    2. Settings → Pages → Source: Deploy from branch (main, / root)\n"
	@printf "    3. Live at \033[4mhttps://<username>.github.io/<repo>\033[0m\n\n"
	@printf "  \033[36mNetlify\033[0m (drag-and-drop, zero config)\n"
	@printf "    1. Run \033[1mmake zip\033[0m\n"
	@printf "    2. Drag portfolio.zip to \033[4mhttps://app.netlify.com/drop\033[0m\n"
	@printf "    3. Live instantly — or run \033[1mmake deploy-netlify\033[0m via CLI\n\n"
	@printf "  \033[36mVercel\033[0m\n"
	@printf "    Run: \033[1mmake deploy-vercel\033[0m\n\n"
	@printf "  All three options: \033[1m\$$0/month\033[0m for a static site with no DB.\n\n"
