#while getopts d: flag
#do
#    case "${flag}" in
#        d) directory=${OPTARG};;
#    esac
#done
#
#cd ../eas-test-app
#npx expo export
#cd ../eas-update
#rm -rf updates/$directory/
#cp -r ../eas-test-app/dist/ updates/$directory

runtimeVersion=$(node ./scripts/exportClientExpoConfig.js | jq -r '.runtimeVersion')
directory="$runtimeVersion/$(date +%s)"

cd ../eas-test-app
npx expo export --experimental-bundle
cd ../eas-update
mkdir -p updates/$directory/
rm -rf updates/$directory/
cp -r ../eas-test-app/dist/ updates/$directory

node ./scripts/exportClientExpoConfig.js > updates/$directory/expoConfig.json