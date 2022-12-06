import React from 'react';
import {Button, TextInput, View} from 'react-native';

const MyButton = ({text}) => {
  const color = text ? '#1da1f2' : 'white';

  return <Button title="İleri" color={color} />;
};

const MyApp = () => {
  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <TextInput
        placeholder="Harf giriniz"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        placeholder="Şifre giriniz"
        value={password}
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
      />
      <MyButton text={text} />
    </View>
  );
};

export default MyApp;
