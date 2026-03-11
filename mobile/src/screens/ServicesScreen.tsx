import { StyleSheet, Text, View } from "react-native";

import { Screen } from "../components/Screen";
import { theme } from "../theme";
import { getSystemLocale, t } from "../i18n";

export function ServicesScreen() {
  const locale = getSystemLocale();
  return (
    <Screen>
      <View style={styles.card}>
        <Text style={styles.title}>{t("services.title", locale)}</Text>
        <Text style={styles.subtitle}>{t("services.subtitle", locale)}</Text>
      </View>

      {[
        {
          title: t("services.s1.title", locale),
          body: t("services.s1.body", locale),
        },
        {
          title: t("services.s2.title", locale),
          body: t("services.s2.body", locale),
        },
        {
          title: t("services.s3.title", locale),
          body: t("services.s3.body", locale),
        },
      ].map((s) => (
        <View key={s.title} style={styles.service}>
          <Text style={styles.serviceTitle}>{s.title}</Text>
          <Text style={styles.serviceBody}>{s.body}</Text>
        </View>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.radius.xl,
    padding: 18,
    backgroundColor: theme.colors.card,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
  },
  title: {
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 28,
  },
  subtitle: {
    marginTop: 8,
    color: theme.colors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  service: {
    marginTop: 12,
    borderRadius: theme.radius.lg,
    padding: 16,
    backgroundColor: theme.colors.card,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
  },
  serviceTitle: {
    color: theme.colors.text,
    fontSize: 15,
    fontWeight: "800",
  },
  serviceBody: {
    marginTop: 6,
    color: theme.colors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
});

