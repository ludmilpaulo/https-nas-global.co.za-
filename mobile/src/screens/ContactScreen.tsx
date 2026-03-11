import type { ComponentProps } from "react";
import { useMemo, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

import { submitContact } from "../api";
import { Screen } from "../components/Screen";
import { theme } from "../theme";
import { getSystemLocale, t } from "../i18n";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactScreen() {
  const locale = getSystemLocale();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const validation = useMemo(() => {
    if (!name.trim()) return t("form.validation.name", locale);
    if (!isEmail(email)) return t("form.validation.email", locale);
    if (message.trim().length < 10) return t("form.validation.message", locale);
    return "";
  }, [email, locale, message, name]);

  async function onSubmit() {
    if (validation) {
      Alert.alert(t("alert.checkDetails.title", locale), validation);
      return;
    }
    setSubmitting(true);
    try {
      await submitContact({ name, email, company, message, source: "mobile" });
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      Alert.alert(t("alert.sent.title", locale), t("alert.sent.body", locale));
    } catch {
      Alert.alert(
        t("alert.failed.title", locale),
        t("alert.failed.body", locale),
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Screen>
      <View style={styles.card}>
        <Text style={styles.title}>{t("contact.title", locale)}</Text>
        <Text style={styles.subtitle}>
          {t("contact.subtitle", locale)}
        </Text>

        <View style={styles.form}>
          <Label text={t("form.name", locale)} />
          <Input
            value={name}
            onChangeText={setName}
            placeholder={t("form.placeholder.name", locale)}
          />

          <Label text={t("form.email", locale)} />
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder={t("form.placeholder.email", locale)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Label text={t("form.companyOptional", locale)} />
          <Input
            value={company}
            onChangeText={setCompany}
            placeholder={t("form.placeholder.company", locale)}
          />

          <Label text={t("form.message", locale)} />
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder={t("form.placeholder.message", locale)}
            placeholderTextColor={theme.colors.muted}
            multiline
            style={[styles.input, styles.textarea]}
          />

          <PressableButton onPress={onSubmit} disabled={submitting} locale={locale} />

          <Text style={styles.note}>
            {t("form.noteEmail", locale)}{" "}
            <Text style={styles.link}>sales@nas-global.co.za</Text>
          </Text>
        </View>
      </View>
    </Screen>
  );
}

function Label({ text }: { text: string }) {
  return <Text style={styles.label}>{text}</Text>;
}

function Input(props: ComponentProps<typeof TextInput>) {
  return (
    <TextInput
      placeholderTextColor={theme.colors.muted}
      style={styles.input}
      {...props}
    />
  );
}

function PressableButton({
  onPress,
  disabled,
  locale,
}: {
  onPress: () => void;
  disabled: boolean;
  locale: "en" | "pt";
}) {
  return (
    <Text
      accessibilityRole="button"
      onPress={disabled ? undefined : onPress}
      style={[styles.button, disabled ? styles.buttonDisabled : null]}
    >
      {disabled ? t("form.sending", locale) : t("form.send", locale)}
    </Text>
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
  form: {
    marginTop: 16,
  },
  label: {
    marginTop: 10,
    marginBottom: 6,
    color: theme.colors.text,
    fontSize: 13,
    fontWeight: "700",
  },
  input: {
    height: 48,
    borderRadius: theme.radius.md,
    paddingHorizontal: 12,
    color: theme.colors.text,
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border,
  },
  textarea: {
    height: 120,
    paddingTop: 12,
    textAlignVertical: "top",
  },
  button: {
    marginTop: 14,
    borderRadius: 999,
    paddingVertical: 12,
    textAlign: "center",
    fontWeight: "900",
    color: "#08111f",
    backgroundColor: theme.colors.brand2,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  note: {
    marginTop: 12,
    color: theme.colors.muted,
    fontSize: 12,
    lineHeight: 18,
  },
  link: {
    color: theme.colors.text,
    fontWeight: "800",
  },
});

