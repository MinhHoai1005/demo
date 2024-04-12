import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container,{}]}>
      <Text>LoginScreen</Text>
      {/* <Button title='Login' onPress={async () => await AsyncStorage.setItem('assetToken', 'aaaaa')}></Button> */}
      <ButtonComponent text='LOGIN' onPress={() => console.log('Login')}
        icon={
        <View>
          <Text>N</Text>
        </View>
      }
      />
    </View>
  )
}

export default LoginScreen