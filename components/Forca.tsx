import React from 'react';
import { View, StyleSheet } from 'react-native';

type ForcaProps = {
  numeroErros: number;
};

export default function Forca({ numeroErros }: ForcaProps) {
  return (
    <View style={styles.container}>
      {/* Estrutura da Forca (sempre visível) */}
      <View style={styles.posteVertical} />
      <View style={styles.vigaHorizontal} />
      <View style={styles.base} />
      <View style={styles.corda} />

      {/* Partes do boneco (visibilidade condicional) */}
      {numeroErros > 0 && <View style={styles.cabeca} />}
      {numeroErros > 1 && <View style={styles.corpo} />}
      {numeroErros > 2 && <View style={styles.bracoEsquerdo} />}
      {numeroErros > 3 && <View style={styles.bracoDireito} />}
      {numeroErros > 4 && <View style={styles.pernaEsquerda} />}
      {numeroErros > 5 && <View style={styles.pernaDireita} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 250,
    position: 'relative',
    marginBottom: 20,
  },
  base: {
    height: 5,
    width: 150,
    backgroundColor: '#333',
    position: 'absolute',
    bottom: 0,
    left: 25,
  },
  posteVertical: {
    height: 245,
    width: 5,
    backgroundColor: '#333',
    position: 'absolute',
    bottom: 0,
    left: 50,
  },
  vigaHorizontal: {
    height: 5,
    width: 100,
    backgroundColor: '#333',
    position: 'absolute',
    top: 0,
    left: 50,
  },
  corda: {
    width: 5,
    height: 30,
    backgroundColor: '#333',
    position: 'absolute',
    top: 0,
    left: 145,
  },
  cabeca: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#333',
    position: 'absolute',
    top: 30,
    left: 125,
  },
  corpo: {
    width: 5,
    height: 70,
    backgroundColor: '#333',
    position: 'absolute',
    top: 70,
    left: 145,
  },
  bracoEsquerdo: {
    width: 50,
    height: 5,
    backgroundColor: '#333',
    position: 'absolute',
    top: 95,
    left: 100,
    transform: [{ rotate: '135deg' }],
  },
  bracoDireito: {
    width: 50,
    height: 5,
    backgroundColor: '#333',
    position: 'absolute',
    top: 95,
    left: 145,
    transform: [{ rotate: '45deg' }],
  },
  pernaEsquerda: {
    width: 50,
    height: 5,
    backgroundColor: '#333',
    position: 'absolute',
    top: 150,
    left: 101,
    transform: [{ rotate: '-45deg' }],
  },
  pernaDireita: {
    width: 50,
    height: 5,
    backgroundColor: '#333',
    position: 'absolute',
    top: 150,
    left: 145,
    transform: [{ rotate: '45deg' }],
  },
});