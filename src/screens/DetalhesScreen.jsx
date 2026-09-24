import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const members = [
  {
    id: '1',
    name: 'Tiago Luchtenberg',
    avatar: require('../../assets/tiago.jpg'),
    status: 'Disponível',
  },
  {
    id: '2',
    name: 'Rodrigo Gonçalves',
    avatar: require('../../assets/rodrigo.jpg'),
    status: 'Ocupado',
  },
  {
    id: '3',
    name: 'Diego Fernandes',
    avatar: require('../../assets/diego.png'),
    status: 'Ocupado',
  },
];

export function DetalhesScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Voltar"
          hitSlop={8}
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            styles.backButton,
            pressed && styles.controlPressed,
          ]}
        >
          <FontAwesome name="arrow-left" size={20} color="#DDE3F0" />
        </Pressable>

        <Text style={styles.headerTitle}>Detalhes</Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Compartilhar"
          hitSlop={8}
          style={({ pressed }) => [
            styles.shareButton,
            pressed && styles.controlPressed,
          ]}
        >
          <FontAwesome name="share-alt" size={20} color="#E51C44" />
        </Pressable>
      </View>

      <View style={styles.content}>
        <ImageBackground
          style={styles.banner}
          imageStyle={styles.bannerImage}
          resizeMode="cover"
          source={require('../../assets/lendarios.png')}
        >
          <LinearGradient
            colors={[
              'rgba(18, 29, 51, 0)',
              'rgba(18, 29, 51, 0.6111)',
              'rgba(18, 29, 51, 0.8281)',
              '#121D33',
            ]}
            locations={[0, 0.55, 0.82, 1]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.bannerGradient}
          >
            <View style={styles.bannerInfo}>
              <Text style={styles.bannerTitle}>Lendários</Text>
              <Text style={styles.bannerSubtitle}>
                É hoje que vamos chegar ao challenger sem{'\n'}
                perder uma partida da md10
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.membersSectionHeader}>
          <Text style={styles.sectionTitle}>Jogadores</Text>
          <Text style={styles.membersCount}>Total {members.length}</Text>
        </View>

        <FlatList
          data={members}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.listDivider} />}
          renderItem={({ item }) => (
            <View style={styles.memberItem}>
              <View style={styles.avatarContainer}>
                <Image source={item.avatar} style={styles.avatar} />
              </View>
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>{item.name}</Text>
                <View style={styles.statusRow}>
                  <View
                    style={[
                      styles.statusDot,
                      {
                        backgroundColor:
                          item.status === 'Disponível' ? '#32BD50' : '#E51C44',
                      },
                    ]}
                  />
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </View>
            </View>
          )}
        />

        <View
          style={[
            styles.footer,
            { paddingBottom: Math.max(insets.bottom, 24) },
          ]}
        >
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Entrar na partida"
            style={({ pressed }) => [
              styles.joinButton,
              pressed && styles.controlPressed,
            ]}
          >
            <View style={styles.buttonIcon}>
              <AntDesign name="discord" size={24} color="#FFFFFF" />
            </View>
            <View style={styles.buttonLabel}>
              <Text style={styles.buttonText}>Entrar na partida</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1D2766',
  },
  header: {
    height: 64,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1D2766',
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: 'Rajdhani_700Bold',
    color: '#DDE3F0',
  },
  backButton: {
    position: 'absolute',
    left: 8,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareButton: {
    position: 'absolute',
    right: 8,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }],
  },
  content: {
    flex: 1,
    backgroundColor: '#0A1033',
  },
  banner: {
    width: '100%',
    height: 234,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bannerInfo: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 28,
    lineHeight: 36,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  bannerSubtitle: {
    color: '#DDE3F0',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  membersSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#DDE3F0',
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 18,
    lineHeight: 23,
  },
  membersCount: {
    color: '#ABB1CC',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 17,
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  memberItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1D2766',
    backgroundColor: '#171F52',
    overflow: 'hidden',
    marginRight: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  memberInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  memberName: {
    color: '#DDE3F0',
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 18,
    lineHeight: 23,
    marginBottom: 4,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  statusText: {
    color: '#ABB1CC',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 17,
  },
  listDivider: {
    height: 1,
    backgroundColor: '#1D2766',
    marginLeft: 64,
    marginVertical: 12,
  },
  footer: {
    paddingTop: 12,
    paddingHorizontal: 24,
    backgroundColor: '#0A1033',
  },
  joinButton: {
    backgroundColor: '#E51C44',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
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
    lineHeight: 20,
    color: '#DDE3F0',
  },
});
