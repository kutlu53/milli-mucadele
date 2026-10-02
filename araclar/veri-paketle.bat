@echo off
rem data\heroes.json ve data\bulletins.json dosyalarini, oyunun cift tiklamayla (sunucusuz) acilabilmesi icin
rem data\heroes.veri.js ve data\bulletins.veri.js dosyalarina kopyalar. Bu dosyalar her degistiginde calistirin.
cd /d "%~dp0.."
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference='Stop'; foreach($d in @(@('heroes','IP_VERI'),@('bulletins','IP_BULTEN'))){ $j=[IO.File]::ReadAllText('data\'+$d[0]+'.json',[Text.Encoding]::UTF8); $null=$j | ConvertFrom-Json; [IO.File]::WriteAllText('data\'+$d[0]+'.veri.js','window.'+$d[1]+' = '+$j.TrimEnd()+';'+[Environment]::NewLine,(New-Object Text.UTF8Encoding $false)); Write-Host ('Tamam: data\'+$d[0]+'.veri.js guncellendi.') }"
if errorlevel 1 echo HATA: Veri dosyasi okunamadi. Virgul ve tirnak isaretlerini kontrol edin.
pause
