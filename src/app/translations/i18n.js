import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        translation: {
          // Thêm các bản dịch của bạn ở đây
          "welcome": "Chào mừng"
        }
      },
      en: {
        translation: {
          "welcome": "Welcome"
        }
      },
      // Thêm các ngôn ngữ khác nếu cần
    },
    lng: 'vi', // Đặt tiếng Việt làm ngôn ngữ mặc định
    fallbackLng: 'vi', // Sử dụng tiếng Việt nếu không tìm thấy bản dịch
    interpolation: {
      escapeValue: false // React đã xử lý việc escaping
    }
  });

export default i18n;