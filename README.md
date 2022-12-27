# Getting started 🚀

- Do `npm i` in the root directory and in the "/client" folder. The React App lives in the "/client" directory.
- In the "/client" directory there is a .env.example file. Rename it to .env and change the variable to your url/api.
- In the root directory there is a .env.example file too. Rename it to .env and put your DATABASE_URL ie the postgresql connection URL. The port variable is optional.
- Run `npm run buildClient` to build the react app (at the root folder). A clientBuild folder will be created.
- Run "`npx prisma generate`" and "`npx prisma migrate dev`" to generate the prisma client and apply the migrations to the db.
- In the root directory run `npm run dev` and both frontend and backend will run concurrently. The React app will live at localhost:3006 and the api at localhost:5000/api