import { I18n } from "i18n-js";
import en from "../translations/en.json";
import es from "../translations/es.json";

const i18n = new I18n({ es, en });
i18n.defaultLocale = "es";
i18n.locale = "es";

export default i18n;
