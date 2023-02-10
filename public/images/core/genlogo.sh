curl $1 -o logo.webp
convert logo.png -transparent white logo.png
cwebp logo.png -o logo.webp
