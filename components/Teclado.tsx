import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type TecladoProps = {
  onLetraPressionada: (letra: string) => void;
  letrasDesabilitadas: string[];
};

export default function Teclado({ onLetraPressionada, letrasDesabilitadas }: TecladoProps) {
  return (
    <View style={styles.container}>
      {LETRAS.map((letra) => {
        const desabilitado = letrasDesabilitadas.includes(letra);

        return (
          <TouchableOpacity
            key={letra}
            style={[styles.botao, desabilitado && styles.botaoDesabilitado]}
            onPress={() => onLetraPressionada(letra)}
            disabled={desabilitado}
          >
            <Text style={styles.textoBotao}>{letra}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 5,
  },
  botao: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333', // Fundo do botão cinza escuro
    margin: 5,
    borderRadius: 10,
    // Sombra para um efeito elevado
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  botaoDesabilitado: {
    backgroundColor: '#555555', // Cinza mais claro para desabilitado
    opacity: 0.6,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});