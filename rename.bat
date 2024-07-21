@echo off
setlocal

:: Get the full path of the current script
set "script_full_path=%~dp0"

:: Print the directory path
echo %script_full_path%

:: Execute the Node.js script from the directory
node "%script_full_path%index.js"

endlocal
