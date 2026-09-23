import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const categories = [
  {
    id: 'ranked',
    label: 'Ranqueada',
    image: require('../../assets/ranked-icon.png'),
  },
  {
    id: 'duel',
    label: 'Duelo 1x1',
    image: require('../../assets/duel-icon.png'),
  },
  {
    id: 'fun',
    label: 'Diversão',
    image: require('../../assets/fun-icon.png'),
  },
];

const horizontalPadding = 24;
const categoryGap = 8;
const maximumCategoryWidth = 104;

export function AgendarScreen({ navigation }) {
  const { width: screenWidth } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');
  const categoryWidth = Math.min(
    maximumCategoryWidth,
    (screenWidth - horizontalPadding * 2 - categoryGap * 2) / 3,
  );

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
        <Text style={styles.headerTitle}>Agendar partida</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.content}
      >
        <ScrollView
          contentContainerStyle={styles.form}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text style={[styles.sectionLabel, styles.categorySectionLabel]}>
              Categoria
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categories}
              style={styles.categoriesScroll}
            >
              {categories.map((category) => {
                const isSelected = selectedCategory === category.id;

                return (
                  <Pressable
                    accessibilityRole="radio"
                    accessibilityLabel={category.label}
                    accessibilityState={{ checked: isSelected }}
                    key={category.id}
                    onPress={() => setSelectedCategory(category.id)}
                    style={({ pressed }) => [
                      styles.categoryCard,
                      { width: categoryWidth },
                      !isSelected && styles.categoryCardInactive,
                      pressed && styles.controlPressed,
                    ]}
                  >
                    <View
                      style={[
                        styles.selectionIndicator,
                        isSelected && styles.selectionIndicatorSelected,
                      ]}
                    />
                    <Image source={category.image} style={styles.categoryIcon} />
                    <Text style={styles.categoryText}>{category.label}</Text>
                  </Pressable>
                );
              })}
              <View style={[styles.categoryTail, { width: categoryWidth }]} />
            </ScrollView>
          </View>

          <View
            accessibilityLabel="Selecione um servidor"
            accessibilityRole="button"
            accessibilityState={{ disabled: true }}
            accessible
            style={styles.serverSelect}
          >
            <View style={styles.serverIconPlaceholder} />
            <Text style={styles.serverSelectText}>Selecione um servidor</Text>
            <FontAwesome name="angle-right" size={20} color="#DDE3F0" />
          </View>

          <View style={styles.dateTimeRow}>
            <View style={styles.fieldGroup}>
              <Text style={styles.sectionLabel}>Dia e mês</Text>
              <View style={styles.compoundInputRow}>
                <TextInput
                  accessibilityLabel="Dia"
                  keyboardType="number-pad"
                  maxLength={2}
                  onChangeText={setDay}
                  selectionColor="#E51C44"
                  style={styles.shortInput}
                  value={day}
                />
                <Text style={styles.inputSeparator}>/</Text>
                <TextInput
                  accessibilityLabel="Mês"
                  keyboardType="number-pad"
                  maxLength={2}
                  onChangeText={setMonth}
                  selectionColor="#E51C44"
                  style={styles.shortInput}
                  value={month}
                />
              </View>
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.sectionLabel}>Horário</Text>
              <View style={styles.compoundInputRow}>
                <TextInput
                  accessibilityLabel="Hora"
                  keyboardType="number-pad"
                  maxLength={2}
                  onChangeText={setHour}
                  selectionColor="#E51C44"
                  style={styles.shortInput}
                  value={hour}
                />
                <Text style={styles.inputSeparator}>:</Text>
                <TextInput
                  accessibilityLabel="Minutos"
                  keyboardType="number-pad"
                  maxLength={2}
                  onChangeText={setMinute}
                  selectionColor="#E51C44"
                  style={styles.shortInput}
                  value={minute}
                />
              </View>
            </View>
          </View>

          <View style={styles.descriptionGroup}>
            <View style={styles.descriptionHeader}>
              <Text style={styles.sectionLabel}>Descrição</Text>
              <Text style={styles.characterLimit}>Max. 100 caracteres</Text>
            </View>
            <TextInput
              accessibilityLabel="Descrição"
              maxLength={100}
              multiline
              onChangeText={setDescription}
              selectionColor="#E51C44"
              style={styles.descriptionInput}
              textAlignVertical="top"
              value={description}
            />
          </View>

        </ScrollView>

        <View
          style={[
            styles.footer,
            { paddingBottom: Math.max(insets.bottom, 24) },
          ]}
        >
          <View
            accessibilityLabel="Agendar"
            accessibilityRole="button"
            accessibilityState={{ disabled: true }}
            accessible
            style={styles.scheduleButton}
          >
            <Text style={styles.scheduleButtonText}>Agendar</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
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
  controlPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }],
  },
  content: {
    flex: 1,
    backgroundColor: '#0A1033',
  },
  form: {
    flexGrow: 1,
    paddingTop: 30,
    paddingBottom: 24,
  },
  sectionLabel: {
    color: '#DDE3F0',
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 18,
    lineHeight: 23,
  },
  categorySectionLabel: {
    marginLeft: 24,
  },
  categoriesScroll: {
    marginTop: 10,
  },
  categories: {
    gap: categoryGap,
    paddingHorizontal: horizontalPadding,
  },
  categoryCard: {
    height: 120,
    paddingHorizontal: 8,
    paddingTop: 14,
    paddingBottom: 12,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#273582',
    backgroundColor: '#171F52',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryCardInactive: {
    opacity: 0.42,
  },
  selectionIndicator: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 7,
    height: 7,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#34428C',
  },
  selectionIndicatorSelected: {
    borderColor: '#E51C44',
    backgroundColor: '#E51C44',
  },
  categoryIcon: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  categoryText: {
    color: '#DDE3F0',
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
  },
  categoryTail: {
    height: 120,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#273582',
    backgroundColor: '#171F52',
    opacity: 0.42,
  },
  serverSelect: {
    height: 68,
    marginTop: 28,
    marginHorizontal: horizontalPadding,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#273582',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  serverIconPlaceholder: {
    width: 56,
    height: '100%',
    marginRight: 16,
    borderRadius: 7,
    backgroundColor: '#1D2766',
  },
  serverSelectText: {
    flex: 1,
    color: '#DDE3F0',
    fontFamily: 'Rajdhani_700Bold',
    fontSize: 15,
    lineHeight: 20,
  },
  dateTimeRow: {
    marginTop: 25,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldGroup: {
    width: 106,
  },
  compoundInputRow: {
    marginTop: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shortInput: {
    width: 48,
    height: 48,
    paddingHorizontal: 7,
    borderWidth: 1,
    borderColor: '#273582',
    borderRadius: 7,
    backgroundColor: '#1D2766',
    color: '#DDE3F0',
    fontFamily: 'Inter_500Medium',
    fontSize: 15,
    textAlign: 'center',
  },
  inputSeparator: {
    width: 10,
    color: '#DDE3F0',
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    textAlign: 'center',
  },
  descriptionGroup: {
    marginTop: 25,
    marginHorizontal: 24,
  },
  descriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  characterLimit: {
    color: '#ABB1CC',
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    lineHeight: 18,
  },
  descriptionInput: {
    width: '100%',
    height: 95,
    marginTop: 11,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#273582',
    borderRadius: 7,
    backgroundColor: '#1D2766',
    color: '#DDE3F0',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    paddingTop: 12,
    paddingHorizontal: horizontalPadding,
    backgroundColor: '#0A1033',
  },
  scheduleButton: {
    height: 50,
    borderRadius: 7,
    backgroundColor: '#E51C44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scheduleButtonText: {
    color: '#DDE3F0',
    fontFamily: 'Inter_500Medium',
    fontSize: 15,
    lineHeight: 20,
  },
});
