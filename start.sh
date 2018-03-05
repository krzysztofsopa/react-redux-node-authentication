#!/bin/bash

gnome-terminal --tab-with-profile=Phoenix --title=ServeAndWatchApi -e 'bash -c "cd api; npm run dev"'
gnome-terminal --tab-with-profile=Phoenix --title=WatachFront -e 'bash -c "cd front; npm run watch"'
gnome-terminal --tab-with-profile=Phoenix --title=ServeFront -e 'bash -c "cd front/dist; live-server --entry-file=index.js"'

exit 0
