##############################
# build sencha 5 phonegap app
##############################

# modify these:
root="/Users/gomes/code"
appName="testapp"

touchSDK="/Users/gomes/bin/Sencha/touch-2.4.2/"
stashFolder="/Users/gomes/code/stash"

# not these
projectFolder=$root/$appName
appNameSpace="com.gasstove."@appName

# sencha version should be 5.1.3.61
which sencha

# 4.2.0-0.24.0
phonegap -v

# remove existing project
rm -fr $projectFolder
mkdir $projectFolder

# generate app
sencha -sdk $touchSDK generate app $appName $projectFolder

# remove unnecessary stuff
rm $projectFolder/app/Readme.md
rm $projectFolder/app/view/Readme.md
rm $projectFolder/app/store/Readme.md
rm $projectFolder/app/controller/Readme.md
rm $projectFolder/app/form/Readme.md
rm $projectFolder/app/model/Readme.md
rm $projectFolder/app/view/Main.js

# replace 'picui' with $appName in /app
cd $projectFolder/app
grep -rl picui . | xargs sed -i.bak "s|picui|$appName|g"
find . -type f -name "*.bak" -delete

# replace 'picui' with $appName in app.js
cd $projectFolder
grep -rl picui .
sed -i.bak "s|picui|$appName|g" app.js
rm app.js.bak

# initialize phonegap
cd $projectFolder
sencha phonegap init $appNameSpace $appName

# phonegap build user/password
cp $stashFolder/local.properties $projectFolder

# build mode = android
cd $projectFolder
sed -i.bak 's|//"platform": "ios"|"platform": "android"|' app.json
rm app.json.bak

# phonegap bug fix
# seems like there is a problem with the double quotes:
# diff $stashFolder/phonegap-impl.xml $projectFolder/.sencha/app/phonegap-impl.xml
# use this one
cp $stashFolder/phonegap-impl.xml $projectFolder/.sencha/app/

# add phonegap plugins
cd $projectFolder/phonegap
phonegap plugin add org.apache.cordova.contacts
phonegap plugin add org.apache.cordova.camera

# build the app
cd $projectFolder
sencha app build -run native
