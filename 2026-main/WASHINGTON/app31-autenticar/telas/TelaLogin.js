import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { autenticacao } from '../config/firebaseConfig';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const fazerLogin = async () => {
    try {
      await signInWithEmailAndPassword(autenticacao, email, senha);
    } catch (erro) {
      setErro('Erro ao fazer login. Verifique seus dados.');
    }
  };

  return (
    <LinearGradient colors={["#50c6d0", "#5b4cd1"]} style={estilos.fundo}>
      <KeyboardAvoidingView
        style={estilos.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={estilos.card}>
          <Text style={estilos.titulo}>Login</Text>

          <Text style={estilos.label}>Username</Text>
          <TextInput
            style={estilos.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            placeholderTextColor="#b8bbc3"
          />

          <Text style={estilos.label}>Password</Text>
          <TextInput
            style={estilos.input}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            placeholder="Digite sua senha"
            placeholderTextColor="#b8bbc3"
          />

          {erro ? <Text style={estilos.erro}>{erro}</Text> : null}

          <TouchableOpacity style={estilos.botao} onPress={fazerLogin}>
            <Text style={estilos.botaoTexto}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.link} onPress={() => navigation.navigate('Cadastro')}>
            <Text style={estilos.linkTexto}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    borderRadius: 36,
    padding: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.18)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.35)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.12,
    shadowRadius: 30,
    elevation: 10,
  },
  titulo: {
    fontSize: 34,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    color: '#edf0f8',
    marginBottom: 8,
    marginTop: 12,
    fontSize: 14,
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 25,
    paddingHorizontal: 18,
    fontSize: 16,
    color: '#1a1a1a',
    marginBottom: 8,
  },
  botao: {
    marginTop: 20,
    height: 52,
    borderRadius: 28,
    backgroundColor: '#61a8ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  erro: {
    color: '#ffdddd',
    marginTop: 10,
    textAlign: 'center',
  },
  link: {
    marginTop: 16,
    alignItems: 'center',
  },
  linkTexto: {
    color: '#ecf2ff',
    fontSize: 15,
  },
});