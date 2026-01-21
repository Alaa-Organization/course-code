#!/bin/sh
#-----------------------------------------------------
# just like index.js was compiled, this files needs to
# be an executable file with navigating to the hello-docker
# folder with open windows terminal:
# git update-index --add --chmod=+x entrypoint.sh
#------------------------------------------------------
echo "::debug::Running entrypoint.sh"
echo "Hello $@"
echo "INPUT_WHO_TO_GREET: $INPUT_WHO_TO_GREET"
echo "HELLO: $HELLO"
time=$(date)
echo "time=$time" >> $GITHUB_OUTPUT
echo "HELLO_TIME=$time" >> $GITHUB_ENV