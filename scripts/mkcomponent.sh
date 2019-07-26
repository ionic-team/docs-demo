cap="$(echo "$1" | gsed 's/.*/\u&/')"
cp -R src/components/_template_ src/components/$1
mv src/components/$1/_template_.tsx src/components/$1/$1.tsx
mv src/components/$1/_template_.css src/components/$1/$1.css

gsed -i "s/_template_/$1/g" src/components/$1/$1.tsx
gsed -i "s/_name_/$cap/g" src/components/$1/$1.tsx