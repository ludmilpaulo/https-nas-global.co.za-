import { StyleSheet, Text, View } from "react-native";

import { Screen } from "../components/Screen";
import { theme } from "../theme";
import { getSystemLocale, t } from "../i18n";

export function HomeScreen() {
  const locale = getSystemLocale();
  return (
    <Screen>
      <View style={styles.hero}>
        <Text style={styles.kicker}>{t("home.kicker", locale)}</Text>
        <Text style={styles.title}>{t("home.title", locale)}</Text>
        <Text style={styles.subtitle}>{t("home.subtitle", locale)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{t("home.industries", locale)}</Text>
        {[
          "Oil & Gas",
          "Petrochemical",
          "Mining",
          "Construction",
          "Power Generation",
          "Agricultural",
        ].map((i) => (
          <Text key={i} style={styles.item}>
            • {i}
          </Text>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: theme.radius.xl,
    padding: 18,
    backgroundColor: theme.colors.card,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
  },
  kicker: {
    color: theme.colors.muted,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  title: {
    marginTop: 10,
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: "800",
    lineHeight: 28,
  },
  subtitle: {
    marginTop: 10,
    color: theme.colors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  card: {
    marginTop: 14,
    borderRadius: theme.radius.xl,
    padding: 18,
    backgroundColor: theme.colors.card,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
  },
  cardTitle: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 10,
  },
  item: {
    color: theme.colors.muted,
    fontSize: 14,
    lineHeight: 22,
  },
});

