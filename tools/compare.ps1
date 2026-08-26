# Stacks a reference frame above the matching build screenshot at the
# same width, so the visual-comparison loop is a single image to read.
#
#   ./tools/compare.ps1 -Time 7.0 -Shot 01-hero
#
# -Time is the timestamp in website-reference.mp4. The crop below is the
# site panel inside the presentation frame (measured once: 648x410 at 26,148
# in the 720x720 video).

param(
  [Parameter(Mandatory = $true)][double]$Time,
  [Parameter(Mandatory = $true)][string]$Shot,
  [int]$Width = 1440
)

$ff = "C:\Users\HP\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0-full_build\bin\ffmpeg.exe"
$root = Split-Path -Parent $PSScriptRoot
$src = Join-Path $root "website-reference.mp4"
$shotFile = Join-Path $root "shots\$Shot.png"
$outDir = Join-Path $root "shots\compare"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$out = Join-Path $outDir "$Shot.jpg"

if (-not (Test-Path $shotFile)) { throw "missing screenshot: $shotFile" }

# Reference panel is 648x410 => 1.5805 aspect; match the build width.
$refH = [int][math]::Round($Width / 1.5805)

$filter = "[0:v]crop=648:410:26:148,scale=$Width`:$refH,drawtext=fontfile='C\:/Windows/Fonts/arialbd.ttf':text='REFERENCE':x=18:y=14:fontsize=26:fontcolor=yellow:box=1:boxcolor=black@0.75:boxborderw=6[a];" +
          "[1:v]scale=$Width`:-1,drawtext=fontfile='C\:/Windows/Fonts/arialbd.ttf':text='BUILD':x=18:y=14:fontsize=26:fontcolor=cyan:box=1:boxcolor=black@0.75:boxborderw=6[b];" +
          "[a][b]vstack=inputs=2"

& $ff -y -v error -ss $Time -i $src -i $shotFile -filter_complex $filter -frames:v 1 -q:v 2 $out
Write-Output $out
