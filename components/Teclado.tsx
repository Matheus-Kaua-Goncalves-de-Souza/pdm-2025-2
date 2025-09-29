import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LETRAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// --- ATUALIZAÇÃO: Adicionamos a prop 'letrasDesabilitadas' ---
type TecladoProps = {
  onLetraPressionada: (letra: string) => void;
  letrasDesabilitadas: string[];
};

export default function Teclado({ onLetraPressionada, letrasDesabilitadas }: TecladoProps) {
  return (
    <View style={styles.container}>
      {LETRAS.map((letra) => {
        // Verifica se a letra atual já foi tentada
        const desabilitado = letrasDesabilitadas.includes(letra);

        return (
          <TouchableOpacity
            key={letra}
            // --- ATUALIZAÇÃO: Aplica um estilo diferente se o botão estiver desabilitado ---
            style={[styles.botao, desabilitado && styles.botaoDesabilitado]}
            onPress={() => onLetraPressionada(letra)}
            // --- ATUALIZAÇÃO: Desativa o botão se a letra já foi usada ---
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
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    margin: 4,
    borderRadius: 8,
  },
  // --- NOVO: Estilo para os botões desativados ---
  botaoDesabilitado: {
    backgroundColor: '#a9a9a9', // Cinzento
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});