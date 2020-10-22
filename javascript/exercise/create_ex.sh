#!/bin/bash 

echo -e "Creating the exercise files..." 
echo -e "The path is ${1}"
echo -e "${2} files need to be created..."  

function addContentToHTML(){ 
    echo -e "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\t\t<title>ex1</title>\n\t\t<meta name=\"description\" content=\"This is basic exercise for JavaScript.\">
    \t<script src=\"./main.js\"></script>\n\t</head>\n</html>" > ${path}/index.html
}


for(( i=1; i<=${2}; i=i+1 )) 
do 
    path="${1}/${i}" 
    mkdir -p ${path}
    touch ${path}/main.js
    touch ${path}/index.html
    echo -e 'Files are created...'
    echo -e "Adding standard contents to HTML" 
    addContentToHTML ${path}
done

echo -e "All Done!"

exit 0 