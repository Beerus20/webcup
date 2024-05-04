all		: run\:server
			npm start

run\:server	:
			cd ./server && npm run dev

push\:%		:
				git status
				git add .
				git status
				git commit -m $(subst push:,,$@)
				git push