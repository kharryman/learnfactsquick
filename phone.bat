REM FOR BUILDING TO PHONE:
@ECHO ON
   ECHO BUILDING FOR DEBUG...
   CALL del /q ".\platforms\android\build\outputs\apk\android-debug.apk"
   CALL ionic cordova build android
   CALL adb install -r platforms/android/build/outputs/apk/android-debug.apk
   CALL cd C:\workspace\learnfactsquick
@ECHO OFF
