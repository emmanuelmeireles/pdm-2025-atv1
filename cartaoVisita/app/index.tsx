import React from 'react';
   import { View, Text, Image, StyleSheet } from 'react-native';

   export default function App() {
     return (
       <View style={styles.container}>
         <Image
           source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQFk41mngKDGJQ/profile-displayphoto-shrink_800_800/B4DZWbwRUaHkAg-/0/1742074877670?e=1747872000&v=beta&t=7rH6vLCt3YpCZAYJnnTfuci69wMYpcnM6Q-hkcbaxxc' }}
           style={styles.image}
         />
         <Text style={styles.nome}>Emmanuel Meireles Silva</Text>
         <Text style={styles.profissao}>Desenvolvedor FullStack</Text>
         <Text style={styles.email}>emmanuelmeireles@gmail.com</Text>
         <Text style={styles.contato}>(81) 995-067-082</Text>
       </View>
     );
   }

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#f9f9f9',
     },
     image: {
       width: 100,
       height: 100,
       borderRadius: 50,
       marginBottom: 20,
     },
     nome: {
       fontSize: 24,
       fontWeight: 'bold',
       marginBottom: 5,
     },
     profissao: {
       fontSize: 18,
       color: '#666',
       marginBottom: 15,
     },
     email: {
       fontSize: 16,
     },
   });
