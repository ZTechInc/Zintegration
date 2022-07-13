const mobileOS = Platform.OS

const appStoreUrl = 'https://apps.apple.com/in/app/zerv-life/id1543327463'
const playStoreUrl = 'market://details?id=com.zervlife'
const iosAppUrl = 'ZervLife://zerv.com'
const androidAppUrl = 'zerv://zervlife'

openApp = () =>{
  if(mobileOS == 'ios'){
      Linking.canOpenURL(iosAppUrl).then( () => {
      return Linking.openURL(iosAppUrl);
      }).catch( err => {
      console.log('App not found in mobile')
      return Linking.openURL(appStoreUrl)
      });
    }
    else{
      Linking.canOpenURL(androidAppUrl).then( () => {
      return Linking.openURL(androidAppUrl);
      }).catch( err => {
      console.log('App not found in mobile')
      return Linking.openURL(playStoreUrl)
      });
    }
}

const App = () => {

  return (
    <View style={styles.body}>
        <TouchableOpacity style={styles.button} 
          onPress={openApp}>
          <Text style={styles.text}>Zerv Mobile Access</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffffff',
  },
  button:{
    padding:20,
    backgroundColor:'#002343',
    alignItems:'center',
    borderRadius:5,
    borderWidth:1,
    borderColor:'blue'
  },
  text:{
    color:'#ffffff',
    fontSize:25,
    alignContent:'center',
    padding:15
  }
});

export default App;
