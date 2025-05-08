@echo off
echo Running JavaScript Examples...
echo -------------------------------------
node index.js

echo.
echo.
echo Running TypeScript Examples...
echo -------------------------------------
call npm run start:ts

echo.
echo Done!
pause 