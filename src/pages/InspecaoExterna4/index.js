//Importando bibliotecas
import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function InspecaoExterna4({ route }) {
  const navigation = useNavigation();
 //criacao da funcao ir para pagina insp. externa 5
  function irRevisao(){
    navigation.navigate('TelaConfirmacao');
  }

  const [selectedValue, setSelectedValue] = useState("Selecione Uma opção");

  return (
    <View style={{flex: 1, backgroundColor: '#64CAD9'}}>
    <View style={{height: 120 , backgroundColor: '#64CAD9'}}></View>
    <View style={{flex: 1, backgroundColor: '#214E88'}}>
      
    <Picker
        selectedValue={selectedValue}
        style={{ height: 100, width: 300 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="OK" value="dcok" />
        <Picker.Item label="NÃO SE APLICA" value="dcnao" />
        <Picker.Item label="*1" value="dcobs1" />
        <Picker.Item label="*2" value="dcobs2" />
        <Picker.Item label="*3" value="dcobs3" />
      </Picker>  

    </View> 

    <Button // botao voltar
     title=" Voltar "
     onPress={ () => navigation.goBack() }
    />

    <Button //botao que chama a funcao ir para insp externa pg5
    title="Ir para Revisão"
    onPress={ irRevisao }
    />
    <View style={{height: 120, backgroundColor: '#64CAD9'}}></View>
    </View>
   );
 }