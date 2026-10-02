@echo off
rem data\heroes.json dosyasini, oyunun cift tiklamayla (sunucusuz) acilabilmesi icin
rem data\heroes.veri.js dosyasina kopyalar. heroes.json her degistiginde calistirin.
cd /d "%~dp0.."
powershell -NoProfile -ExecutionPolicy Bypass -Command "$j=[IO.File]::ReadAllText('data\heroes.json',[Text.Encoding]::UTF8); $null=$j | ConvertFrom-Json; [IO.File]::WriteAllText('data\heroes.veri.js','window.IP_VERI = '+$j.TrimEnd()+';'+[Environment]::NewLine,(New-Object Text.UTF8Encoding $false)); Write-Host 'Tamam: data\heroes.veri.js guncellendi.'"
if errorlevel 1 echo HATA: heroes.json okunamadi. Virgul ve tirnak isaretlerini kontrol edin.
pause
