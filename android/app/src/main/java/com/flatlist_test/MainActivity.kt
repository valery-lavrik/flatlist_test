package com.flatlist_test

// решение проблемы с переиоткрыванием
// https://github.com/react-native-component/react-native-smart-splash-screen/issues/20
// https://reactnavigation.org/docs/getting-started/
import android.os.Bundle // required for onCreate parameter
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {


  /**
   * решение проблемы с переиоткрыванием
   * https://stackoverflow.com/questions/57709742/unable-to-instantiate-fragment-com-swmansion-rnscreens-screen
   * https://reactnavigation.org/docs/getting-started/
   */
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null);
  }


  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "flatlist_test"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
