### WeatherApp by Nghia and Thanh

## Các config trong dự án

1. **Git Ignore:**
   Đảm bảo đã thêm `android/` vào file `.gitignore` để loại bỏ các file không cần thiết.

2. **Biến Môi Trường:**
'.env' , ngoài ra còn trong services/

3. **Phiên Bản Cần Thiết:**
   - Sử dụng Node.js v16.
   - Phiên bản API Mobile: 32.
   - Gradle: 7.5.1.

4. **Dependencies:**
   - React: ^18.2.0
   - React Native: ^0.70.13
   - React Native Vector Icons: ^9.2.0

## Cấu Hình REST API

1. Mở terminal và chạy `ipconfig` để lấy địa chỉ IPv4.
2. Tìm port đang chạy và copy địa chỉ ipV4.
3. Sửa lại URL API trong file `service/constants` (ví dụ: http://192.168.1.18:3000/api/news).
**nhớ giữ lại port 3000 nha
## Khởi Chạy Database
Chạy file DB trước khi khởi chạy dự án:
```bash
cd connectDB
node server.js
```
## Khởi Chạy dự án react-native

```bash
react-native-cli run-android
hoặc
react-native run-android
hoặc
npm start
```

Kiểm Tra Trước Location :
***Mở Google Maps để kiểm tra xem đã cập nhật chưa.***


