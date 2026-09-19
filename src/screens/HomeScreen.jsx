import { StyleSheet, View, Text, Pressable, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';


const matches = [
    {
        id: '1',
        title: 'Lendários',
        type: 'Ranked',
        date: '18/06 às 21:00h',
        role: 'Anfitrião',
        image: require('../../assets/lol.png'),
    },
    {
        id: '2',
        title: 'Yeah, boy',
        type: 'Diversão',
        date: '23/06 às 19:00h',
        role: 'Visitante',
        image: require('../../assets/rdr2.png'),
    },
    {
        id: '3',
        title: 'Rumo ao topo',
        type: '1x1',
        date: '20/06 às 09:00h',
        role: 'Anfitrião',
        image: require('../../assets/cs.png'),
    },
    {
        id: '4',
        title: 'Bora queimar tudo',
        type: 'Ranked',
        date: '20/06 às 14:20h',
        role: 'Anfitrião',
        image: require('../../assets/apex.png'),
    },
    {
        id: '5',
        title: 'Valorosos',
        type: 'Diversão',
        date: '18/06 às 21:00h',
        role: 'Anfitrião',
        image: require('../../assets/valorant.png'),
    },
];

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Pressable style={styles.profileButton}>
                        <Image source={require('../../assets/profile-image.png')} style={styles.avatar} />
                    </Pressable>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.saudationText}>Olá,
                            <Text style={styles.userNameText}> Tiago</Text>
                        </Text>
                        <Text style={styles.motivationText}>Hoje é dia de vitória</Text>
                    </View>
                    <Pressable style={styles.addButton}>
                        <Text style={styles.addButtonText}>+</Text>
                    </Pressable>
                </View>

                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    style={styles.cardsScrollView}
                    contentContainerStyle={styles.cardsSection}
                >
                    <View style={styles.card}>
                        <Image source={require('../../assets/ranked-icon.png')} style={styles.filterIcons} />
                        <Text style={styles.cardText}>Ranked</Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../../assets/duel-icon.png')} style={styles.filterIcons} />
                        <Text style={styles.cardText}>Duelo 1x1</Text>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../../assets/fun-icon.png')} style={styles.filterIcons} />
                        <Text style={styles.cardText}>Diversão</Text>
                    </View>
                    {/* O card falso no final da lista rolável */}
                    <View style={styles.fakeCard}></View>
                </ScrollView>

                <View style={styles.listHeader}>
                    <Text style={styles.listHeaderText}>Partidas agendadas</Text>
                    <Text style={styles.listHeaderCount}>Total: {matches.length}</Text>
                </View>

                <FlatList
                    style={styles.list}
                    contentContainerStyle={{ paddingBottom: 40 }}
                    data={matches}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.listDivider} />}
                    renderItem={({item}) => (
                        <View style={styles.listItem}>
                            <View style={styles.itemImage}>
                                <Image source={item.image} style={styles.imageInside} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.itemTitleText}>{item.title}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    <FontAwesome name="calendar-o" size={18} color="#E51C44" />
                                    <Text style={styles.itemDateText}>{item.date}</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={styles.itemTypeText}>{item.type}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    <FontAwesome name="user" size={18} color={item.role === 'Anfitrião' ? '#E51C44' : '#32BD50'} />
                                    <Text style={[styles.itemRoleText, { color: item.role === 'Anfitrião' ? '#E51C44' : '#32BD50' }]}>{item.role}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0A1033',
    },
    container: {
        flex: 1, // Isso é ESSENCIAL para a lista saber onde a tela termina e habilitar a rolagem!
        marginLeft: 24,
        marginTop: 10,
        marginRight: 24,
    },
    list: {
        flex: 1, // Faz a área da lista ocupar todo o espaço restante até o final da tela
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileButton: {
        backgroundColor: '#E51C44',
        width: 48,
        height: 48,
        borderRadius: 8,
    },
    avatar: {
        width: 46,
        height: 46,
    },
    headerTextContainer: {
        flex: 1,
        marginTop: -15
    },
    saudationText: {
        fontFamily: 'Rajdhani_500Medium',
        color: '#DDE3F0',
        fontSize: 24,
        marginLeft: 24,
        marginTop: 16,
    },
    userNameText: {
        fontFamily: 'Rajdhani_700Bold',
    },
    motivationText: {
        fontFamily: 'Inter_400Regular',
        color: '#ABB1CC',
        fontSize: 13,
        marginLeft: 24,
    },
    addButton: {
        backgroundColor: '#E51C44',
        width: 48,
        height: 48,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#DDE3F0',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 6,
    },
    cardsScrollView: {
        marginTop: 42,
        marginHorizontal: -24,
        // Limitar a altura máxima garante que o ScrollView não cresça descontroladamente no Android
        maxHeight: 125, 
    },
    
    cardsSection: {
        flexDirection: 'row',
        paddingHorizontal: 24, // Alinha os cards com o resto do app
        gap: 16
    },

    card: {
        width: 104,
        height: 120,
        backgroundColor: '#171F52',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#1D2766',
        justifyContent: 'space-between',
        padding: 15,
    },

    fakeCard: {
        width: 104,
        height: 120,
        backgroundColor: '#171F52',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#1D2766',
    },

    filterIcons: {
        width: 48,
        height: 48,
        alignSelf: 'center',
    },

    cardText: {
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 15,
        textAlign: 'center',
    },

    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32, // Estava 80, reduzi para ficar mais próximo
        marginBottom: 16, // Estava 40, reduzi também
    },

    listHeaderText: {
        fontFamily: 'Rajdhani_700Bold',
        color: '#DDE3F0',
        fontSize: 18,
    },

    listHeaderCount: {
        fontFamily: 'Inter_500Regular',
        color: '#ABB1CC',
        fontSize: 13,
    },

    listItem: {
        height: 69,
        flexDirection: 'row',
        alignItems: 'center',
    },

    listDivider: {
        height: 1,
        backgroundColor: '#1D2766',
        marginLeft: 80,
        marginTop: 16,
        marginBottom: 16,
    },

    itemImage: {
        borderWidth: 1,
        borderColor: '#1D2766',
        width: 64,
        height: 68,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 16,
    },
    
    imageInside: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    itemTitleText: {
        color: '#DDE3F0',
        fontFamily: 'Rajdhani_700Bold',
        fontSize: 18,
        marginBottom: 4,
    },
    itemTypeText: {
        color: '#ABB1CC',
        fontFamily: 'Inter_400Medium',
        fontSize: 13,
        marginBottom: 10,
    },
    itemRoleText: {
        color: '#ABB1CC',
        fontFamily: 'Inter_400Medium',
        fontSize: 13,
        marginBottom: 4,
    },
    itemDateText: {
        color: '#ABB1CC',
        fontFamily: 'Inter_500Medium',
        fontSize: 13,
    }
});
