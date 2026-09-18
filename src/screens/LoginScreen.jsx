import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View pointerEvents="none" style={styles.background}>
        <Image
          source={require('../../assets/login-background-symbol.webp')}
          style={styles.backgroundImageSymbol}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/login-background-fighter.webp')}
          style={styles.backgroundImageFighter}
          resizeMode="contain"
        />
      </View>
      <LinearGradient
        pointerEvents="none"
        colors={[
          'rgba(14, 22, 71, 0)',
          'rgba(14, 22, 71, 0.55)',
          'rgba(14, 22, 71, 0.92)',
          '#0E1647',
        ]}
        locations={[0, 0.32, 0.72, 1]}
        style={styles.imageFade}
      />
      <View style={styles.content}>
          <Text style={styles.contentText1}>Conecte-se{'\n'}
            e organize suas
            jogatinas
          </Text>
          <Text style={styles.contentText2}>
            Crie grupos para jogar seus games{'\n'}
            favoritos com seus amigos
          </Text>
        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.replace('Home')}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <View style={styles.buttonIcon}>
            <AntDesign name="discord" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.buttonLabel}>
            <Text style={styles.buttonText}>Entrar com Discord</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0E1647',
  },
  background: {
    width: '100%',
    alignItems: 'center',
    marginTop: -114.51,
    overflow: 'hidden',
  },
  backgroundImageSymbol: {
    width: '100%',
    maxWidth: '100%',
    aspectRatio: 375 / 360,
  },
  backgroundImageFighter: {
    width: 250,
    maxWidth: 297,
    aspectRatio: 375 / 360,
    marginTop: -660
  },
  imageFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 345,
    height: 135,
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
    zIndex: 1,
    marginTop: -160,
  },
  contentText1: {
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 40,
    lineHeight: 40,
    color: '#DDE3F0',
    textAlign: 'center',
  },
  contentText2: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    lineHeight: 25,
    color: '#DDE3F0',
    textAlign: 'center',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#E61C44',
    width: 274,
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 52,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.86,
    transform: [{ scale: 0.98 }],
  },
  buttonIcon: {
    width: 56,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#991F36',
  },
  buttonLabel: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 15,
    lineHeight: 25,
    color: '#DDE3F0',
  },
});
